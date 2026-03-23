import { cn } from "@/lib/cn";

type FeatureGridProps = {
  items: string[];
  className?: string;
};

export default function FeatureGrid({
  items,
  className = "",
}: FeatureGridProps) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-2xl border border-white/10 bg-slate-900/35 px-4 py-4 text-sm leading-7 text-slate-300 backdrop-blur-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
