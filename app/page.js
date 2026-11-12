import EventBrowser from "../components/EventBrowser";

export default function HomePage() {
  return (
    <div className="page-shell py-10 sm:py-14">
      <section className="relative mb-12 overflow-hidden rounded-[32px] bg-slate-950 px-7 py-10 sm:px-12 sm:py-14">
        <div className="absolute -right-10 -top-32 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-indigo-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            YOUR CAMPUS, YOUR COMMUNITY
          </span>
          <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl">
            Find your next <span className="text-indigo-300">campus moment.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
            From big ideas to friendly rivalries, discover what&apos;s happening
            around you and make this semester count.
          </p>
          <a
            href="#events"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-indigo-50"
          >
            Explore events <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -right-4 hidden select-none text-[230px] font-black leading-none text-white/[0.04] lg:block"
        >
          ✦
        </div>
      </section>

      <section id="events" className="scroll-mt-24">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              Make it a moment
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              What&apos;s happening
            </h2>
          </div>
          <p className="text-sm text-slate-500">Find something worth showing up for.</p>
        </div>
        <EventBrowser />
      </section>
    </div>
  );
}
