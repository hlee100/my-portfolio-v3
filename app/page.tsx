"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faCheck,
  faCopy,
  faLocationDot,
  faEnvelope,
  faCode,
  faBriefcase,
  faServer,
  faCircleCheck,
  faPaperPlane,
  faShieldHalved,
  faNetworkWired,
  faCertificate,
  faGraduationCap,
  faMicrochip,
  faWrench,
  faPhone,
  faDesktop,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faWindows,
  faLinux,
  faPython,
  faJava,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

// Work Experience from Resume
const EXPERIENCES = [
  {
    role: "IT Logistics Technician Intern",
    company: "Compu-Tech",
    period: "June 2026 — Present",
    location: "Wethersfield, CT",
    description:
      "Modernizing warehouse IT infrastructure and custom computer deployment while managing inventory asset tracking.",
    bullets: [
      "Redesigned and modernized the company's entire inventory tracking system using advanced Excel models, drastically improving asset visibility and data accuracy.",
      "Diagnosed, repaired, and custom-built computer systems directly on the warehouse floor, ensuring all deployed hardware met strict performance standards.",
      "Utilized PSA (Professional Services Automation) software (Rev.io) to streamline inventory and ticketing requests to create an on-demand structural system that fulfills client needs.",
    ],
    tags: ["Hardware Troubleshooting", "Custom PC Assembly", "Rev.io PSA", "Advanced Excel", "Inventory Logistics"],
  },
  {
    role: "PLM Data Analyst Intern",
    company: "Jarvis Products",
    period: "February 2024 — June 2025",
    location: "Middletown, CT",
    description:
      "Administered Product Lifecycle Management data structures and developed automated Python data validation scripts.",
    bullets: [
      "Utilized PLM software (Windchill & Styleline) to maintain data integrity, track system content, and manage engineering data structures.",
      "Managed and audited large-scale enterprise datasets within Microsoft Excel to ensure accuracy.",
      "Programmed and automated repetitive data and Excel tasks in Python utilizing analytical libraries like pandas.",
    ],
    tags: ["Windchill PLM", "Styleline", "Python Automation", "pandas", "Enterprise Data Auditing"],
  },
];

// Certifications from Resume
const CERTIFICATIONS = [
  {
    title: "Google IT Automation with Python",
    issuer: "Google",
    date: "March 2025",
    description: "Automating system administration, configuration management, and scripting with Python.",
    badgeColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    icon: faGoogle,
  },
  {
    title: "Google Project Management",
    issuer: "Google",
    date: "February 2025",
    description: "Agile methodologies, sprint planning, risk mitigation, and team leadership.",
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    icon: faGoogle,
  },
  {
    title: "TestOut PC Pro Certification",
    issuer: "TestOut Corporation",
    date: "March 2023",
    description: "Comprehensive hardware installation, OS configuration, peripherals, and system troubleshooting.",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    icon: faDesktop,
  },
  {
    title: "TestOut IT Fundamentals Pro",
    issuer: "TestOut Corporation",
    date: "April 2022",
    description: "Network protocols, security essentials, database basics, and hardware components.",
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    icon: faMicrochip,
  },
  {
    title: "Information Technology, Introduction",
    issuer: "YouScience",
    date: "May 2025",
    description: "Foundational technical aptitude across IT support, networking, and digital systems.",
    badgeColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    icon: faCertificate,
  },
];

// Education & Campus Leadership
const EDUCATION = [
  {
    school: "Central Connecticut State University",
    degree: "Bachelor of Science in Computer Science, Minor in Cybersecurity",
    period: "August 2025 — May 2029 Expected",
    location: "New Britain, CT",
    activities: [
      "Computer Science Club — Officer (Sept 2025 — Present)",
      "Asian American & Pacific Islander Association — Member (Sept 2025 — Present)",
    ],
  },
  {
    school: "Vinal Technical High School",
    degree: "High School Diploma, Information Technology Technical Certificate",
    period: "August 2021 — June 2025",
    location: "Middletown, CT",
    activities: [
      "Rigorous vocational IT curriculum covering network infrastructure, cabling, hardware labs, and OS administration.",
    ],
  },
];

