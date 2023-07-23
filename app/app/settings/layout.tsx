import { Metadata } from "next";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/sidebar-nav";
import { PageContaier } from "@/components/misc";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/app/settings",
  },
  {
    title: "Account",
    href: "/app/settings/account",
  },
  {
    title: "Appearance",
    href: "/app/settings/appearance",
  },
  {
    title: "Notifications",
    href: "/app/settings/notifications",
  },
  {
    title: "Display",
    href: "/app/settings/display",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="hidden flex flex-col md:flex bg-slate-50">
      <PageContaier>
        <div className="flex-1 space-y-4 py-8 pt-6">
          <div className="space-y-0.5">
            <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Manage your account settings and set e-mail preferences.
            </p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              {/* <SidebarNav items={sidebarNavItems} /> */}
            </aside>
            {/* <div className="flex-1 lg:max-w-2xl">{children}</div> */}
          </div>
        </div>
      </PageContaier>
    </div>
  );
}
