import React from "react";
import { ClerkProvider, SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <ClerkProvider>
      <div className="h-screen w-screen flex items-center justify-center">
      <SignIn />
      </div>
    </ClerkProvider>
  );
}