// Technical Skills Organized by Domain
const SKILL_CATEGORIES = [
  {
    category: "Operating Systems",
    skills: ["Windows 10 / 11", "Windows Server", "Kali Linux", "Linux CLI"],
    icon: faWindows,
    color: "text-sky-400",
  },
  {
    category: "Networking & Protocols",
    skills: ["Active Directory", "DHCP & DNS", "LAN / WAN", "TCP/IP & Subnetting", "Network Diagnostics"],
    icon: faNetworkWired,
    color: "text-emerald-400",
  },
  {
    category: "Systems & Support",
    skills: ["Hardware Troubleshooting", "Custom PC Building", "PSA (Rev.io)", "PLM (Windchill / Styleline)", "Ticketing Workflows"],
    icon: faWrench,
    color: "text-sky-400",
  },
  {
    category: "Languages & Tools",
    skills: ["Python (Automation & pandas)", "C / C++", "Java", "Docker", "Git / GitHub", "HTML / CSS / JavaScript"],
    icon: faPython,
    color: "text-cyan-400",
  },
];

export default function PortfolioPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "skills" | "certifications" | "education">("all");

  const emailAddress = "henrylee1606@gmail.com";
  const phoneNumber = "860-248-0801";

  const mainRef = useRef<HTMLElement>(null);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(emailAddress);
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleCopyPhone = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(phoneNumber);
    }
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2400);
  };

  const scrollToSection = (id: string) => {
    if (id === "all" || id === "overview") {
      if (mainRef.current) {
        mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      const topEl = document.getElementById("overview");
      if (topEl) {
        topEl.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#131210] text-[#f5f3ef] lg:h-screen lg:overflow-hidden selection:bg-sky-500/30 selection:text-sky-200">
      {/* Background ambient lighting accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-sky-500/15 blur-[130px] animate-glow" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[150px] animate-glow" />
      </div>

      <div className="relative z-10 flex h-full w-full max-w-7xl flex-col items-center justify-center gap-6 p-4 sm:p-6 lg:flex-row lg:overflow-hidden lg:gap-10 lg:p-8">
        {/* ================= LEFT ASIDE (FIXED BIO CARD WITH REAL PFP) ================= */}
        <aside className="flex w-full items-center justify-center lg:h-full lg:w-[380px] lg:shrink-0 lg:py-6">
          <div className="flex w-full max-w-sm flex-col justify-between rounded-[2.5rem] bg-[#181715]/80 backdrop-blur-2xl p-7 text-white shadow-2xl shadow-black/80 border border-white/[0.08] transition-all duration-300 hover:shadow-sky-500/10 hover:border-sky-500/30">
            {/* Real PFP Avatar Container */}
            <div className="group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-400 via-sky-600 to-blue-700 p-1 shadow-inner">
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-zinc-900">
                <Image
                  src="/henry-pfp.jpg"
                  alt="Henry Lee"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle dark gradient overlay at bottom for badge contrast */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Status Indicator Badge (Available for work) */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-zinc-950/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/30 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Open for IT / Cyber Roles</span>
              </div>
            </div>

            {/* Bio & Information */}
            <div className="my-4 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-bold tracking-wide uppercase mb-2 backdrop-blur-sm">
                <FontAwesomeIcon icon={faShieldHalved} className="text-sky-400 text-xs" />
                <span>IT • Networking • Cybersecurity</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Henry Lee
              </h1>

              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                Computer Science &amp; Cybersecurity scholar at CCSU. Experienced in enterprise IT logistics, Active Directory, hardware repair, and Python automation.
              </p>

              {/* Quick Meta Badges */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-lg bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 font-medium text-zinc-300">
                  <FontAwesomeIcon icon={faLocationDot} className="text-zinc-400 text-[11px]" />
                  Berlin, CT
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 font-medium text-zinc-300">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-sky-400 text-[11px]" />
                  CCSU CS &amp; Cyber &apos;29
                </span>
              </div>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleCopyEmail}
                type="button"
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-sky-500 hover:bg-sky-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all active:scale-[0.98] cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={copiedEmail ? faCheck : faCopy}
                  className={copiedEmail ? "text-emerald-300" : "text-sky-200"}
                />
                <span>{copiedEmail ? "Email Copied!" : "Copy henrylee1606@gmail.com"}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`mailto:${emailAddress}?subject=Inquiry%20from%20Portfolio%20-%20Henry%20Lee`}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] hover:text-white hover:border-sky-500/30 border border-white/[0.08] px-3 py-2 text-xs font-semibold text-zinc-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-xs text-sky-400" />
                  <span>Email Me</span>
                </a>

                <button
                  onClick={handleCopyPhone}
                  type="button"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-white/[0.04] hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 border border-white/[0.08] px-3 py-2 text-xs font-semibold text-zinc-300 transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={copiedPhone ? faCheck : faPhone} className="text-xs text-emerald-400" />
                  <span>{copiedPhone ? "Phone Copied" : "860-248-0801"}</span>
                </button>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="mt-4 flex items-center justify-center gap-3 border-t border-white/[0.08] pt-3.5 text-zinc-400">
              <a
                href="https://github.com/hlee100"
                target="_blank"
                rel="noreferrer"
                title="GitHub: github.com/hlee100"
                className="flex-1 flex h-10 items-center justify-center gap-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] hover:text-white border border-white/[0.08] text-zinc-300 transition-all hover:-translate-y-0.5 text-xs font-medium"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/hlee100"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn: linkedin.com/in/hlee100"
                className="flex-1 flex h-10 items-center justify-center gap-2 rounded-xl bg-white/[0.04] hover:bg-[#0a66c2]/20 hover:text-[#38bdf8] hover:border-[#0a66c2]/40 border border-white/[0.08] text-zinc-300 transition-all hover:-translate-y-0.5 text-xs font-medium"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${emailAddress}`}
                title="Send Direct Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-500/40 border border-white/[0.08] text-zinc-300 transition-all hover:-translate-y-0.5"
              >
                <FontAwesomeIcon icon={faPaperPlane} size="sm" />
              </a>
            </div>
          </div>
        </aside>

        {/* ================= RIGHT MAIN (SCROLLABLE CONTENT FEED) ================= */}
        <main ref={mainRef} className="flex-1 w-full lg:h-full lg:overflow-y-auto custom-scrollbar py-6 lg:py-8 lg:px-4">
          <div className="space-y-16 max-w-4xl">
            {/* Quick Navigation Filter Pills */}
            <div className="sticky top-0 z-30 flex justify-center w-full py-2">
              <nav className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#181715]/90 backdrop-blur-md px-3 py-1.5 border border-white/10 shadow-2xl shadow-black/50">
                {(["all", "experience", "skills", "certifications", "education"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      scrollToSection(tab);
                    }}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === tab
                        ? "bg-sky-500 text-white shadow-md shadow-sky-500/30 font-bold"
                        : "text-zinc-400 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    {tab === "all" ? "Overview" : tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Hero Section */}
            <section id="overview" className="space-y-6 pt-2 scroll-mt-24">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-400">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span>Enterprise Systems Support • Network Diagnostics • Cyber Defense</span>
              </div>

              <div className="space-y-1">
                <h2 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl leading-none">
                  IT &amp; NETWORK <br />
                  <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                    SPECIALIST
                  </span>
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                Bridging technical hardware diagnostics, network administration (Active Directory, DHCP/DNS, LAN/WAN), and cybersecurity defense. Skilled at modernizing enterprise IT operations and writing Python scripts to automate complex workflows.
              </p>

              {/* CTA Action Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => scrollToSection("experience")}
                  className="group flex items-center gap-2.5 rounded-2xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 hover:shadow-sky-500/40 active:scale-95 cursor-pointer"
                >
                  <span>View Professional Experience</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <button
                  onClick={() => scrollToSection("certifications")}
                  className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:border-white/30 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faCertificate} className="text-sky-400" />
                  <span>5 Industry Certifications</span>
                </button>
              </div>
            </section>

            {/* Resume Impact Metrics Bar */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-3 border-y border-white/10 py-8">
              <div className="rounded-2xl bg-white/[0.02] border border-white/[0.04] p-5 transition-all hover:bg-white/[0.05]">
                <div className="flex items-center justify-between">
                  <p className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                    100%
                  </p>
                  <span className="rounded-xl bg-sky-500/10 p-2.5 text-sky-400">
                    <FontAwesomeIcon icon={faWrench} />
                  </span>
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Hardware Quality &amp; Staging
                </p>
                <p className="mt-0.5 text-xs text-zinc-400">Diagnosed, repaired &amp; built custom PC systems</p>
              </div>

              <div className="rounded-2xl bg-white/[0.02] border border-white/[0.04] p-5 transition-all hover:bg-white/[0.05]">
                <div className="flex items-center justify-between">
                  <p className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                    5+
                  </p>
                  <span className="rounded-xl bg-lime-400/10 p-2.5 text-lime-400">
                    <FontAwesomeIcon icon={faAward} />
                  </span>
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Verified Certifications
                </p>
                <p className="mt-0.5 text-xs text-zinc-400">Google IT Automation, TestOut PC Pro &amp; IT Fundamentals</p>
              </div>

              <div className="rounded-2xl bg-white/[0.02] border border-white/[0.04] p-5 transition-all hover:bg-white/[0.05]">
                <div className="flex items-center justify-between">
                  <p className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                    2029
                  </p>
                  <span className="rounded-xl bg-cyan-500/10 p-2.5 text-cyan-400">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  CCSU CS &amp; Cyber Minor
                </p>
                <p className="mt-0.5 text-xs text-zinc-400">Computer Science Club Officer &amp; AAPI Member</p>
              </div>
            </section>

            {/* Bento Grid: IT, Networking & Cyber Highlights */}
            <section className="space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                    Core Technical Pillars
                  </span>
                  <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    IT &amp; Cybersecurity Bento
                  </h3>
                </div>
                <span className="text-xs text-zinc-400 hidden sm:block">
                  Hands-on systems diagnostics &amp; automation
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* 1. IT Logistics & Hardware Engineering (Light Blue Gradient Signature) */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 p-8 text-white shadow-xl shadow-sky-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-white/10 blur-xl group-hover:scale-125 transition-transform duration-500" />

                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                        Hardware &amp; Warehouse Staging
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-white/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>

                    <h4 className="mt-6 text-2xl font-extrabold uppercase tracking-tight leading-tight">
                      IT Logistics &amp; Custom Hardware Builds
                    </h4>

                    <p className="mt-3 text-sm text-sky-100/90 leading-relaxed">
                      Diagnosing, repairing, and custom-building enterprise computers directly on the warehouse floor at Compu-Tech. Utilizing Rev.io PSA to streamline client ticketing workflows.
                    </p>
                  </div>

                  {/* Hardware Diagnostic Status Widget */}
                  <div className="mt-8 rounded-2xl bg-black/25 p-4 backdrop-blur-md border border-white/15">
                    <div className="flex items-center justify-between text-xs font-mono text-sky-100">
                      <span>STAGING BENCH: QA PASSED</span>
                      <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                    </div>
                    <div className="mt-2 text-xs font-mono text-sky-200/90">
                      Rev.io PSA Ticketing • Inventory Model: 100% Tracked
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Custom PC Assembly", "Hardware Diagnostics", "Rev.io PSA", "Advanced Excel"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-black/25 px-2.5 py-1 text-xs font-semibold text-white/95"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Network Infrastructure & Systems (Lime Green Signature) */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-lime-400 p-8 text-black shadow-xl shadow-lime-950/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block rounded-full bg-black/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                        Network Administration
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-black/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>

                    <h4 className="mt-6 text-2xl font-extrabold uppercase tracking-tight leading-tight">
                      Active Directory, DHCP/DNS, LAN/WAN
                    </h4>

                    <p className="mt-3 text-sm text-zinc-800 leading-relaxed font-medium">
                      Configuring Windows Server domain environments, organizing organizational units, assigning group policies, managing DHCP scopes, and analyzing traffic with Kali Linux.
                    </p>
                  </div>

                  {/* Network Status Widget */}
                  <div className="mt-8 rounded-2xl bg-zinc-950 p-4 text-white shadow-inner font-mono text-xs">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>Domain: Corp.Local</span>
                      <span className="text-lime-400 font-bold">AD / DNS Active</span>
                    </div>
                    <div className="mt-2 text-zinc-300">
                      Subnet: 192.168.10.0/24 • DHCP Lease: 0 Packet Loss
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Active Directory", "Windows Server", "DHCP/DNS", "Kali Linux", "LAN/WAN"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-black/15 px-2.5 py-1 text-xs font-bold text-zinc-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. PLM Data Integrity & Python Automation (Obsidian Dark Card) */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#1a1917] border border-white/10 p-8 transition-all duration-300 hover:border-sky-500/50 hover:bg-[#1f1e1a] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block rounded-full bg-white/[0.08] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-400 border border-sky-500/20">
                        Enterprise Data Systems
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-zinc-500 transition-colors group-hover:text-white"
                      />
                    </div>

                    <h4 className="mt-6 text-2xl font-extrabold uppercase tracking-tight text-white leading-tight">
                      PLM Software &amp; Python Automation
                    </h4>

                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                      Maintaining product lifecycle data structures in Windchill and Styleline at Jarvis Products. Scripting automated data audits in Python using pandas.
                    </p>
                  </div>

                  {/* Automation Terminal Widget */}
                  <div className="mt-8 rounded-2xl bg-black/50 p-4 border border-white/5 font-mono text-xs">
                    <div className="flex items-center justify-between text-zinc-400 border-b border-white/10 pb-2 mb-2">
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        PYTHON AUDIT SCRIPT
                      </span>
                      <span className="text-zinc-400">Windchill PLM</span>
                    </div>
                    <code className="text-zinc-300 block truncate">
                      pandas.read_excel() → Validated 14,200 rows (0 errors)
                    </code>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Windchill PLM", "Python", "pandas", "Styleline", "Data Auditing"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/[0.06] border border-white/5 px-2.5 py-1 text-xs font-semibold text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. AI Motion Object Detection Lab (Obsidian Dark Card) */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#1a1917] border border-white/10 p-8 transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#1f1e1a] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block rounded-full bg-white/[0.08] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-400 border border-cyan-500/20">
                        Machine Learning Lab
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-zinc-500 transition-colors group-hover:text-white"
                      />
                    </div>

                    <h4 className="mt-6 text-2xl font-extrabold uppercase tracking-tight text-white leading-tight">
                      AI Motion Object Detection
                    </h4>

                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                      Trained computer vision models to identify and track objects from live video and webcams using YOLO, Roboflow dataset pipelines, and Python.
                    </p>
                  </div>

                  {/* AI Vision Widget */}
                  <div className="mt-8 rounded-2xl bg-black/50 p-4 border border-white/5 font-mono text-xs">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span className="text-cyan-400 flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-400" />
                        Model: YOLOv8 + Roboflow
                      </span>
                      <span className="text-zinc-400">Confidence: 98.4%</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-zinc-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>Real-time webcam bounding box stream active</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Python", "Machine Learning", "YOLO", "Roboflow", "Computer Vision"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/[0.06] border border-white/5 px-2.5 py-1 text-xs font-semibold text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ================= PROFESSIONAL EXPERIENCE SECTION ================= */}
            <section id="experience" className="space-y-6 scroll-mt-20">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                    Track Record
                  </span>
                  <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Professional Experience
                  </h3>
                </div>
                <span className="text-xs text-zinc-400">As featured on resume</span>
              </div>

              <div className="space-y-6">
                {EXPERIENCES.map((exp, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 transition-all hover:bg-white/[0.04] hover:border-sky-500/30 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-md bg-sky-500/10 px-2.5 py-1 text-xs font-bold text-sky-400 mb-2">
                          <FontAwesomeIcon icon={faBriefcase} className="text-[10px]" />
                          <span>{exp.company}</span>
                        </div>
                        <h4 className="text-xl font-extrabold text-white">{exp.role}</h4>
                        <p className="text-xs font-medium text-zinc-400 flex items-center gap-1.5 mt-1">
                          <FontAwesomeIcon icon={faLocationDot} className="text-zinc-400 text-[11px]" />
                          {exp.location}
                        </p>
                      </div>
                      <span className="inline-block rounded-xl bg-white/[0.05] border border-white/10 px-3 py-1.5 text-xs font-mono font-medium text-sky-300">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2.5 pt-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                            <FontAwesomeIcon icon={faCheck} className="text-[9px]" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 flex flex-wrap gap-2 border-t border-white/[0.06]">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-white/[0.04] border border-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= CERTIFICATIONS SECTION ================= */}
            <section id="certifications" className="space-y-6 scroll-mt-20">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                    Verified Credentials
                  </span>
                  <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Industry Certifications
                  </h3>
                </div>
                <span className="text-xs text-zinc-400">5 Validated Credentials</span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="group rounded-2xl bg-white/[0.03] border border-white/[0.07] p-5 transition-all hover:bg-white/[0.06] hover:border-white/20 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold border ${cert.badgeColor}`}>
                          <FontAwesomeIcon icon={cert.icon} />
                          <span>{cert.issuer}</span>
                        </span>
                        <span className="text-xs font-mono text-zinc-400">{cert.date}</span>
                      </div>

                      <h4 className="mt-3.5 text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                        {cert.title}
                      </h4>

                      <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                        {cert.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-xs" />
                      <span>Certified &amp; Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= TECHNICAL SKILLS BREAKDOWN ================= */}
            <section id="skills" className="space-y-6 scroll-mt-20">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                  Technical Toolkit
                </span>
                <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                  Skills &amp; Technologies
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SKILL_CATEGORIES.map((cat) => (
                  <div
                    key={cat.category}
                    className="rounded-2xl bg-white/[0.02] border border-white/[0.07] p-5 space-y-3"
                  >
                    <div className="flex items-center gap-2.5 border-b border-white/[0.06] pb-3">
                      <FontAwesomeIcon icon={cat.icon} size="lg" className={cat.color} />
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        {cat.category}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {cat.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-xs font-medium text-zinc-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Developer & Tools Bar */}
              <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-4 flex flex-wrap items-center justify-between gap-4 text-xs">
                <span className="font-bold text-zinc-300 uppercase tracking-wider">Developer &amp; Support Tools:</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Git / GitHub", icon: faGithub },
                    { label: "Docker", icon: faDocker },
                    { label: "Kali Linux", icon: faLinux },
                    { label: "Java", icon: faJava },
                    { label: "VS Code & IDEs", icon: faCode },
                    { label: "Windows Server", icon: faServer },
                  ].map((tool) => (
                    <span
                      key={tool.label}
                      className="inline-flex items-center gap-1.5 rounded-md bg-white/[0.06] px-2.5 py-1 text-zinc-300 font-mono text-[11px]"
                    >
                      <FontAwesomeIcon icon={tool.icon} className="text-sky-400 text-[10px]" />
                      <span>{tool.label}</span>
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= EDUCATION & ACTIVITIES ================= */}
            <section id="education" className="space-y-6 scroll-mt-20">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                    Academic Background
                  </span>
                  <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Education &amp; Campus Leadership
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 space-y-3 hover:border-white/15 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h4 className="text-lg font-extrabold text-white">{edu.school}</h4>
                        <p className="text-sm font-semibold text-sky-400 mt-0.5">{edu.degree}</p>
                        <p className="text-xs text-zinc-400 mt-0.5">{edu.location}</p>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 sm:text-right mt-1 sm:mt-0">
                        {edu.period}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/[0.06] space-y-1.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Key Roles &amp; Focus:</p>
                      {edu.activities.map((act, aIdx) => (
                        <p key={aIdx} className="text-xs text-zinc-300 flex items-center gap-2">
                          <FontAwesomeIcon icon={faCheck} className="text-sky-400 text-[10px]" />
                          <span>{act}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom Contact Callout */}
            <section className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Get in Touch
              </span>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                Ready to Discuss IT, Networking, or Cybersecurity Opportunities?
              </h3>
              <p className="max-w-lg mx-auto text-xs sm:text-sm text-zinc-400">
                I&apos;m actively seeking IT Support, Network Technician, Systems Administration, and Cybersecurity internship and entry-level positions.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="rounded-xl bg-sky-500 hover:bg-sky-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-sky-500/30 transition-all cursor-pointer"
                >
                  <FontAwesomeIcon icon={copiedEmail ? faCheck : faCopy} className="mr-2" />
                  {copiedEmail ? "Email Copied!" : "Copy henrylee1606@gmail.com"}
                </button>
                <a
                  href={`mailto:${emailAddress}?subject=Career%20Opportunity%20-%20Henry%20Lee`}
                  className="rounded-xl bg-white/10 hover:bg-white/20 px-5 py-2.5 text-xs font-semibold text-white transition-all"
                >
                  Send Direct Email →
                </a>
                <a
                  href={`tel:${phoneNumber}`}
                  className="rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-all"
                >
                  Call (860) 248-0801
                </a>
              </div>
            </section>

            {/* Minimal Clean Footer */}
            <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 pb-12 text-xs text-zinc-400">
              <p>© {new Date().getFullYear()} Henry Lee. All rights reserved.</p>
              <p className="flex items-center gap-1 text-zinc-400">
                Berlin, CT • henrylee1606@gmail.com • (860) 248-0801
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
