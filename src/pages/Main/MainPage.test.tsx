import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { render } from "../../mocks";
import { MainPage } from ".";

describe("MainPage", () => {
  it("should render logo", () => {
    render(<MainPage />);
    const logo = screen.getByRole("img", { name: "Logo" });
    expect(logo).toBeInTheDocument();
  });

  it("should render title and subtitle", () => {
    render(<MainPage />);
    const title = screen.getByRole("heading", {
      name: /now you can track all your cryptos here!/i,
    });
    const subtitle = screen.getByRole("heading", {
      name: /just enter the cryptocurrency code on the form to the right./i,
    });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it("should render add asset form", () => {
    render(<MainPage />);
    const addAssetButton = screen.getByRole("button", { name: /add/i });
    expect(addAssetButton).toBeInTheDocument();
  });

  it("should render terms and conditions", () => {
    render(<MainPage />);
    const terms = screen.getByText(/use of this service is subject to terms and conditions./i);
    expect(terms).toBeInTheDocument();
  });

  it("should render footer", () => {
    render(<MainPage />);
    const footer = screen.getByText(
      /lorem ipsum dolor sit amet, consectetur adipiscing elit. aenean augue odio, accumsan quis viverra vel, bibendum quis elit. in hac habitasse platea dictumst. proin consequat ex ex, sit amet blandit arcu lobortis ut. cras ac leo mi. curabitur finibus in nisl in pharetra. suspendisse vitae hendrerit sapien, eget molestie tortor./i,
    );
    expect(footer).toBeInTheDocument();
  });

  describe("when add asset", () => {
    it("should render asset in the list", async () => {
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
  });

  describe("when remove asset", () => {
    it("should not render asset in the list", async () => {
      render(<MainPage />);

      const assetCodeInput = screen.getByRole("textbox", { name: /cryptocurrency code/i });
      userEvent.type(assetCodeInput, "BTC{enter}");

      const removeButton = await screen.findByRole("button", { name: "×" });
      userEvent.click(removeButton);

      const asset = screen.queryByRole("listitem");
      expect(asset).not.toBeInTheDocument();
    });
  });
});
