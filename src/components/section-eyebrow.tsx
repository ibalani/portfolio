export function SectionEyebrow({
  period,
  title,
}: {
  period: string;
  title: string;
}) {
  return (
    <h2 className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
      <span className="font-semibold text-orange-600 dark:text-orange-500">
        {period}
      </span>{" "}
      · {title}
    </h2>
  );
}
