import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders button not clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const notChangeElement = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(notChangeElement).toBeInTheDocument();
  });

  test("renders button clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const changeElement = screen.getByText("Changed!", { exact: false });
    expect(changeElement).toBeInTheDocument();
  });

  test("good to see you! remove from dom", () => {
    render(<Greeting />);

    //Act
    const buttonP = screen.getByRole("button");
    userEvent.click(buttonP);

    //Assert
    const removeToDOM = screen.queryByText("It's good to see you!", {exact: false});
    expect(removeToDOM).toBeNull();
  });
});
