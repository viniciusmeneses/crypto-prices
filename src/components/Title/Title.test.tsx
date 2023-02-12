import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { render } from "../../mocks";
import { Title } from ".";

describe("Title", () => {
  it("should render correct text", () => {
    render(<Title>Sample</Title>);
    const title = screen.getByRole("heading", { name: "Sample" });
    expect(title).toBeInTheDocument();
  });

  it("should be colored", () => {
    render(<Title color="brown">Sample</Title>);
    const title = screen.getByRole("heading", { name: "Sample" });
    expect(title).toHaveStyle({ color: "brown" });
  });
});
