import { cn } from "@/lib/cn";

type TextHighlightsProps = {
  items: string[];
  emphasizedFirst?: boolean;
  className?: string;
};

export default function TextHighlights({
  items,
  emphasizedFirst = false,
  className = "",
}: TextHighlightsProps) {
  return (
    <div className={cn("space-y-5", className)}>
      {items.map((item, index) => (
        <div key={item} className="border-l border-white/10 pl-5">
          <p
            className={cn(
              "leading-8",
              emphasizedFirst && index === 0
                ? "text-[1.05rem] text-slate-200"
                : "text-base text-slate-300",
            )}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
