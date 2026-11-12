"use client";

import { useMemo, useState } from "react";
import { events } from "../data";
import EventGrid from "./EventGrid";

const categories = ["All", "Tech", "Sports", "Faith", "Social"];

export default function EventBrowser() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return events
      .filter((event) => category === "All" || event.category === category)
      .filter((event) => event.title.toLowerCase().includes(normalizedQuery))
      .sort((a, b) => {
        const dateComparison =
          new Date(`${a.date}T${a.time}`).getTime() -
          new Date(`${b.date}T${b.time}`).getTime();
        return dateComparison;
      });
  }, [category, query]);

  return (
    <>
      <div className="mb-9 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                category === item
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="relative block w-full sm:max-w-sm">
          <span className="sr-only">Search events by title</span>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search events..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          />
        </label>
      </div>
      <EventGrid
        events={filteredEvents}
        emptyTitle="No events found"
        emptyMessage="Try another search or choose a different category to find your next campus moment."
      />
    </>
  );
}
