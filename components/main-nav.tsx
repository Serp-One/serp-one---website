"use client";
import Link from "next/link"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/app/dashboard"
        className={cn("text-sm font-medium text-muted-foreground transition-colors hover:text-primary", { "text-black": pathname === "/app/dashboard" })}
      >
        Dashboard
      </Link>
      <Link
        href="/app/settings"
        className={cn("text-sm font-medium text-muted-foreground transition-colors hover:text-primary", { "text-black": pathname === "/app/settings" })}
      >
        Settings
      </Link>
    </nav>
  )
}