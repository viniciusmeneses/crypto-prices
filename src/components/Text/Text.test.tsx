import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { render } from "../../mocks";
import { Text } from ".";

describe("Text", () => {
  it("should render text", () => {
    render(<Text>Sample</Text>);
    const text = screen.getByText("Sample");
    expect(text).toBeInTheDocument();
  });

  it("should be colored", () => {
    render(<Text color="brown">Sample</Text>);
    const text = screen.getByText("Sample");
    expect(text).toHaveStyle({ color: "brown" });
  });
});
