const categoryStyles = {
  Tech: "bg-sky-50 text-sky-700 ring-sky-600/10",
  Sports: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
  Faith: "bg-violet-50 text-violet-700 ring-violet-600/10",
  Social: "bg-amber-50 text-amber-700 ring-amber-600/10",
};

export default function CategoryBadge({ category }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ring-1 ring-inset ${
        categoryStyles[category] || "bg-slate-100 text-slate-700 ring-slate-600/10"
      }`}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
      {category}
    </span>
  );
}
