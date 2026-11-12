import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-3xl bg-indigo-50 text-3xl text-indigo-600">
        ?
      </span>
      <h1 className="mt-6 text-2xl font-extrabold text-slate-950">
        Event not found
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        This event may have moved or no longer be available.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
      >
        Browse events
      </Link>
    </div>
  );
}
