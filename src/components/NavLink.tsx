import Link from "next/link";
import type { ReactNode } from "react";
import type { NavLink as NavLinkType } from "@/lib/nav-links";

export default function NavLink({
  link,
  className,
  onClick,
  children,
}: {
  link: NavLinkType;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
