import Link from "next/link";

export default function CtaBand({
  heading,
  buttonLabel,
  href,
}: {
  heading: string;
  buttonLabel: string;
  href: string;
}) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-dark px-6 py-12 text-center text-white shadow-lg">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <Link
        href={href}
        className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
