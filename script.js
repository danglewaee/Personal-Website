const siteConfig = {
  githubProfile: "https://github.com/danglewaee",
  linkedinProfile: "https://www.linkedin.com/in/dang-le-121abb2b4/",
  websiteUrl: "https://personal-website-bal2qm9cv-danglewaees-projects.vercel.app/",
};

const heroLinks = [
  { label: "GitHub", href: siteConfig.githubProfile },
  { label: "LinkedIn", href: siteConfig.linkedinProfile },
  { label: "Email", href: "mailto:dangle@umass.edu" },
  { label: "Phone", href: "tel:4134721116" },
];

const education = [
  {
    label: "University",
    title: "University of Massachusetts Amherst",
    copy: "BS in Computer Science / Amherst, MA / Expected Graduation: Spring 2028",
  },
  {
    label: "Honors",
    title: "Awards and distinctions",
    copy: "Dean's List, Chancellor's Award, SASMO Bronze Medal",
  },
  {
    label: "Coursework",
    title: "Relevant coursework",
    copy: "Algorithms, Data Structures, ML, AI, OOP, Stats and Reasoning, Methodology Programming, Computer Principles, Computation",
  },
  {
    label: "Focus",
    title: "Current direction",
    copy: "Backend systems, AI-assisted products, planning engines, and applied ML tooling grounded in real operational problems.",
  },
];

const projects = [
  {
    name: "Incident-Intelligence Platform",
    type: "Distributed Systems",
    year: "2025",
    summary: "Built a platform for distributed systems that ingests telemetry, detects anomalies, and clusters correlated failures into incidents.",
    detail:
      "Designed a ranking engine using temporal precedence, anomaly intensity, upstream weighting, and deployment proximity, achieving 100 percent top-2 root-cause identification across 4 failure scenarios and reducing triage noise by 80.8 percent in a local benchmark.",
    stack: "FastAPI, Redis, PostgreSQL, Prometheus",
    href: siteConfig.githubProfile,
    coverClass: "cover-incident",
    coverLabel: "Systems observability",
    coverCaption: "Telemetry ingestion, anomaly detection, incident clustering, and root-cause ranking for distributed systems.",
  },
  {
    name: "AnomalyGuard",
    type: "Applied ML Platform",
    year: "2025",
    summary: "Built a real-time water quality monitoring platform supporting live ingestion, alerting, and explainable anomaly detection.",
    detail:
      "Implemented a hybrid detection pipeline using Isolation Forest and SHAP to flag pollutants with root-cause signals, and optimized the system to reach 0.81 ms p50 search latency during 5,000 concurrent upsert benchmarks.",
    stack: "FastAPI, React, PostgreSQL/TimescaleDB, Redis/Celery, Kafka, Docker Compose",
    href: siteConfig.githubProfile,
    coverClass: "cover-anomaly",
    coverLabel: "Operational ML",
    coverCaption: "Real-time telemetry monitoring with explainable anomaly alerts and live operational visibility.",
  },
  {
    name: "Cloud-Optimizer",
    type: "Infrastructure Optimization",
    year: "2025",
    summary: "Built a cloud infrastructure optimizer combining multi-horizon workload forecasting, MILP scheduling, and latency simulation across 960 scenarios spanning 3 cluster profiles and 40 services.",
    detail:
      "Developed baseline-vs-optimizer benchmarking and shadow-mode rollout backtesting, reducing simulated infrastructure cost by 13.5 percent versus reactive autoscaling with p95 optimization latency under 1 ms.",
    stack: "Python, Kubernetes, MILP, TensorFlow",
    href: siteConfig.githubProfile,
    coverClass: "cover-cloud",
    coverLabel: "Cloud systems",
    coverCaption: "Forecasting, scheduling, and rollout planning for safer and cheaper infrastructure changes.",
  },
  {
    name: "UMass-Study-Partner",
    type: "Planning Engine",
    year: "2026",
    summary: "Built a weekly planning engine that generates study schedules under deadline, workload, sleep, and recovery constraints.",
    detail:
      "Reduced missed deadlines by 62.9 percent versus an earliest-deadline-first baseline across 50 simulated scenarios, then added stability-aware replanning and an RL selector to improve recovery after disruptions.",
    stack: "Python, FastAPI, JavaScript, HTML/CSS, Pydantic, Uvicorn, Reinforcement Learning",
    href: "https://github.com/danglewaee/balance_os",
    coverClass: "cover-study",
    coverLabel: "Scheduling + RL",
    coverCaption: "Study scheduling, bounded replanning, and RL-guided strategy selection under changing workload conditions.",
  },
];

