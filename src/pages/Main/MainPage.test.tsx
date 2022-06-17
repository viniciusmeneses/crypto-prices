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
});
