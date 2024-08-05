"use server";

import { auth } from "@/lib/auth/auth";
import { ButtonShiny } from "./ButtonShiny";
import { LoginButton } from "../features/LogInButton";

export default async function LogHome() {
  const session = await auth();
  // console.log(session?.user?.id);
  if (!session?.user) {
    return (
      <div>
        <LoginButton />
      </div>
    );
  }
  return (
    <div>
      <ButtonShiny />
    </div>
  );
}
