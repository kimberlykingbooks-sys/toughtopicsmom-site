import Image from "next/image";
import type { PressMention } from "@/lib/press";

function LogoChip({ mention }: { mention: PressMention }) {
  return mention.logoSrc ? (
    <Image
      src={mention.logoSrc}
      alt={mention.name}
      width={120}
      height={40}
      className="h-8 w-auto shrink-0 object-contain grayscale"
    />
  ) : (
    <span className="shrink-0 rounded-full bg-gray-100 px-5 py-2 text-sm font-semibold text-gray-500">
      {mention.name}
    </span>
  );
}

export default function LogoStrip({
  heading,
  mentions,
  note,
}: {
  heading: string;
  mentions: PressMention[];
  note?: string;
}) {
  return (
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        {heading}
      </p>
      <div className="group mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
          {[...mentions, ...mentions].map((mention, index) => (
            <LogoChip key={`${mention.name}-${index}`} mention={mention} />
          ))}
        </div>
      </div>
      {note && <p className="mt-3 text-xs text-gray-400">{note}</p>}
    </div>
  );
}
