import { NAV_LINKS } from "@/constants/app.constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-8 max-md:hidden">
      {NAV_LINKS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "font-medium uppercase opacity-70 hover:opacity-100 hover:underline",
            pathname === item.href && "opacity-100 underline"
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
