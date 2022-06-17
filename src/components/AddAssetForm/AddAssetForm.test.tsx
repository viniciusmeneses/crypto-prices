import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { graphql } from "msw";

import { AssetLastPriceQuery } from "../../graphql/generated";
import { graphqlServer, render } from "../../mocks";
import { AddAssetForm } from ".";

const fn = () => {};

describe("AddAssetForm", () => {
  it("should have a input and a button", () => {
    render(<AddAssetForm onSuccess={fn} />);
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

    render(<AddAssetForm onSuccess={fn} />);

    const input = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button");

    userEvent.type(input, "Invalid code");
    userEvent.click(submitButton);

    const errorMessage = await screen.findByText(/invalid code/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should show error message on API error", async () => {
    graphqlServer.use(
      graphql.query<AssetLastPriceQuery>("AssetLastPrice", (_, res, ctx) =>
        res(ctx.errors([{ message: "Sample error" }])),
      ),
    );

    render(<AddAssetForm onSuccess={fn} />);

    const input = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button");

    userEvent.type(input, "BTC");
    userEvent.click(submitButton);

    const errorMessage = await screen.findByText(/failed to get cryptocurrency/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
