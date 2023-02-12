import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { render } from "../../mocks";
import { Button } from ".";

const mockProps = { onClick: jest.fn() };

describe("Button", () => {
  it("should render correct text", () => {
    render(<Button>Sample text</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Sample text");
  });

  describe("when loading", () => {
    it("should disable and render a spinner", () => {
      render(<Button loading>Sample text</Button>);
      const button = screen.getByRole("button");
      const spinner = screen.getByRole("img");

      expect(button).toBeDisabled();
      expect(button).not.toHaveTextContent("Sample text");
      expect(spinner).toBeInTheDocument();
    });
  });

  describe("when click", () => {
    it("should trigger onClick", () => {
      render(<Button {...mockProps}>Sample text</Button>);

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(mockProps.onClick).toHaveBeenCalled();
    });
  });
});
