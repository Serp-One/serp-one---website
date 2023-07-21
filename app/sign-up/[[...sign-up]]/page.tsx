import { ClerkProvider, SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <ClerkProvider>
      <div className="h-screen w-screen flex items-center justify-center">

      <SignUp />
      </div>
    </ClerkProvider>
  );
}
