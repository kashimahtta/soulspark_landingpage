import { useEffect, useState } from "react";
import {
  ExternalLink,
  Instagram,
  Mail,
  MessageCircle,
  PenLine,
  Sparkles,
  X,
} from "lucide-react";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  emailLink,
  instagramLink,
  services,
  whatsappLink,
  whySoulSpark,
} from "@/data/site";

const COUNTDOWN_SECONDS = 15 * 60;

function useCountdown(active: boolean) {
  const [left, setLeft] = useState(COUNTDOWN_SECONDS);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [active]);
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return { text: `${mm}:${ss}`, expired: left === 0 };
}

export function OneScreen() {
  const [open, setOpen] = useState(true);
  const { text, expired } = useCountdown(true);

  return (
    <div
      className="relative flex h-[100dvh] flex-col overflow-hidden bg-gradient-to-b from-lavender to-cream px-4 py-4 text-plum sm:px-8"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(154,107,22,0.18) 1.2px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 text-gold/25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M10 120c30-80 70 40 100-20s50-50 80-10" />
        <path d="M0 150c40-60 80 30 120-10s50-40 80-5" />
        <path d="M20 180c30-40 70 20 100-5s40-30 70-5" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -bottom-12 -right-10 h-64 w-64 rotate-180 text-gold/25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M10 120c30-80 70 40 100-20s50-50 80-10" />
        <path d="M0 150c40-60 80 30 120-10s50-40 80-5" />
        <path d="M20 180c30-40 70 20 100-5s40-30 70-5" />
      </svg>
      <PenLine
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-24 hidden h-24 w-24 rotate-12 text-gold/20 md:block"
      />
      <header className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/soulspark%20logo.jpeg"
            alt="Soul Spark"
            className="h-[60px] rounded bg-cream p-0.5"
          />
          <div className="leading-tight">
            <p className="font-display text-xl">Soul Spark</p>
            <p className="text-xs text-plum/70">
              Ridhi Mahtta · Handwriting Improvement Coach
            </p>
          </div>
        </div>
        <a
          href="https://soul-spark-react.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-plum"
        >
          Open Website
        </a>
      </header>

      <main className="relative mx-auto grid min-h-0 w-full max-w-5xl flex-1 content-center gap-4 py-3 md:grid-cols-2 md:gap-8">
        <section>
          <h2 className="font-display text-2xl sm:text-3xl">Why Soul Spark?</h2>
          <ul className="mt-3 grid gap-2">
            {whySoulSpark.map((r) => (
              <li
                key={r}
                className="flex items-center gap-2 rounded-lg border border-gold/25 bg-cream/70 px-3 py-1.5 text-sm"
              >
                <Sparkles className="shrink-0 text-gold" size={16} />
                {r}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl sm:text-3xl">What we offer?</h2>
          <p className="mt-1 text-sm font-semibold text-gold">
            15-Day Handwriting Improvement Program ·{" "}
            {expired ? (
              "₹6000"
            ) : (
              <>
                <span className="font-normal text-plum/50 line-through">
                  ₹6000
                </span>{" "}
                ₹1999 only
              </>
            )}
          </p>
          <ul className="mt-3 grid gap-2">
            {services.map((s) => (
              <li
                key={s.title}
                className="rounded-lg border border-gold/25 bg-cream/70 px-3 py-1.5 text-sm"
              >
                <span className="font-semibold">{s.title}</span>
                <span className="hidden text-plum/70 lg:inline">
                  {" "}
                  – {s.description}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <div className="relative mx-auto mb-3 hidden w-full max-w-5xl grid-cols-2 gap-4 md:grid [@media(max-height:700px)]:hidden">
        {[
          { label: "Before", text: "mi hanwritng is mesy", cls: "-rotate-1 text-plum/60 tracking-tighter" },
          { label: "After", text: "My handwriting is neat", cls: "rotate-0 text-plum" },
        ].map((s) => (
          <div
            key={s.label}
            className="relative overflow-hidden rounded-lg border border-gold/30 bg-white/80 px-4 py-2 shadow-sm"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 31px, rgba(122,162,214,0.45) 32px)",
            }}
          >
            <span className="absolute left-0 top-0 h-full w-6 border-r border-rose-300/60" />
            <p className="pl-5 text-xs font-semibold uppercase tracking-wide text-gold">
              {s.label}
            </p>
            <p className={`pl-5 font-accent text-3xl leading-[32px] ${s.cls}`}>
              {s.text}
            </p>
          </div>
        ))}
      </div>

      <footer className="relative flex flex-wrap items-center justify-center gap-2 text-sm sm:gap-4">
        <a
          href={whatsappLink("Hi Ridhi, I'd like to connect with Soul Spark.")}
          className="flex items-center gap-2 rounded-full border border-gold px-4 py-2"
        >
          <MessageCircle size={16} /> +91 92050 70058
        </a>
        <a
          href={emailLink}
          className="flex items-center gap-2 rounded-full border border-gold px-4 py-2"
        >
          <Mail size={16} /> {EMAIL}
        </a>
        <a
          href={instagramLink}
          className="flex items-center gap-2 rounded-full border border-gold px-4 py-2"
        >
          <Instagram size={16} /> @{INSTAGRAM_HANDLE}
        </a>
      </footer>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 p-4"
        >
          <div className="relative w-full max-w-sm rounded-2xl bg-cream p-6 text-center shadow-xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3"
            >
              <X size={20} />
            </button>
            <p className="font-accent text-2xl text-gold">Limited seats left!</p>
            <h3 className="mt-1 font-display text-2xl">
              15-Day Handwriting Improvement Program
            </h3>
            <p className="mt-3 flex items-baseline justify-center gap-3">
              {expired ? (
                <span className="font-display text-4xl text-gold">₹6000</span>
              ) : (
                <>
                  <span className="text-lg text-plum/50 line-through">₹6000</span>
                  <span className="font-display text-4xl text-gold">₹1999</span>
                  <span className="text-sm font-semibold">only</span>
                </>
              )}
            </p>
            <p className="mt-3 text-xs uppercase tracking-wide text-plum/60">
              {expired ? "Offer window ended" : "Reserve your seat in"}
            </p>
            <p className="font-display text-5xl tabular-nums">{text}</p>
            <a
              href="https://soul-spark-react.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold"
            >
              <ExternalLink size={18} /> Open Website
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
