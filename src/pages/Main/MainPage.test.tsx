import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { render } from "../../mocks";
import { MainPage } from ".";

describe("MainPage", () => {
  it("should render add asset form", () => {
    render(<MainPage />);
    const addAssetButton = screen.getByRole("button", { name: /add/i });
    expect(addAssetButton).toBeInTheDocument();
  });

  it("should render asset in the list on add a new asset", async () => {
    render(<MainPage />);

    const assetCodeInput = screen.getByRole("textbox", { name: /cryptocurrency code/i });

    userEvent.type(assetCodeInput, "BTC{enter}");
    await screen.findByText("BTC");

    userEvent.type(assetCodeInput, "LTC{enter}");
    await screen.findByText("LTC");

    const assets = screen.getAllByRole("listitem");
    expect(assets[0]).toHaveTextContent("LTC");
    expect(assets[1]).toHaveTextContent("BTC");
  });

  it("should not duplicate assets in the list", async () => {
    render(<MainPage />);

    const assetCodeInput = screen.getByRole("textbox", { name: /cryptocurrency code/i });

    userEvent.type(assetCodeInput, "BTC{enter}");
    await screen.findByText("BTC");

    userEvent.type(assetCodeInput, "LTC{enter}");
    await screen.findByText("LTC");

    userEvent.type(assetCodeInput, "BTC{enter}");

    await waitFor(async () => {
      const assets = screen.getAllByRole("listitem");
      expect(assets.length).toBe(2);
    });
  });

  it("should remove asset from the list on remove", async () => {
    render(<MainPage />);

    const assetCodeInput = screen.getByRole("textbox", { name: /cryptocurrency code/i });
    userEvent.type(assetCodeInput, "BTC{enter}");

    const removeButton = await screen.findByRole("button", { name: "×" });
    userEvent.click(removeButton);

    const asset = screen.queryByRole("listitem");
    expect(asset).not.toBeInTheDocument();
  });
});
