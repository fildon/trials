import * as React from "react";
import { getUserDetails } from "./user-api";

interface UserProps {
  userId: string;
}

export function User({ userId }: UserProps): JSX.Element {
  const { name } = getUserDetails(userId);
  return (
    <section>
      <h2>{name}</h2>
    </section>
  );
}
