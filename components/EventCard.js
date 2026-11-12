import Link from "next/link";
import CategoryBadge from "./CategoryBadge";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
});

export function formatEventDate(date) {
  return dateFormatter.format(new Date(`${date}T12:00:00`));
}

export default function EventCard({ event }) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="event-card group overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm"
    >
      <div
        className="event-card-image relative h-52 bg-cover bg-center"
        style={{ backgroundImage: `url("${event.image}")` }}
        role="img"
        aria-label={event.title}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <CategoryBadge category={event.category} />
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <span className="text-indigo-600">{formatEventDate(event.date)}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{event.time}</span>
        </div>
        <h2 className="mb-2 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-700">
          {event.title}
        </h2>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <svg
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <span className="truncate">{event.venue}</span>
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
          <span className="font-semibold text-slate-500">Discover event</span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-50 text-slate-500 transition-all group-hover:translate-x-1 group-hover:bg-indigo-600 group-hover:text-white">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
