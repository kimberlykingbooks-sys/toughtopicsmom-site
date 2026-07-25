export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Speaking", href: "/speaking" },
  { label: "Books", href: "/books" },
  { label: "Online Classes", href: "/online-classes" },
  // TODO: replace with Kimberly's real Substack URL
  { label: "Substack", href: "https://substack.com", external: true },
  { label: "Contact", href: "/contact" },
];
