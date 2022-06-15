import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from ".";

describe("Button", () => {
  it("should have correct text", () => {
    render(<Button>Sample text</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Sample text");
  });

  it("should show spinner and disable button on loading", () => {
    render(<Button loading>Sample text</Button>);
    const button = screen.getByRole("button");
    const spinner = screen.getByRole("img");

    expect(button).toBeDisabled();
    expect(button).not.toHaveTextContent("Sample text");
    expect(spinner).toBeInTheDocument();
  });

  it("should trigger onClick event", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Sample text</Button>);

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
