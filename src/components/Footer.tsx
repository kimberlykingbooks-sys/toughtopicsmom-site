import Link from "next/link";
import { navLinks } from "@/lib/nav-links";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-center text-lg font-semibold italic">
          &ldquo;This is not scare. This is prepare.&rdquo;&reg;
        </p>
        <p className="mt-2 text-center text-sm italic text-white/90">
          &ldquo;An educated, empowered family is an unattractive
          target.&rdquo;&reg;
        </p>

        <nav className="mt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white/90 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-8 text-center text-xs text-white/75">
          &copy; {year} Tough Topics Mom. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
