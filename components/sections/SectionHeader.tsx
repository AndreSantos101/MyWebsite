import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  titleId: string;
  intro?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  introClassName?: string;
  withTitleOffset?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  titleId,
  intro,
  className,
  titleClassName,
  introClassName = "max-w-3xl",
  withTitleOffset = true,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-teal-300/80 lg:hidden">
          {eyebrow}
        </p>
      ) : null}

      <h2
        id={titleId}
        className={cn(
          "max-w-4xl text-4xl font-bold tracking-tight text-[#CCFBF1] sm:text-5xl",
          withTitleOffset && "mt-10",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {intro ? (
        <div className={cn("mt-10 border-l border-white/10 pl-5", introClassName)}>
          {intro}
        </div>
      ) : null}
    </div>
  );
}
