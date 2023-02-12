import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { graphql } from "msw";

import { AssetLastPriceQuery } from "../../graphql/generated";
import { graphqlServer, render } from "../../mocks";
import { Asset } from ".";

const mockProps = { code: "BTC", onRemove: jest.fn() };

describe("Asset", () => {
  it("should render asset code and price", async () => {
    render(<Asset {...mockProps} />);
    const assetCode = screen.getByText("BTC");
    const assetPrice = await screen.findByText("20000.00 €");

    expect(assetCode).toBeInTheDocument();
    expect(assetPrice).toBeInTheDocument();
  });

  describe("when click on remove button", () => {
    it("should trigger onRemove", () => {
      render(<Asset {...mockProps} />);
      const removeButton = screen.getByRole("button");

      userEvent.click(removeButton);

      expect(mockProps.onRemove).toBeCalled();
    });
  });

  describe("when fetching asset", () => {
    it("should render loading message", () => {
      render(<Asset {...mockProps} />);
      const loadingText = screen.getByText("Loading...");
      expect(loadingText).toBeInTheDocument();
    });
  });

  describe("when API returns an error", () => {
    it("should render error message", async () => {
      graphqlServer.use(
        graphql.query<AssetLastPriceQuery>("AssetLastPrice", (_, res, ctx) =>
          res(ctx.errors([{ message: "Sample error" }])),
        ),
      );

      render(<Asset {...mockProps} code="INVALID" />);
      const errorMessage = await screen.findByText("Failed to load price");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
