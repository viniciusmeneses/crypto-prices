import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { graphql } from "msw";

import { AssetLastPriceQuery } from "../../graphql/generated";
import { graphqlServer, render } from "../../mocks";
import { AddAssetForm } from ".";

describe("AddAssetForm", () => {
  it("should have a input and a button", () => {
    render(<AddAssetForm />);
    const input = screen.getByRole("textbox", { name: /cryptocurrency code/i });
    const submitButton = screen.getByRole("button", { name: /add/i });

    expect(input).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("should not submit form if input is blank", async () => {
    const onSubmit = jest.fn();
    render(<AddAssetForm onSuccess={onSubmit} />);

    const submitButton = screen.getByRole("button");

    userEvent.click(submitButton);
    await waitFor(() => expect(onSubmit).not.toBeCalled());
  });

  it("should submit on button click or press enter", async () => {
    const onSubmit = jest.fn();
    render(<AddAssetForm onSuccess={onSubmit} />);

    const input = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button");

    userEvent.type(input, "BTC{enter}");
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());

    onSubmit.mockClear();

    userEvent.type(input, "BTC");
    userEvent.click(submitButton);
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });

  it("should show error message on submit invalid asset code", async () => {
    graphqlServer.use(
      graphql.query<AssetLastPriceQuery>("AssetLastPrice", (_, res, ctx) =>
        res(ctx.data({ __typename: "Query", markets: [] })),
      ),
    );

    render(<AddAssetForm />);

    const input = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button");

    userEvent.type(input, "Invalid cryptocurrency code");
    userEvent.click(submitButton);

    const errorMessage = await screen.findByText(/invalid cryptocurrency code/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
