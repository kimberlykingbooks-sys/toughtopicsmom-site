import BookCard from "@/components/BookCard";
import LogoStrip from "@/components/LogoStrip";
import TestimonialSection from "@/components/TestimonialSection";
import { sitePressMentions } from "@/lib/press";
import Reveal from "@/components/Reveal";
import { getBooks, getTestimonials } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function BooksPage() {
  const [books, testimonials] = await Promise.all([
    getBooks(),
    getTestimonials(),
  ]);
  const [featuredBook, ...otherBooks] = books;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="text-center text-4xl font-bold text-brand-dark sm:text-5xl">
          Books
        </h1>
      </Reveal>

      {featuredBook && (
        <Reveal className="mt-12">
          <BookCard book={featuredBook} />
        </Reveal>
      )}

      <Reveal className="mt-16">
        <TestimonialSection testimonials={testimonials} limit={3} />
      </Reveal>

      <div className="mt-16 flex flex-col gap-8">
        {otherBooks.map((book, index) => (
          <Reveal key={book.slug} delay={index * 0.1}>
            <BookCard book={book} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 border-t border-gray-200 pt-12">
        <LogoStrip heading="As Seen On" mentions={sitePressMentions} />
      </Reveal>
    </div>
  );
}
