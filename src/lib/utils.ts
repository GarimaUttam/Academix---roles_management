import { auth } from "@clerk/nextjs/server";

export const getUserRole = async (): Promise<string> => {
  const { sessionClaims } = await auth();
  return (sessionClaims?.metadata as { role?: string })?.role || "user";
};

export const getUserId = async (): Promise<string | null> => {
  const { userId } = await auth();
  return userId; // userId is already a string | null, no need for extra type assertions
};
