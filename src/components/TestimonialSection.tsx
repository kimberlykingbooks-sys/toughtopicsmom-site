import { testimonials } from "@/lib/testimonials";

export default function TestimonialSection() {
  if (testimonials.length === 0) {
    return (
      <p className="text-center text-sm text-gray-400">
        Testimonials coming soon.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <blockquote
          key={testimonial.quote}
          className="rounded-lg border border-gray-200 p-6"
        >
          <p className="text-gray-600">&ldquo;{testimonial.quote}&rdquo;</p>
          <footer className="mt-4 text-sm font-semibold text-brand-dark">
            {testimonial.author}
            {testimonial.role && (
              <span className="font-normal text-gray-500">
                {" "}
                — {testimonial.role}
              </span>
            )}
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
