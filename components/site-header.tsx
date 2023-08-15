import { Brand, Logo } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { PageContaier, TextGradient } from "@/components/misc";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky z-50 top-0 left-0 border-b backdrop-blur-sm bg-white/30">
      <PageContaier className="flex h-16 items-center">
        {/* <TeamSwitcher /> */}
        {/* <Brand className="mx-4 h-6 w-auto" /> */}
        <Link href="/" className="flex flex-row text-2xl font-black drop-shadow-md">
          <Logo className="h-8 w-8 mr-4 fill-black" /><TextGradient>SERP</TextGradient>&nbsp;ONE
        </Link>
        {/* <MainNav className="mx-4" /> */}
        <div className="ml-auto items-center space-x-8 hidden md:flex">
          {/* <Search /> */}
          {/* <UserNav /> */}
          <Link href="/blog" className="text-gray-500 hover:text-black text-sm font-medium">
            Blog
          </Link>
          <Link href="/#pricing" className="text-gray-500 hover:text-black text-sm font-medium">
            Pricing
          </Link>
          <Link href="/sign-in" className="text-gray-500 hover:text-black text-sm font-medium">
            Login
          </Link>
          <Link href="/sign-up">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </PageContaier>
    </header>
  );
}
