import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryBadge from "../../../components/CategoryBadge";
import Countdown from "../../../components/Countdown";
import SaveEventButton from "../../../components/SaveEventButton";
import { formatEventDate } from "../../../components/EventCard";
import { events } from "../../../data";

export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

export default async function EventDetailsPage({ params }) {
  const { id } = await params;
  const event = events.find((item) => item.id === id);

  if (!event) notFound();

  return (
    <div className="page-shell py-8 sm:py-12">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-indigo-700"
      >
        <span aria-hidden="true">←</span> All events
      </Link>

      <article className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-sm">
        <div
          className="relative min-h-[260px] bg-cover bg-center sm:min-h-[400px]"
          style={{ backgroundImage: `url("${event.image}")` }}
          role="img"
          aria-label={event.title}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <CategoryBadge category={event.category} />
            <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
              {event.title}
            </h1>
          </div>
        </div>

        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_320px]">
          <div>
            <Countdown date={event.date} time={event.time} />
            <h2 className="mt-8 text-lg font-bold text-slate-900">
              About this event
            </h2>
            <p className="mt-3 text-base leading-8 text-slate-600">
              {event.description}
            </p>
          </div>
          <aside className="h-fit rounded-3xl bg-slate-50 p-6">
            <h2 className="mb-5 text-base font-bold text-slate-900">
              Event details
            </h2>
            <dl className="space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Date
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-800">
                  {formatEventDate(event.date)},{" "}
                  {new Date(`${event.date}T12:00:00`).getFullYear()}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Time
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-800">
                  {event.time}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Venue
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-6 text-slate-800">
                  {event.venue}
                </dd>
              </div>
            </dl>
            <div className="mt-7">
              <SaveEventButton eventId={event.id} />
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
