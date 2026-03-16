const siteConfig = {
  githubProfile: "https://github.com/danglewaee",
  linkedinProfile: "https://www.linkedin.com/in/dang-le-121abb2b4/",
};

const socials = [
  { label: "LinkedIn", href: siteConfig.linkedinProfile },
  { label: "GitHub", href: siteConfig.githubProfile },
  { label: "Email", href: "mailto:dangle@umass.edu" },
  { label: "Phone", href: "tel:4134721116" },
];

const featuredProjects = [
  {
    number: "01",
    name: "BalanceOS",
    type: "Planning Systems",
    stack: "Python · FastAPI · JavaScript · Simulation · Reinforcement Learning",
    result: "A realistic weekly planner for students that turns overloaded task lists into schedules designed to reduce overload and improve consistency.",
    summary:
      "Built around a simple product promise: help students create a week they can actually follow, then validate planning strategies through simulation and benchmarking.",
    repo: "https://github.com/danglewaee/balance_os",
    tags: ["Product clarity", "Scheduling", "RL benchmark"],
  },
  {
    number: "02",
    name: "Incident-Intelligence Platform",
    type: "Backend Infrastructure",
    stack: "FastAPI · Redis · PostgreSQL · Prometheus",
    result: "A platform for distributed telemetry ingestion, anomaly detection, incident clustering, and root-cause ranking across multi-service systems.",
    summary:
      "Designed to reduce triage noise while surfacing deployment-related regressions more clearly through event-driven processing and dependency-aware ranking logic.",
    repo: siteConfig.githubProfile,
    tags: ["Reliability", "Telemetry", "Systems design"],
  },
  {
    number: "03",
    name: "AnomalyGuard",
    type: "Applied ML Product",
    stack: "FastAPI · React · Kafka · TimescaleDB",
    result: "A real-time anomaly detection platform for water telemetry with explainable alerts, secure ingestion, and live operational monitoring.",
    summary:
      "Built to make anomaly signals interpretable rather than just accurate, connecting ingestion, detection, explainability, and dashboard visibility in one flow.",
    repo: siteConfig.githubProfile,
    tags: ["Real-time systems", "Explainability", "Full stack"],
  },
];

const experiences = [
  {
    company: "AriesView",
    meta: "Software Engineer Intern · Boston, USA · Aug 2025 to Dec 2025",
    copy:
      "Built RAG, OCR, and LLM-based workflows over real-estate data, improving semantic retrieval and reducing analyst lookup time through natural-language interfaces.",
  },
  {
    company: "Ho Chi Minh University of Technology",
    meta: "Research Volunteer · HCMC, Vietnam · May 2025 to Present",
    copy:
      "Worked on radar nowcasting research, reproducing deep learning architectures in PyTorch and improving MAE through preprocessing-driven ablation studies.",
  },
  {
    company: "MassAI",
    meta: "Project Lead / Events Coordinator · Amherst, MA · Jan 2025 to Present",
    copy:
      "Led a 6-member engineering team on sea-level prediction work, translating a real environmental problem into a deployable machine learning system.",
  },
];

const skills = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "TypeScript",
  "FastAPI",
  "React",
  "PyTorch",
  "TensorFlow",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Docker",
  "Kubernetes",
  "Neo4j",
  "Git",
];

function renderSocials() {
  const container = document.getElementById("social-links");
  container.innerHTML = socials
    .map(
      (social) => `<a class="social-link" href="${social.href}" target="_blank" rel="noreferrer">${social.label}</a>`
    )
    .join("");
}

function renderFeaturedWork() {
  const container = document.getElementById("featured-work");
  container.innerHTML = featuredProjects
    .map(
      (project) => `
        <article class="project-card reveal">
          <div class="project-index">${project.number}</div>
          <div class="project-main">
            <p class="kicker">${project.type}</p>
            <h3>${project.name}</h3>
            <p class="project-result">${project.result}</p>
            <p class="work-summary">${project.summary}</p>
            <div class="project-actions">
              <a class="project-link primary" href="${project.repo}" target="_blank" rel="noreferrer">View GitHub</a>
            </div>
          </div>
          <div class="project-side">
            <p class="project-stack">${project.stack}</p>
            <div class="tag-row">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
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
          <div class="experience-meta">
            <p>${item.company}</p>
            <span>${item.meta}</span>
          </div>
          <div class="experience-copy">
            <p>${item.copy}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  const container = document.getElementById("skills-cloud");
  container.innerHTML = skills.map((skill) => `<span>${skill}</span>`).join("");
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

renderSocials();
renderFeaturedWork();
renderExperience();
renderSkills();
attachReveal();
