import {
  profile,
  stats,
  skills,
  projects,
  experience,
  education,
  extra,
  
  type Project,
} from "@/data/portfolio";
import { Section, Button, Tag, ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from "./ui";
import { Reveal, SplitText, RotatingWords, Counter, Magnetic } from "./motion";

const roleWords = ["reliable APIs", "data systems", "web platforms", "real-time dashboards"];

/* Solid colour themes the cards rotate through */
const tones = [
  { bg: "bg-accent", text: "text-card", sub: "text-card/80" },
  { bg: "bg-brown", text: "text-card", sub: "text-card/75" },
  { bg: "bg-sand", text: "text-fg", sub: "text-muted" },
];

/* ───────── Hero (bento grid of cards) ───────── */
export function Hero() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-5 pt-28 pb-8 md:px-8 md:pt-32">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Intro card */}
        <div className="card rise flex flex-col justify-between p-8 md:col-span-2 md:p-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
            {profile.available && (
              <span className="inline-flex items-center gap-2 rounded-full bg-sand px-3 py-1.5 text-fg">
                <span className="pulse-ring h-2 w-2 rounded-full bg-accent" />
                Available for work
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <PinIcon /> {profile.location}
            </span>
          </div>

          <div className="mt-12 md:mt-20">
            <h1 className="text-5xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-6xl md:text-7xl">
              <SplitText
                text={profile.name.split(" ").slice(0, 2).join(" ")}
                start={150}
                suffix={<span className="split-char text-accent" style={{ animationDelay: "650ms" }}>.</span>}
              />
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-snug text-muted md:text-2xl">
              <span className="font-medium text-fg">{profile.role}</span> building{" "}
              <span className="block font-medium sm:inline">
                <RotatingWords words={roleWords} />
              </span>
              <br className="hidden sm:block" /> that hold up in production.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button href="#work" variant="accent">
                View work <ArrowIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href="#contact" variant="ghost">
                Get in touch
              </Button>
            </Magnetic>
            <div className="flex items-center gap-1">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-sand hover:text-fg">
                <GitHubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-sand hover:text-fg">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Photo card */}
        <div className="rise relative min-h-[320px] overflow-hidden rounded-3xl bg-brown" style={{ animationDelay: "120ms" }}>
          {profile.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profile.photo} alt={profile.name} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 text-card">
              <span className="text-8xl font-semibold tracking-tighter">{initials}</span>
              <span className="font-mono text-xs text-card/70">add /public/me.jpg</span>
            </div>
          )}
          {/* spinning badge */}
          <div className="absolute right-4 bottom-4 flex h-24 w-24 items-center justify-center rounded-full bg-accent text-card">
            <svg aria-hidden="true" viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full">
              <defs>
                <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text fontSize="10.5" fill="currentColor" fontFamily="var(--font-mono)" letterSpacing="2">
                <textPath href="#circle">SOFTWARE ENGINEER • KIGALI •</textPath>
              </text>
            </svg>
            <ArrowIcon className="h-5 w-5 rotate-90" />
          </div>
        </div>

        {/* Stat cards */}
        {stats.map((s, i) => {
          const t = tones[i % tones.length];
          return (
            <div
              key={s.label}
              className={`rise lift rounded-3xl p-8 ${t.bg} ${t.text}`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <p className="text-5xl font-semibold tracking-tight md:text-6xl">
                <Counter value={s.value} />
              </p>
              <p className={`mt-2 text-sm ${t.sub}`}>{s.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ───────── About ───────── */
export function About() {
  return (
    <Section id="about" label="About" title="A little about me">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Reveal className="card p-8 md:col-span-2 md:p-10">
          <p className="text-xl leading-relaxed text-muted md:text-2xl md:leading-relaxed">
            {profile.bio.split(". ").map((sentence, i, arr) => (
              <span key={i} className={i === 0 ? "text-fg" : ""}>
                {sentence}
                {i < arr.length - 1 ? ". " : ""}
              </span>
            ))}
          </p>
        </Reveal>
        <Reveal delay={100} className="flex flex-col justify-between gap-8 rounded-3xl bg-sand p-8">
          <p className="font-mono text-xs tracking-widest text-accent-dark uppercase">Currently</p>
          <div>
            <p className="text-2xl font-semibold tracking-tight">{experience[0].role}</p>
            <p className="mt-1 text-muted">at {experience[0].company}</p>
          </div>
          <p className="text-sm text-muted">
            Also studying Software Engineering at African Leadership University.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

/* ───────── Work (project cards) ───────── */
function ProjectCard({ p, i }: { p: Project; i: number }) {
  const href = p.liveUrl || p.codeUrl;
  const t = tones[i % tones.length];

  const body = (
    <>
      <div className={`relative aspect-[16/9] overflow-hidden rounded-2xl ${t.bg} ${t.text}`}>
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={`${p.title} screenshot`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="flex h-full flex-col justify-between p-6">
            <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-3xl leading-tight font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
              {p.title}
            </span>
          </div>
        )}
        {p.status && (
          <span className="absolute top-4 right-4 rounded-full bg-card px-3 py-1 font-mono text-[11px] text-fg">
            {p.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-0.5 text-sm text-faint">
              {p.client}
              {p.year && <> · {p.year}</>}
            </p>
          </div>
          {href && (
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand transition-colors group-hover:bg-accent group-hover:text-card">
              <ArrowIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          )}
        </div>
        <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {p.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </>
  );

  const cls = "card lift group flex h-full flex-col p-3";
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

export function Work() {
  return (
    <Section id="work" label="Selected work" title="Systems I've shipped">
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} as="li" delay={(i % 2) * 100}>
            <ProjectCard p={p} i={i} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/* ───────── Experience ───────── */
export function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've worked">
      <ol className="grid grid-cols-1 gap-4">
        {experience.map((e, i) => {
          const current = e.period.includes("Present");
          return (
            <Reveal as="li" key={e.company + e.period} delay={i * 60}>
              <article className={`lift grid gap-4 rounded-3xl p-7 md:grid-cols-[220px_1fr] md:gap-10 md:p-9 ${current ? "bg-brown text-card" : "card"}`}>
                <div className="flex flex-col gap-3">
                  <span
                    className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 font-mono text-xs ${
                      current ? "bg-accent text-card" : "bg-sand text-muted"
                    }`}
                  >
                    {current && <span className="h-1.5 w-1.5 rounded-full bg-card" />}
                    {e.period}
                  </span>
                  <p className={`text-sm ${current ? "text-card/75" : "text-faint"}`}>{e.place}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{e.role}</h3>
                  <p className={`mt-0.5 ${current ? "text-card/80" : "text-accent-dark"}`}>{e.company}</p>
                  <ul className={`mt-4 space-y-2 ${current ? "text-card/85" : "text-muted"}`}>
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-3 leading-relaxed">
                        <span aria-hidden="true" className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${current ? "bg-accent" : "bg-accent"}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </ol>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {education.map((ed, i) => (
          <Reveal key={ed.school} delay={i * 80} className="card lift flex flex-col p-7">
            <span className="w-fit rounded-full bg-sand px-3 py-1 font-mono text-xs text-muted">{ed.period}</span>
            <p className="mt-6 font-mono text-xs tracking-widest text-accent-dark uppercase">Education</p>
            <h3 className="mt-1 text-lg font-semibold">{ed.school}</h3>
            <p className="mt-1 text-sm text-muted">{ed.award}</p>
          </Reveal>
        ))}
        <Reveal delay={160} className="lift flex flex-col rounded-3xl bg-accent p-7 text-card">
          <span className="w-fit rounded-full bg-card px-3 py-1 font-mono text-xs text-accent-dark">Curriculum</span>
          <h3 className="mt-6 text-lg font-semibold">{extra.title}</h3>
          <p className="mt-1 text-sm text-card/85">{extra.org}</p>
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <Button href={profile.cvUrl} external>
          Download my CV <ArrowIcon />
        </Button>
      </Reveal>
    </Section>
  );
}

/* ───────── Stack ───────── */
export function Stack() {
  return (
    <Section id="stack" label="Stack" title="Tools I build with">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 3) * 80} className="card lift p-7">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className={`flex h-9 w-9 items-center justify-center rounded-xl font-mono text-xs ${tones[i % tones.length].bg} ${tones[i % tones.length].text}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold">{g.group}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <Tag key={it}>{it}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}


/* ───────── Contact (big brown card) ───────── */
export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 pb-16 md:px-8">
      <Reveal className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-brown p-8 text-card md:col-span-2 md:p-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 font-mono text-xs tracking-widest uppercase">
            Contact
          </span>
          <h2 className="mt-8 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-6xl">
            Have a project in mind?
            <br />
            <span className="text-sand">Let&apos;s talk.</span>
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex flex-wrap items-center gap-3 text-lg md:text-2xl"
          >
            <MailIcon />
            <span className="border-b-2 border-accent pb-1 transition-colors group-hover:border-card">{profile.email}</span>
            <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl bg-accent p-8 text-card">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase opacity-80">Phone</p>
            <p className="mt-1 text-xl font-medium">{profile.phone}</p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase opacity-80">Based in</p>
            <p className="mt-1 text-xl font-medium">{profile.location}</p>
          </div>
          <div className="flex gap-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-card text-accent-dark transition-transform hover:-translate-y-0.5">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-card text-accent-dark transition-transform hover:-translate-y-0.5">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pb-8 md:px-8">
      <div className="card flex flex-col gap-4 px-6 py-5 font-mono text-xs text-faint md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-dark">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-dark">LinkedIn</a>
          <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-dark">Résumé</a>
        </div>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
