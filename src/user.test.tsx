import * as React from "react";

import { render, screen } from "@testing-library/react";

import { User } from "./user";
import { getUserDetails } from "./user-api";

jest.mock("./user-api");

const mockGetUserDetails = getUserDetails as jest.MockedFunction<
  typeof getUserDetails
>;
mockGetUserDetails.mockReturnValue({ name: "rupert" });

test("User component displays the user's name", () => {
  render(<User userId="1234" />);
  expect(screen.getByText("rupert")).toBeInTheDocument();
});
