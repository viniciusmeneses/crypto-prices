import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { graphql } from "msw";

import { AssetLastPriceQuery } from "../../graphql/generated";
import { graphqlServer, render } from "../../mocks";
import { Asset } from ".";

const fn = () => {};

describe("Asset", () => {
  it("should render asset code and price", async () => {
    render(<Asset code="BTC" onRemove={fn} />);
    const assetCode = screen.getByText("BTC");
    const assetPrice = await screen.findByText("20000.00 €");

    expect(assetCode).toBeInTheDocument();
    expect(assetPrice).toBeInTheDocument();
  });

  it("should trigger onRemove on click remove button", () => {
    const onRemove = jest.fn();

    render(<Asset code="BTC" onRemove={onRemove} />);
    const removeButton = screen.getByRole("button");

    userEvent.click(removeButton);

    expect(onRemove).toBeCalled();
  });

  it("should show loading message while fetching asset data", () => {
    render(<Asset code="BTC" onRemove={fn} />);
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });

  it("should show error message on API error", async () => {
    graphqlServer.use(
      graphql.query<AssetLastPriceQuery>("AssetLastPrice", (_, res, ctx) =>
        res(ctx.errors([{ message: "Sample error" }])),
      ),
    );

    render(<Asset code="INVALID" onRemove={fn} />);
    const errorMessage = await screen.findByText("Failed to load price");
    expect(errorMessage).toBeInTheDocument();
  });
});
