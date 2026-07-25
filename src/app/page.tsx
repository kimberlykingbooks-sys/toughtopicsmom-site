import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-brand-light/40 to-white px-4 py-24 text-center sm:px-6">
        <Reveal className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-brand-dark sm:text-5xl">
            Empowered Adults. Protected Kids.
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-700">
            Body safety and sexual abuse prevention are possible when safe
            adults are empowered to reduce risk, implement real
            strategies, and protect the children in their care.
          </p>
          <p className="mt-4 text-gray-600">
            Kimberly King helps parents, caregivers, early childhood
            educators, and program directors move from fear to
            preparedness — building the policies, training, and everyday
            practices that keep kids safer, at home and in the programs
            that serve them.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
            See I Said No! In Action
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
