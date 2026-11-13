"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { useActiveSection, ScrollProgress } from "./motion";

const ids = ["work", "experience", "stack", "contact"];

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  return (
    <>
    <ScrollProgress />
    <header className="rise fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-line bg-card pr-2 pl-5"
      >
        <a href="#top" className="font-mono text-sm tracking-tight">
          {profile.firstName.toLowerCase()}
          <span className="blink text-accent">_</span>
        </a>

        <ul className="hidden items-center gap-1 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href.slice(1) ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 transition-colors hover:text-fg ${
                  active === l.href.slice(1) ? "bg-sand text-fg" : "hover:bg-sand"
                }`}
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-opacity ${
                    active === l.href.slice(1) ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-10 items-center rounded-full bg-brown px-4 text-sm font-medium text-card transition-colors hover:bg-accent md:inline-flex"
        >
          Résumé
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 9h16M4 15h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="mx-auto mt-2 max-w-5xl rounded-3xl border border-line bg-card p-3 md:hidden">
          {[...links, { href: profile.cvUrl, label: "Résumé" }].map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-base hover:bg-sand">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
    </>
  );
}
