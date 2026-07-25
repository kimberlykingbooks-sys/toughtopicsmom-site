import { navLinks } from "@/lib/nav-links";
import NavLink from "@/components/NavLink";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-brand to-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-center text-lg font-semibold italic">
          Empowered Adults. Protected Kids.
        </p>
        <p className="mt-2 text-center text-sm italic text-white/90">
          &ldquo;An educated, empowered family is an unattractive
          target.&rdquo;&reg;
        </p>

        <nav className="mt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  link={link}
                  className="text-sm font-medium text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks className="mt-8" />

        <p className="mt-8 text-center text-xs text-white/75">
          &copy; {year} Tough Topics Mom. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
