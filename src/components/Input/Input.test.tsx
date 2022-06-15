import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from ".";

describe("Input", () => {
  it("should have correct label", () => {
    render(<Input name="input" label="Sample label" />);
    const input = screen.getByRole("textbox", { name: "Sample label" });
    expect(input).toBeInTheDocument();
  });

  it("should trigger onFocus event", () => {
    const onFocus = jest.fn();

    render(<Input name="input" onFocus={onFocus} />);
    const input = screen.getByRole("textbox");
    userEvent.click(input);

    expect(onFocus).toBeCalled();
  });

  it("should be typeable", () => {
    render(<Input name="input" />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Sample text");

    const typedInput = screen.getByDisplayValue("Sample text");
    expect(typedInput).toBeInTheDocument();
  });
});
