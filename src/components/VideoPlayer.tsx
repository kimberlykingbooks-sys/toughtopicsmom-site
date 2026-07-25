export default function VideoPlayer({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-br from-brand via-brand-light to-accent p-[3px] shadow-xl ${className ?? ""}`}
    >
      <div className="overflow-hidden rounded-2xl bg-black">
        <video src={src} controls preload="metadata" className="block w-full" />
      </div>
    </div>
  );
}
