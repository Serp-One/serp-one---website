import { Brand } from "@/components/brand";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "@/components/site-nav";
import { PageContaier, TextGradient } from "@/components/misc";

export function SiteHeader() {
  return (
    <header className="sticky z-50 top-0 left-0 border-b backdrop-blur-sm bg-white/30">
      <PageContaier className="flex h-16 items-center">
        {/* <TeamSwitcher /> */}
        {/* <Brand className="mx-4 h-6 w-auto" /> */}
        <TextGradient className="text-3xl font-bold drop-shadow-md">SERP ONE</TextGradient>
        {/* <MainNav className="mx-4" /> */}
        <div className="ml-auto items-center space-x-4 hidden md:flex">
          {/* <Search /> */}
          {/* <UserNav /> */}
        <NavigationMenuDemo />
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </PageContaier>
    </header>
  );
}
