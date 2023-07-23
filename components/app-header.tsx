import { Brand, Logo } from "@/components/brand";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { UserButton } from "@clerk/nextjs";
import { PageContaier, TextGradient } from "./misc";
import Link from "next/link";

export function AppHeader() {
  return (
    <header className="border-b">
      <PageContaier>
        <div className="flex h-16 items-center">
          {/* <TeamSwitcher /> */}
          {/* <Brand className="mx-4 h-6 w-auto" /> */}
          <Link
            href="/"
            className="flex flex-row text-2xl font-black drop-shadow-md"
          >
            <Logo className="h-8 w-8 mr-4 fill-black" />
            <TextGradient>SERP</TextGradient>&nbsp;ONE
          </Link>
          {/* <span className="mx-4 text-xl font-bold">SERP ONE</span> */}
          <MainNav className="mx-8" />
          <div className="ml-auto mr-4 flex items-center space-x-4">
            {/* <Search /> */}
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </PageContaier>
    </header>
  );
}
