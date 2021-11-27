import * as React from "react";
import { render, screen } from "@testing-library/react";

import { WelcomeMessage } from "./welcome";

it("displays personalized message if the user is logged in", () => {
  render(<WelcomeMessage user={{ name: "Rupert" }} />);

  expect(
    screen.queryByText("Welcome Guest, would you like to login?")
  ).not.toBeInTheDocument();
  expect(
    screen.getByText("Welcome Rupert, good to have you back!")
  ).toBeInTheDocument();
});
