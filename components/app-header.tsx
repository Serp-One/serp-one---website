import { Brand } from "@/components/brand";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";

export function AppHeader() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        {/* <TeamSwitcher /> */}
        {/* <Brand className="mx-4 h-6 w-auto" /> */}
        {/* <span className="mx-4 text-xl font-bold">SERP ONE</span> */}
        <MainNav className="mx-4" />
        <div className="ml-auto mr-4 flex items-center space-x-4">
          {/* <Search /> */}
          <UserNav />
        </div>
      </div>
    </header>
  );
}
