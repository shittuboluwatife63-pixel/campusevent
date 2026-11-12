"use client";

import { useEvents } from "../context/EventsContext";

export default function SaveEventButton({ eventId }) {
  const { savedIds, toggleSaved, isHydrated } = useEvents();
  const isSaved = savedIds.includes(eventId);

  return (
    <button
      type="button"
      onClick={() => toggleSaved(eventId)}
      disabled={!isHydrated}
      aria-pressed={isSaved}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold transition-all disabled:cursor-wait disabled:opacity-70 sm:w-auto ${
        isSaved
          ? "border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
          : "bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:-translate-y-0.5 hover:bg-indigo-700"
      }`}
    >
      {isSaved ? "✓ Saved to My Events" : "＋ Save event"}
    </button>
  );
}