const experiences = [
  {
    company: "AriesView",
    role: "Software Engineer Intern / Boston, USA (hybrid) / September 2025 to December 2025",
    copy: "Built RAG pipelines and integrated Neo4j graph databases to improve semantic search precision on client insights by about 42 percent, then developed OCR pipelines and an LLM chatbot over real-estate datasets for natural-language lookup.",
  },
  {
    company: "Institute for Science and Technology Innovation",
    role: "Software Engineer Intern / HCMC, Vietnam (on-site) / June 2023 to July 2023",
    copy: "Collected and synthesized documents on water resource quality assessment for the Dong Nai and Sai Gon river basin system, then processed 4 years of hydro-met data for MIKE 11 and NAM flow simulations with water-level RMSE around 1.55 m.",
  },
  {
    company: "Ho Chi Minh University of Technology",
    role: "Research Volunteer / HCMC, Vietnam (on-site) / May 2025 to Aug 2025",
    copy: "Collaborated on radar nowcasting research using deep learning and Axial Attention, reproduced a ConvLSTM in PyTorch for sequence-to-one CAPPI reflectivity prediction, and improved MAE through preprocessing ablation studies and stronger training validation loops.",
  },
  {
    company: "UMASS CICS PLASMA Lab",
    role: "Undergraduate Research Volunteer / Amherst, MA / September 2025 to Present",
    copy: "Contributed to RightTyper, a Python type inference and static analysis tool, by implementing inference logic across core modules and validating performance against tools such as mypy and MonkeyType.",
  },
  {
    company: "UMASS CICS ml4ed Lab",
    role: "Undergraduate Research Volunteer / Amherst, MA / September 2025 to Present",
    copy: "Developed an AI-powered advising chatbot using RAG to help students navigate degree requirements and academic policies, integrating course prerequisites and roadmaps into a searchable vector database for retrieval.",
  },
];

const leadership = [
  {
    company: "MassAI",
    role: "Project Lead / Events Coordinator / Amherst, MA / January 2025 to Present",
    copy: "Led a 6-member team to deliver a sea rising level prediction model inspired by direct observations of high-tide flooding in Vietnam, achieving about 24 ms inference latency and 2.3 percent RMSE improvement over polynomial baselines.",
  },
  {
    company: "League of Coders",
    role: "Vice President",
    copy: "Self-funded and organized a summer camp for underprivileged children and implemented a water monitoring system for the community.",
  },
];

const skills = [
  {
    label: "Languages",
    items: ["Python", "Java", "C++", "JavaScript/TypeScript", "C#", "HTML/CSS"],
  },
  {
    label: "Databases and Infra",
    items: ["PostgreSQL", "Redis", "MongoDB", "Kafka", "Neo4j"],
  },
  {
    label: "Frameworks and Tools",
    items: ["FastAPI", "Flask", "React", "Node.js", "Docker", "Kubernetes", "Git", "REST API", "PyTorch", "TensorFlow", "NumPy", "Pandas"],
  },
];

function renderLinks() {
  const heroContainer = document.getElementById("hero-links");
  const footerContainer = document.getElementById("footer-links");
  const linkMarkup = heroLinks
    .map((link) => {
      const external = link.href.startsWith("http");
      const target = external ? ' target="_blank" rel="noreferrer"' : "";
      return `<a class="hero-link" href="${link.href}"${target}>${link.label}</a>`;
    })
    .join("");

  heroContainer.innerHTML = linkMarkup;
  footerContainer.innerHTML = linkMarkup;
}

function renderEducation() {
  const container = document.getElementById("education-grid");
  container.innerHTML = education
    .map(
      (item) => `
        <article class="education-card reveal">
          <p class="education-label">${item.label}</p>
          <h3>${item.title}</h3>
          <p class="education-copy">${item.copy}</p>
        </article>
      `
    )
    .join("");
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

function renderTimeline(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items
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

function renderSkills() {
  const container = document.getElementById("skill-groups");
  container.innerHTML = skills
    .map(
      (group) => `
        <article class="skill-group reveal">
          <p class="skill-label">${group.label}</p>
          <div class="skill-chip-row">
            ${group.items.map((item) => `<span>${item}</span>`).join("")}
          </div>
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
renderEducation();
renderProjects();
renderTimeline("experience-list", experiences);
renderTimeline("leadership-list", leadership);
renderSkills();
attachReveal();