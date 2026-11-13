"use client";

import { Fragment, useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

/* Respect the user's "reduce motion" setting everywhere */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

function useInView<T extends Element>(once = true, margin = "0px 0px -10% 0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) setInView(false);
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, margin]);
  return { ref, inView };
}

/* ── Reveal: fades + slides children in when scrolled into view ── */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: ElementType;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms`, "--y": `${y}px` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* ── SplitText: each letter rises in, staggered (words never break apart) ── */
export function SplitText({
  text,
  className = "",
  start = 0,
  suffix,
}: {
  text: string;
  className?: string;
  start?: number;
  suffix?: ReactNode;
}) {
  const words = text.split(" ");
  let n = 0;
  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span aria-hidden="true" className="inline-block whitespace-nowrap">
            {word.split("").map((ch, ci) => (
              <span key={ci} className="split-char" style={{ animationDelay: `${start + n++ * 35}ms` }}>
                {ch}
              </span>
            ))}
            {wi === words.length - 1 && suffix}
          </span>
          {wi < words.length - 1 && " "}
        </Fragment>
      ))}
    </span>
  );
}

/* ── RotatingWords: cycles through phrases with a slide/blur swap ── */
export function RotatingWords({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval, reduced]);

  return (
    <span className="relative inline-grid align-bottom">
      {/* invisible longest word reserves the width so the line doesn't jump */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {words.reduce((a, b) => (b.length > a.length ? b : a))}
      </span>
      {words.map((w, n) => (
        <span
          key={w}
          aria-hidden={n !== i}
          className={`rotating-word col-start-1 row-start-1 text-accent ${
            n === i ? "is-active" : n === (i - 1 + words.length) % words.length ? "is-leaving" : ""
          }`}
        >
          {w}
        </span>
      ))}
    </span>
  );
}

/* ── Counter: counts up from 0 when visible ── */
export function Counter({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduced) return setN(target);
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, reduced]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

/* ── Magnetic: element leans toward the cursor ── */
export function Magnetic({ children, strength = 0.25 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();
  return (
    <span
      ref={ref}
      className="inline-block transition-transform duration-300 ease-out will-change-transform"
      onPointerMove={(e) => {
        if (reduced || e.pointerType !== "mouse") return;
        const r = ref.current!.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        ref.current!.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onPointerLeave={() => (ref.current!.style.transform = "")}
    >
      {children}
    </span>
  );
}

/* ── Scroll progress bar at the very top ── */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-accent"
    />
  );
}

/* ── Hook for the nav: which section is on screen ── */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}
