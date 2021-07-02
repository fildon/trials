interface UserDetails {
  name: string;
}

export function getUserDetails(userId: string): UserDetails {
  // lengthy or complex async process to fetch user information
  return { name: userId };
}
