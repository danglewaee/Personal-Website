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

const featuredProjects = [
  {
    name: "Incident-Intelligence Platform",
    type: "Distributed Systems",
    year: "2025",
    summary: "Telemetry ingestion, anomaly detection, and incident clustering for distributed systems.",
    detail:
      "Built a dependency-aware ranking engine that achieved 100 percent top-2 root-cause identification across 4 failure scenarios and reduced triage noise by 80.8 percent in a local benchmark.",
    stack: "FastAPI, Redis, PostgreSQL, Prometheus",
    href: siteConfig.githubProfile,
    coverClass: "cover-incident",
    coverLabel: "Systems observability",
    coverCaption: "Telemetry ingestion, anomaly detection, incident clustering, and root-cause ranking for distributed systems.",
    previewType: "incident",
  },
  {
    name: "AnomalyGuard",
    type: "Applied ML Platform",
    year: "2025",
    summary: "Real-time water quality monitoring with alerting and explainable anomaly detection.",
    detail:
      "Combined Isolation Forest and SHAP for pollutant alerts, then pushed search performance to 0.81 ms p50 during 5,000 concurrent upsert benchmarks.",
    stack: "FastAPI, React, PostgreSQL/TimescaleDB, Redis/Celery, Kafka, Docker Compose",
    href: siteConfig.githubProfile,
    coverClass: "cover-anomaly",
    coverLabel: "Operational ML",
    coverCaption: "Real-time telemetry monitoring with explainable anomaly alerts and live operational visibility.",
    previewType: "anomaly",
  },
  {
    name: "Inference Control Plane",
    type: "Inference Infrastructure",
    year: "2025",
    summary: "Multi-model inference control plane with routing, admission control, fallback, and canary support.",
    detail:
      "Benchmarked SLO-aware dispatch at 169.7 ms average latency and 289.8 ms p95 under mixed-priority traffic in the current MVP.",
    stack: "FastAPI, HTTPX, Prometheus, Docker Compose",
    href: siteConfig.githubProfile,
    coverClass: "cover-control",
    coverLabel: "Inference routing",
    coverCaption: "Routing, admission control, and canary support across heterogeneous model backends.",
    previewType: "control",
  },
  {
    name: "Cloud-Optimizer",
    type: "Infrastructure Optimization",
    year: "2025",
    summary: "Forecasting, MILP scheduling, and rollout planning for safer and cheaper infrastructure changes.",
    detail:
      "Reduced simulated infrastructure cost by 13.5 percent versus reactive autoscaling while keeping p95 optimization latency under 1 ms.",
    stack: "Python, Kubernetes, MILP, TensorFlow",
    href: siteConfig.githubProfile,
    coverClass: "cover-cloud",
    coverLabel: "Cloud systems",
    coverCaption: "Forecasting, scheduling, and rollout planning for safer and cheaper infrastructure changes.",
    previewType: "cloud",
  },
  {
    name: "UMass-Study-Partner",
    type: "Planning Engine",
    year: "2026",
    summary: "Study schedule generation under deadline, workload, sleep, and recovery constraints.",
    detail:
      "Reduced missed deadlines by 62.9 percent versus an earliest-deadline-first baseline, then added stability-aware replanning and an RL selector for disruption recovery.",
    stack: "Python, FastAPI, JavaScript, HTML/CSS, Pydantic, Uvicorn, Reinforcement Learning",
    href: "https://github.com/danglewaee/balance_os",
    coverClass: "cover-study",
    coverLabel: "Scheduling plus RL",
    coverCaption: "Study scheduling, bounded replanning, and RL-guided strategy selection under changing workload conditions.",
    previewType: "study",
  },
];

