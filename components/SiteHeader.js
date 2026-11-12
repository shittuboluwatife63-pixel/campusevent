"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEvents } from "../context/EventsContext";

export default function SiteHeader() {
  const pathname = usePathname();
  const { savedIds } = useEvents();

  const links = [
    { href: "/", label: "Discover" },
    { href: "/my-events", label: "My Events" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="page-shell flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Campusly home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-lg font-black text-white shadow-lg shadow-indigo-200">
            c
          </span>
          <span className="text-[19px] font-extrabold tracking-tight text-slate-950">
            campusly<span className="text-indigo-600">.</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1" aria-label="Main navigation">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {link.label}
                {link.href === "/my-events" && savedIds.length > 0 && (
                  <span className="ml-2 rounded-full bg-indigo-600 px-2 py-0.5 text-[11px] font-bold text-white">
                    {savedIds.length}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
