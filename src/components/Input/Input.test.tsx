import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { render } from "../../mocks";
import { Input } from ".";

const mockProps = {
  name: "input",
  label: "Label",
  onFocus: jest.fn(),
  onBlur: jest.fn(),
};

describe("Input", () => {
  it("should render correct label", () => {
    render(<Input {...mockProps} />);
    const input = screen.getByRole("textbox", { name: "Label" });
    expect(input).toBeInTheDocument();
  });

  it("should be typeable", () => {
    render(<Input {...mockProps} />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Sample text");

    const typedInput = screen.getByDisplayValue("Sample text");
    expect(typedInput).toBeInTheDocument();
  });

  describe("when is focused", () => {
    it("should trigger onFocus", () => {
      render(<Input {...mockProps} />);
      const input = screen.getByRole("textbox");
      userEvent.click(input);

      expect(mockProps.onFocus).toBeCalled();
    });
  });

  describe("when lose focus", () => {
    it("should trigger onBlur", () => {
      render(<Input {...mockProps} />);
      const input = screen.getByRole("textbox");

      userEvent.click(input);
      userEvent.click(document.body);

      expect(mockProps.onBlur).toBeCalled();
    });
  });

  describe("with error", () => {
    it("should render error message", () => {
      render(<Input {...mockProps} error="Error" />);
      const error = screen.getByText("Error");
      expect(error).toBeInTheDocument();
    });
  });
});
