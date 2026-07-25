import Reveal from "@/components/Reveal";

export default function PagePlaceholder({ title }: { title: string }) {
  return (
    <Reveal className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="text-4xl font-bold text-brand-dark sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-gray-600">Content for this page is coming soon.</p>
    </Reveal>
  );
}
