import Image from "next/image";
import type { Book } from "@/lib/books";

export default function BookCard({ book }: { book: Book }) {
  const primaryLink = book.buyLinks.find((link) => link.primary) ?? book.buyLinks[0];
  const secondaryLinks = book.buyLinks.filter((link) => link !== primaryLink);

  return (
    <article
      className={`flex flex-col gap-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:flex-row ${
        book.featured ? "sm:p-10" : ""
      }`}
    >
      <div className="relative mx-auto shrink-0 sm:mx-0">
        {/* TODO: real cover image from Kimberly */}
        <div
          className={`flex items-center justify-center rounded-lg bg-brand-light/40 text-sm text-brand-dark ${
            book.featured ? "h-72 w-52" : "h-56 w-40"
          }`}
        >
          {book.coverImage ? (
            <Image
              src={book.coverImage}
              alt={book.title}
              width={208}
              height={288}
              className="h-full w-full rounded object-cover"
            />
          ) : (
            "Cover coming soon"
          )}
        </div>
        {book.badge && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow">
            {book.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <h2
          className={`font-bold text-brand-dark ${
            book.featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {book.title}
        </h2>
        <p className="mt-3 flex-1 text-gray-600">{book.description}</p>

        {book.bulkOrderNote && (
          <p className="mt-3 text-sm text-gray-500">{book.bulkOrderNote}</p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {primaryLink && (
            <a
              href={primaryLink.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
            >
              {primaryLink.label}
            </a>
          )}
          {secondaryLinks.map((link) => (
            <a
              key={link.label}
              href={link.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-dark underline hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
