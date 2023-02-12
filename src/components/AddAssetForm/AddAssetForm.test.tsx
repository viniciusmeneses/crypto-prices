import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { graphql } from "msw";

import { AssetLastPriceQuery } from "../../graphql/generated";
import { graphqlServer, render } from "../../mocks";
import { AddAssetForm } from ".";

const mockProps = { onSuccess: jest.fn() };

describe("AddAssetForm", () => {
  it("should render input and button", () => {
    render(<AddAssetForm {...mockProps} />);
    const input = screen.getByRole("textbox", { name: /cryptocurrency code/i });
    const submitButton = screen.getByRole("button", { name: /add/i });

    expect(input).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  describe("when input is blank", () => {
    it("should not submit form", async () => {
      render(<AddAssetForm {...mockProps} />);

      const submitButton = screen.getByRole("button");

      userEvent.click(submitButton);
      await new Promise(process.nextTick);
      expect(mockProps.onSuccess).not.toBeCalled();
    });
  });

  describe("when click on button or press enter", () => {
    it("should submit form", async () => {
      render(<AddAssetForm {...mockProps} />);

      const input = screen.getByRole("textbox");
      const submitButton = screen.getByRole("button");

      userEvent.type(input, "BTC{enter}");
      await waitFor(() => expect(mockProps.onSuccess).toHaveBeenCalled());

      mockProps.onSuccess.mockClear();

      userEvent.type(input, "BTC");
      userEvent.click(submitButton);
      await waitFor(() => expect(mockProps.onSuccess).toHaveBeenCalled());
    });
  });

  describe("when submit invalid asset code", () => {
    it("should show error message", async () => {
      graphqlServer.use(
        graphql.query<AssetLastPriceQuery>("AssetLastPrice", (_, res, ctx) =>
          res(ctx.data({ __typename: "Query", markets: [] })),
        ),
      );

      render(<AddAssetForm {...mockProps} />);

      const input = screen.getByRole("textbox");
      const submitButton = screen.getByRole("button");

      userEvent.type(input, "Invalid code");
      userEvent.click(submitButton);

      const errorMessage = await screen.findByText(/invalid code/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("when API returns an error", () => {
    it("should render error message", async () => {
      graphqlServer.use(
        graphql.query<AssetLastPriceQuery>("AssetLastPrice", (_, res, ctx) =>
          res(ctx.errors([{ message: "Sample error" }])),
        ),
      );

      render(<AddAssetForm {...mockProps} />);

      const input = screen.getByRole("textbox");
      const submitButton = screen.getByRole("button");

      userEvent.type(input, "BTC");
      userEvent.click(submitButton);

      const errorMessage = await screen.findByText(/failed to get cryptocurrency/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
