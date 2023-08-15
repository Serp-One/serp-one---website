import { ClerkProvider, SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <ClerkProvider>
      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-l from-[#ad5389] to-[#3c1053]">

      <SignUp afterSignUpUrl="/app/dashboard" signInUrl="/sign-in" />
      </div>
    </ClerkProvider>
  );
}