const additionalProjects = [
  {
    name: "Rag-memory-service",
    type: "RAG Backend Service",
    year: "2025",
    summary: "Persistent conversational memory service with hybrid retrieval, JWT APIs, Redis caching, and Prometheus metrics.",
    stack: "FastAPI, MongoDB, Redis",
    href: siteConfig.githubProfile,
  },
  {
    name: "Bitcoin-Node Cost Optimizer",
    type: "Infrastructure Cost Tooling",
    year: "2025",
    summary: "Node telemetry and spend projection tool with an action engine for apply steps, rollback plans, and risk-aware execution guidance.",
    stack: "FastAPI, SQLite/PostgreSQL",
    href: siteConfig.githubProfile,
  },
  {
    name: "Water Monitoring System",
    type: "IoT and Community Systems",
    year: "2024",
    summary: "ESP32-based pollution monitoring with 96.74 percent uptime over 6 months, plus a dashboard and backend for notifications.",
    stack: "ESP32, React, Node.js, Flask",
    href: siteConfig.githubProfile,
  },
  {
    name: "SMART Handcut",
    type: "Computer Vision",
    year: "2024",
    summary: "Gesture recognizer using MediaPipe and TensorFlow/LSTM that supports 8 OS-level shortcuts at 60 FPS and roughly 40 ms p95 latency.",
    stack: "MediaPipe, TensorFlow, LSTM",
    href: "https://github.com/danglewaee/SMART-Handcut",
  },
  {
    name: "CS-Career-Mentor",
    type: "Frontend Product",
    year: "2024",
    summary: "React career roadmap UI that cut user search latency by 80 percent and integrated Firebase for real-time data and auth.",
    stack: "React, Firebase",
    href: siteConfig.githubProfile,
  },
];

const experiences = [
  {
    company: "AriesView",
    title: "Software Engineer Intern",
    meta: "Boston, USA (hybrid) / September 2025 to December 2025",
    teaser: "RAG, Neo4j, OCR, and LLM workflows over real-estate data.",
    copy: "Built RAG pipelines and integrated Neo4j graph databases to improve semantic search precision on client insights by about 42 percent, then developed OCR pipelines and an LLM chatbot over real-estate datasets for natural-language lookup.",
    kicker: "Professional and Research",
  },
  {
    company: "Institute for Science and Technology Innovation",
    title: "Software Engineer Intern",
    meta: "HCMC, Vietnam (on-site) / June 2023 to July 2023",
    teaser: "Hydro-met processing and basin flow simulation for water quality assessment.",
    copy: "Collected and synthesized documents on water resource quality assessment for the Dong Nai and Sai Gon river basin system, then processed 4 years of hydro-met data for MIKE 11 and NAM flow simulations with water-level RMSE around 1.55 m.",
    kicker: "Professional and Research",
  },
  {
    company: "Ho Chi Minh University of Technology",
    title: "Research Volunteer",
    meta: "HCMC, Vietnam (on-site) / May 2025 to Aug 2025",
    teaser: "Radar nowcasting research with ConvLSTM and Axial Attention.",
    copy: "Collaborated on radar nowcasting research using deep learning and Axial Attention, reproduced a ConvLSTM in PyTorch for sequence-to-one CAPPI reflectivity prediction, and improved MAE through preprocessing ablation studies and stronger training validation loops.",
    kicker: "Professional and Research",
  },
  {
    company: "UMASS CICS PLASMA Lab",
    title: "Undergraduate Research Volunteer",
    meta: "Amherst, MA / September 2025 to Present",
    teaser: "Type inference and static analysis for Python safety.",
    copy: "Contributed to RightTyper, a Python type inference and static analysis tool, by implementing inference logic across core modules and validating performance against tools such as mypy and MonkeyType.",
    kicker: "Professional and Research",
  },
  {
    company: "UMASS CICS ml4ed Lab",
    title: "Undergraduate Research Volunteer",
    meta: "Amherst, MA / September 2025 to Present",
    teaser: "RAG-based academic advising chatbot over university data.",
    copy: "Developed an AI-powered advising chatbot using RAG to help students navigate degree requirements and academic policies, integrating course prerequisites and roadmaps into a searchable vector database for retrieval.",
    kicker: "Professional and Research",
  },
];

