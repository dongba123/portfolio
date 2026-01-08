"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";

interface NavLinkCompatProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    { className, activeClassName, pendingClassName, href, ...props },
    ref
  ) => {
    const pathname = usePathname();

    // Determine if the link is active (exact match by default)
    const isActive = pathname === href;

    // Next.js Link does not have built-in pending state like react-router
    // If you need pending feedback, you could integrate with useRouter or a custom solution
    const isPending = false; // Placeholder – no direct equivalent in Next.js Link

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          className,
          isActive && activeClassName,
          isPending && pendingClassName
        )}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };