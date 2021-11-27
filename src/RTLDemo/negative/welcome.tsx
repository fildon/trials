import * as React from "react";

interface User {
  name: string;
}

export const WelcomeMessage = ({ user }: { user: User | null }) => {
  const message =
    user === null
      ? "Welcome Guest, would you like to login?"
      : `Welcome ${user.name}, good to have you back!`;

  return <span>{message}</span>;
};