const leadership = [
  {
    company: "MassAI",
    title: "Project Lead / Events Coordinator",
    meta: "Amherst, MA / January 2025 to Present",
    teaser: "Led a 6-member team on sea level prediction for flood-prone communities.",
    copy: "Led a 6-member team to deliver a sea rising level prediction model inspired by direct observations of high-tide flooding in Vietnam, achieving about 24 ms inference latency and 2.3 percent RMSE improvement over polynomial baselines.",
    kicker: "Leadership",
  },
  {
    company: "League of Coders",
    title: "Vice President",
    meta: "Vietnam / Student-led non-profit work",
    teaser: "Community technology education and a self-funded water monitoring system.",
    copy: "Self-funded and organized a summer camp for underprivileged children and implemented a water monitoring system for the community.",
    kicker: "Leadership",
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

function renderProjectPreview(project) {
  const previewMap = {
    incident: `
      <div class="cover-surface preview-shell preview-incident-ui">
        <div class="preview-topline">
          <span class="preview-pill">80.8% less triage noise</span>
          <span class="preview-pill preview-pill-muted">100% top-2</span>
        </div>
        <div class="preview-bar-stack">
          <div class="preview-bar-row"><span>api</span><i><b style="width: 82%"></b></i></div>
          <div class="preview-bar-row"><span>queue</span><i><b style="width: 58%"></b></i></div>
          <div class="preview-bar-row"><span>deploy</span><i><b style="width: 70%"></b></i></div>
        </div>
        <div class="preview-node-map">
          <span class="preview-node preview-node-hot">api</span>
          <span class="preview-node">auth</span>
          <span class="preview-node">worker</span>
          <span class="preview-node preview-node-dim">db</span>
        </div>
      </div>
    `,
    anomaly: `
      <div class="cover-surface preview-shell preview-anomaly-ui">
        <div class="preview-topline">
          <span class="preview-pill">live sensor feed</span>
          <span class="preview-pill preview-pill-muted">0.81 ms p50</span>
        </div>
        <div class="preview-wave">
          <span style="height: 28%"></span>
          <span style="height: 42%"></span>
          <span style="height: 36%"></span>
          <span style="height: 58%"></span>
          <span style="height: 72%"></span>
          <span style="height: 44%"></span>
          <span style="height: 84%"></span>
          <span style="height: 38%"></span>
        </div>
        <div class="preview-alert-list">
          <div class="preview-alert"><span>Turbidity spike</span><strong>SHAP +0.42</strong></div>
          <div class="preview-alert"><span>pH drift</span><strong>watch</strong></div>
        </div>
      </div>
    `,
    control: `
      <div class="cover-surface preview-shell preview-control-ui">
        <div class="preview-topline">
          <span class="preview-pill">SLO-aware dispatch</span>
          <span class="preview-pill preview-pill-muted">289.8 ms p95</span>
        </div>
        <div class="preview-lanes">
          <div class="preview-lane"><span>router</span><i><b style="width: 76%"></b></i></div>
          <div class="preview-lane"><span>queue</span><i><b style="width: 54%"></b></i></div>
          <div class="preview-lane"><span>fallback</span><i><b style="width: 32%"></b></i></div>
        </div>
        <div class="preview-model-grid">
          <span>gpt-small</span>
          <span>reranker</span>
          <span>fallback</span>
        </div>
      </div>
    `,
    cloud: `
      <div class="cover-surface preview-shell preview-cloud-ui">
        <div class="preview-topline">
          <span class="preview-pill">13.5% cost down</span>
          <span class="preview-pill preview-pill-muted">p95 < 1 ms</span>
        </div>
        <div class="preview-cluster-grid">
          <div class="preview-cluster-card"><span>a</span><i><b style="width: 62%"></b></i></div>
          <div class="preview-cluster-card"><span>b</span><i><b style="width: 48%"></b></i></div>
          <div class="preview-cluster-card"><span>c</span><i><b style="width: 71%"></b></i></div>
        </div>
        <div class="preview-rollout-steps">
          <span class="preview-step preview-step-active">forecast</span>
          <span class="preview-step">plan</span>
          <span class="preview-step">canary</span>
          <span class="preview-step">apply</span>
        </div>
      </div>
    `,
    study: `
      <div class="cover-surface preview-shell preview-study-ui">
        <div class="preview-topline">
          <span class="preview-pill">62.9% fewer misses</span>
          <span class="preview-pill preview-pill-muted">RL replan</span>
        </div>
        <div class="preview-calendar-grid">
          <div class="preview-day"><span>M</span><i class="preview-block block-a"></i><i class="preview-block block-b"></i></div>
          <div class="preview-day"><span>T</span><i class="preview-block block-b"></i></div>
          <div class="preview-day"><span>W</span><i class="preview-block block-a"></i><i class="preview-block block-c"></i></div>
          <div class="preview-day"><span>T</span><i class="preview-block block-c"></i></div>
          <div class="preview-day"><span>F</span><i class="preview-block block-a"></i><i class="preview-block block-b"></i></div>
        </div>
        <div class="preview-study-footer">
          <span>sleep protected</span>
          <strong>89.7% blocks preserved</strong>
        </div>
      </div>
    `,
  };

  return previewMap[project.previewType] || "";
}

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
  container.innerHTML = featuredProjects
    .map(
      (project) => `
        <article class="project-item reveal">
          <a class="project-cover ${project.coverClass}" href="${project.href}" target="_blank" rel="noreferrer" aria-label="View ${project.name} on GitHub">
            <div class="cover-top">
              <span class="cover-chip">${project.coverLabel}</span>
              <span class="cover-year">${project.year}</span>
            </div>
            ${renderProjectPreview(project)}
            <div class="cover-bottom">
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

function renderCompactProjects() {
  const container = document.getElementById("compact-project-grid");
  container.innerHTML = additionalProjects
    .map(
      (project) => `
        <article class="compact-project reveal">
          <div class="compact-project-meta">
            <p class="project-type">${project.type}</p>
            <p class="project-year">${project.year}</p>
          </div>
          <h3 class="compact-project-title">${project.name}</h3>
          <p class="compact-project-summary">${project.summary}</p>
          <p class="compact-project-stack">${project.stack}</p>
          <a class="text-link" href="${project.href}" target="_blank" rel="noreferrer">View GitHub</a>
        </article>
      `
    )
    .join("");
}

function openDetailModal(item) {
  const modal = document.getElementById("detail-modal");
  document.getElementById("detail-kicker").textContent = item.kicker;
  document.getElementById("detail-title").textContent = `${item.company} / ${item.title}`;
  document.getElementById("detail-meta").textContent = item.meta;
  document.getElementById("detail-copy").textContent = item.copy;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeDetailModal() {
  const modal = document.getElementById("detail-modal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderExperienceCards(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items
    .map(
      (item, index) => `
        <button class="experience-card reveal" type="button" data-source="${containerId}" data-index="${index}">
          <div class="experience-card-top">
            <p class="experience-card-company">${item.company}</p>
            <span class="experience-card-arrow">Open</span>
          </div>
          <p class="experience-card-title">${item.title}</p>
          <p class="experience-card-meta">${item.meta}</p>
          <p class="experience-card-teaser">${item.teaser}</p>
        </button>
      `
    )
    .join("");

  container.querySelectorAll(".experience-card").forEach((card) => {
    card.addEventListener("click", () => {
      const source = card.dataset.source;
      const index = Number(card.dataset.index);
      const collection = source === "leadership-list" ? leadership : experiences;
      openDetailModal(collection[index]);
    });
  });
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

function attachModalControls() {
  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeDetailModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDetailModal();
    }
  });
}

renderLinks();
renderEducation();
renderProjects();
renderCompactProjects();
renderExperienceCards("experience-list", experiences);
renderExperienceCards("leadership-list", leadership);
renderSkills();
attachReveal();
attachModalControls();