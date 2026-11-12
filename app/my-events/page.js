"use client";

import Link from "next/link";
import { events } from "../../data";
import EventGrid from "../../components/EventGrid";
import { useEvents } from "../../context/EventsContext";

export default function MyEventsPage() {
  const { savedIds, isHydrated } = useEvents();
  const savedEvents = events.filter((event) => savedIds.includes(event.id));

  return (
    <div className="page-shell py-12 sm:py-16">
      <div className="mb-9">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
          Your personal lineup
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
          My Events
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
          Keep the campus moments you&apos;re looking forward to all in one
          place.
        </p>
      </div>

      {isHydrated ? (
        <EventGrid
          events={savedEvents}
          emptyTitle="Your lineup is ready when you are"
          emptyMessage="You haven’t saved any events yet. Explore what’s happening and save the ones you don’t want to miss."
        />
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center text-sm text-slate-500">
          Loading your saved events...
        </div>
      )}

      {isHydrated && savedEvents.length === 0 && (
        <Link
          href="/"
          className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
        >
          Browse events <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
