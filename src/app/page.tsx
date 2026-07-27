import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import { getHomePage } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function HomePage() {
  const content = await getHomePage();

  return (
    <div>
      <section className="bg-gradient-to-b from-brand-light/40 to-white px-4 py-24 text-center sm:px-6">
        <Reveal className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-brand-dark sm:text-5xl">
            {content?.heroHeadline}
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-700">
            {content?.heroSubhead}
          </p>
          <p className="mt-4 text-gray-600">{content?.heroBody}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
            {content?.videoSectionHeading}
          </h2>
          <VideoPlayer
            src="/videos/i-said-no-trailer.mp4"
            poster="/videos/i-said-no-trailer-poster.jpg"
            className="mt-8"
          />
        </Reveal>
      </section>
    </div>
  );
}
