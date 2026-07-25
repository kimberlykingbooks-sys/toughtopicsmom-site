export default function ChecklistCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-bold text-brand-dark">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-gray-600">
            <span className="mt-0.5 text-accent">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
