const siteConfig = {
  githubProfile: "https://github.com/danglewaee",
  linkedinProfile: "https://www.linkedin.com/in/dang-le-121abb2b4/",
  websiteUrl: "https://personal-website-bal2qm9cv-danglewaees-projects.vercel.app/",
};

const heroLinks = [
  { label: "GitHub", href: siteConfig.githubProfile },
  { label: "LinkedIn", href: siteConfig.linkedinProfile },
  { label: "Email", href: "mailto:dangle@umass.edu" },
];

const projects = [
  {
    name: "BalanceOS",
    type: "Planning Systems",
    year: "2026",
    summary: "Turns student task lists, deadlines, and fixed commitments into realistic weekly schedules designed to reduce overload and improve consistency.",
    detail:
      "Built as a focused product instead of a vague productivity app: multi-objective planning on the front, simulation and RL benchmarking behind the scenes.",
    stack: "Python, FastAPI, JavaScript, Simulation, Reinforcement Learning",
    href: "https://github.com/danglewaee/balance_os",
    coverClass: "cover-balanceos",
    coverLabel: "Student planning",
    coverCaption: "Realistic weekly planning under deadline, workload, and recovery constraints.",
  },
  {
    name: "Incident-Intelligence Platform",
    type: "Reliability Tooling",
    year: "2025",
    summary: "Clusters noisy telemetry into incidents and ranks probable root causes across distributed services.",
    detail:
      "Designed to make regressions easier to explain and triage, combining event-driven ingestion, anomaly detection, and dependency-aware ranking.",
    stack: "FastAPI, Redis, PostgreSQL, Prometheus",
    href: siteConfig.githubProfile,
    coverClass: "cover-incident",
    coverLabel: "Backend systems",
    coverCaption: "Reducing triage noise while surfacing what changed and where it likely started.",
  },
  {
    name: "AnomalyGuard",
    type: "Applied ML Platform",
    year: "2025",
    summary: "Monitors water telemetry in real time with explainable anomaly alerts, secure ingestion, and live dashboards.",
    detail:
      "Built around a practical question: how do you make anomaly signals useful enough for operators to trust, not just accurate enough for a notebook?",
    stack: "FastAPI, React, Kafka, TimescaleDB, Redis",
    href: siteConfig.githubProfile,
    coverClass: "cover-anomaly",
    coverLabel: "Operational ML",
    coverCaption: "Real-time anomaly monitoring with explainability, ingestion, and live visibility.",
  },
  {
    name: "Water Monitoring System",
    type: "IoT + Community Systems",
    year: "2024",
    summary: "An ESP32-based monitoring system for tracking water quality in households dealing with contamination and limited infrastructure.",
    detail:
      "Combined low-cost sensing hardware, backend monitoring, and a notification dashboard to turn environmental data into something a community could actually use.",
    stack: "ESP32, React, Node.js, Flask, Sensor Telemetry",
    href: siteConfig.githubProfile,
    coverClass: "cover-water",
    coverLabel: "Human-centered systems",
    coverCaption: "Environmental sensing built around a direct, everyday problem rather than a demo scenario.",
  },
];

const focusAreas = [
  {
    label: "Backend",
    copy: "APIs, data flows, and service architecture that keep product ideas honest once they hit real usage and complexity.",
  },
  {
    label: "AI systems",
    copy: "RAG, planning, forecasting, and applied ML systems that are tied to a concrete product or operational problem.",
  },
  {
    label: "Product sense",
    copy: "I care a lot about reducing scope until the user value is obvious, then building the technical depth underneath it.",
  },
  {
    label: "Execution",
    copy: "Fast prototyping, strong iteration loops, and enough systems rigor to defend design choices in technical conversation.",
  },
];

const experiences = [
  {
    company: "AriesView",
    role: "Software Engineer Intern / Boston, USA / Aug 2025 to Dec 2025",
    copy: "Built RAG, OCR, and LLM-based workflows over real-estate data, improving retrieval quality and reducing analyst lookup friction through natural-language interfaces.",
  },
  {
    company: "Ho Chi Minh University of Technology",
    role: "Research Volunteer / HCMC, Vietnam / May 2025 to Present",
    copy: "Reproduced radar nowcasting architectures in PyTorch and improved MAE through preprocessing experiments and tighter evaluation loops.",
  },
  {
    company: "MassAI",
    role: "Project Lead / Events Coordinator / Amherst, MA / Jan 2025 to Present",
    copy: "Led a 6-member team building a sea-level forecasting system, translating an environmental problem into a machine learning product with fast inference.",
  },
];

function renderLinks() {
  const heroContainer = document.getElementById("hero-links");
  const footerContainer = document.getElementById("footer-links");
  const linkMarkup = heroLinks
    .map((link) => `<a class="hero-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join("");

  heroContainer.innerHTML = linkMarkup;
  footerContainer.innerHTML = linkMarkup;
}

function renderProjects() {
  const container = document.getElementById("project-list");
  container.innerHTML = projects
    .map(
      (project) => `
        <article class="project-item reveal">
          <a class="project-cover ${project.coverClass}" href="${project.href}" target="_blank" rel="noreferrer" aria-label="View ${project.name} on GitHub">
            <div class="cover-top">
              <span class="cover-chip">${project.coverLabel}</span>
              <span class="cover-year">${project.year}</span>
            </div>
            <div>
              <h3 class="cover-title">${project.name}</h3>
              <p class="cover-caption">${project.coverCaption}</p>
            </div>
          </a>
          <div class="project-info">
            <div class="project-meta">
              <p class="project-type">${project.type}</p>
              <p class="project-year">${project.year}</p>
            </div>
            <h3>${project.name}</h3>
            <p class="project-summary">${project.summary}</p>
            <p class="project-detail">${project.detail}</p>
            <p class="project-stack">${project.stack}</p>
            <div class="project-links">
              <a class="text-link" href="${project.href}" target="_blank" rel="noreferrer">View GitHub</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFocusAreas() {
  const container = document.getElementById("focus-grid");
  container.innerHTML = focusAreas
    .map(
      (item) => `
        <article class="focus-item">
          <p class="focus-item-label">${item.label}</p>
          <p class="focus-item-copy">${item.copy}</p>
        </article>
      `
    )
    .join("");
}

function renderExperience() {
  const container = document.getElementById("experience-list");
  container.innerHTML = experiences
    .map(
      (item) => `
        <article class="experience-item reveal">
          <div>
            <p class="experience-company">${item.company}</p>
            <p class="experience-role">${item.role}</p>
          </div>
          <p class="experience-copy">${item.copy}</p>
        </article>
      `
    )
    .join("");
}

function attachReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

renderLinks();
renderProjects();
renderFocusAreas();
renderExperience();
attachReveal();