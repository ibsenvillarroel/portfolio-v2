const expertise = [
  {
    number: "01",
    title: "Insurance Technology",
    description:
      "Core insurance systems, product configuration, rating structures, coverages, validations, policy administration and claims processes.",
  },
  {
    number: "02",
    title: "Oracle & Data Systems",
    description:
      "Oracle PL/SQL packages, procedures, scheduled jobs, integrations, data corrections and production support.",
  },
  {
    number: "03",
    title: "Business Analysis",
    description:
      "Requirements analysis, functional design, root-cause investigation, testing and controlled release coordination.",
  },
  {
    number: "04",
    title: "Product, Data & AI",
    description:
      "Digital product strategy, web and mobile platforms, analytics, automation and AI-enabled product experiences.",
  },
];

const selectedWork = [
  {
    category: "Product & Technology",
    title: "QuinielaManía",
    subtitle: "From idea to production",
    description:
      "A multi-sport social prediction platform with customizable leagues, global rankings, multilingual experiences, automated results and an AI-powered assistant.",
    tags: ["Next.js", "NestJS", "Expo", "PostgreSQL", "AI"],
    href: "https://quinielamania.com",
    action: "Visit platform",
    featured: true,
  },
  {
    category: "Insurance Systems",
    title: "Product & Regulatory Configuration",
    subtitle: "An anonymized insurance case study",
    description:
      "Translating complex tariff, coverage and regulatory requirements into reliable product configurations across development, QA and production environments.",
    tags: ["Insurance", "Requirements", "Configuration", "QA"],
    href: null,
    action: "Case study coming soon",
    featured: false,
  },
  {
    category: "Oracle PL/SQL",
    title: "Production Reliability",
    subtitle: "An anonymized technical case study",
    description:
      "Investigating critical incidents, identifying root causes and implementing controlled Oracle PL/SQL and data corrections in a core insurance platform.",
    tags: ["Oracle", "PL/SQL", "Root Cause Analysis", "Production"],
    href: null,
    action: "Case study coming soon",
    featured: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050b16] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-[-18rem] top-[-14rem] h-[36rem] w-[36rem] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute right-[-12rem] top-[18rem] h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-[-18rem] left-[30%] h-[34rem] w-[34rem] rounded-full bg-cyan-400/5 blur-[140px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050b16]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="#top"
            className="flex items-center gap-3 font-semibold tracking-tight text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-sm text-cyan-300">
              IV
            </span>

            <span className="hidden sm:block">Ibsen Villarroel</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#expertise">
              Expertise
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
          </div>

          <a
            href="mailto:ibsenvillarroel@gmail.com"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2.5 text-sm font-medium text-cyan-200 transition hover:border-cyan-200/60 hover:bg-cyan-300/15"
          >
            Contact me
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-24 lg:px-8"
      >
        <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              Senior Insurance Technology Consultant
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              I turn complex insurance requirements into{" "}
              <span className="text-cyan-300">reliable systems</span> and
              data-driven products.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
              More than 10 years connecting insurance operations, Oracle
              PL/SQL, core systems, product configuration, business analysis
              and modern product development.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                View selected work
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/ibsen-villarroel"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                View LinkedIn
              </a>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-300/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">
                Professional focus
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Insurance Technology",
                  "Oracle PL/SQL",
                  "Core Insurance Systems",
                  "Product Configuration",
                  "Business Analysis",
                  "Data & AI",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/8 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-slate-200">{item}</span>
                    <span className="text-cyan-300">↗</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-px px-6 sm:grid-cols-3 lg:px-8">
          {[
            ["10+", "Years in insurance technology"],
            ["Oracle", "PL/SQL and core systems"],
            ["Product", "Web, API and mobile delivery"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-white/5 py-8 sm:border-l sm:px-8 first:border-l-0"
            >
              <p className="text-2xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">
            Selected work
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            Building products and solving complex operational problems.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Public product work and anonymized case studies that demonstrate
            how I connect business requirements with technical execution.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {selectedWork.map((project) => (
            <article
              key={project.title}
              className={`group flex min-h-[31rem] flex-col rounded-[1.75rem] border p-7 transition duration-300 ${
                project.featured
                  ? "border-cyan-300/25 bg-cyan-300/[0.06] hover:border-cyan-300/45"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
                {project.category}
              </p>

              <div className="mt-20">
                <p className="text-sm text-slate-500">{project.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  {project.description}
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-10">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center font-medium text-cyan-300 transition group-hover:text-cyan-200"
                  >
                    {project.action}
                    <span className="ml-2">↗</span>
                  </a>
                ) : (
                  <span className="text-sm text-slate-600">
                    {project.action}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="expertise"
        className="relative z-10 border-y border-white/5 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">
                Expertise
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-white">
                Business context and technical depth.
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-slate-400">
                My strongest work happens where insurance operations,
                functional analysis, databases and product development meet.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {expertise.map((item) => (
                <article
                  key={item.number}
                  className="rounded-3xl border border-white/10 bg-[#07101f] p-6"
                >
                  <span className="font-mono text-xs text-cyan-300">
                    {item.number}
                  </span>

                  <h3 className="mt-10 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">
              About
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-white">
              Insurance, business and technology.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              I work at the intersection of insurance operations, functional
              analysis and technical implementation. My experience ranges from
              configuring complex insurance products and supporting critical
              production systems to co-founding and building a modern digital
              platform.
            </p>

            <p>
              My background in actuarial science and data analytics helps me
              understand quantitative and business requirements, while my
              Oracle PL/SQL and product experience allows me to turn those
              requirements into practical, reliable solutions.
            </p>

            <p className="text-white">
              I am particularly effective in roles that require understanding
              both the business problem and the technical implementation behind
              it.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-8 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] px-7 py-14 sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">
              Let&apos;s connect
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Looking for an insurance technology professional who can connect
              business and engineering?
            </h2>
          </div>

          <a
            href="mailto:ibsenvillarroel@gmail.com"
            className="mt-8 inline-flex shrink-0 items-center justify-center rounded-full bg-cyan-300 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-200 lg:ml-10 lg:mt-0"
          >
            Start a conversation
          </a>
        </div>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 Ibsen Villarroel.</p>

        <div className="flex gap-6">
          <a
            className="transition hover:text-slate-300"
            href="https://www.linkedin.com/in/ibsen-villarroel"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="transition hover:text-slate-300"
            href="https://github.com/ibsenvillarroel"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            className="transition hover:text-slate-300"
            href="https://quinielamania.com"
            target="_blank"
            rel="noreferrer"
          >
            QuinielaManía
          </a>
        </div>
      </footer>
    </main>
  );
}