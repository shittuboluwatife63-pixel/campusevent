import EventCard from "./EventCard";

export default function EventGrid({ events, emptyTitle, emptyMessage }) {
  if (events.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 px-6 py-16 text-center">
        <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-indigo-50 text-2xl">
          ✦
        </span>
        <h2 className="text-lg font-bold text-slate-900">{emptyTitle}</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
