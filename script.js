const siteConfig = {
  githubProfile: "https://github.com/danglewaee",
  linkedinProfile: "https://www.linkedin.com/in/dang-le-121abb2b4/",
  websiteUrl: "https://personal-website-bal2qm9cv-danglewaees-projects.vercel.app/",
};

const heroLinks = [
  { label: "GitHub", href: siteConfig.githubProfile, icon: "github", value: "github.com/danglewaee" },
  { label: "LinkedIn", href: siteConfig.linkedinProfile, icon: "linkedin", value: "linkedin.com/in/dang-le-121abb2b4" },
  { label: "Email", href: "mailto:dangle@umass.edu", icon: "mail", value: "dangle@umass.edu" },
  { label: "Phone", href: "tel:4134721116", icon: "phone", value: "(413) 472-1116" },
];

const iconMap = {
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.92c.85 0 1.71.12 2.51.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.47.11 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.58 5.07.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55c0-1.05-.8-1.95-1.91-1.95-1.1 0-1.91.9-1.91 1.95 0 1.04.8 1.9 1.89 1.9h.02c1.12 0 1.91-.86 1.91-1.9ZM20.44 12.74c0-3.46-1.85-5.07-4.33-5.07-2 0-2.89 1.12-3.39 1.9V8.5H9.34c.04.71 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.9-1.39 1.96-1.39 1.38 0 1.94 1.07 1.94 2.64V20h3.38v-7.26Z"/>
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.04-.25 6.3 5.1a1.04 1.04 0 0 0 1.32 0l6.3-5.1H5.04Zm13.46 1.29-5.56 4.5a2.54 2.54 0 0 1-3.18 0L4.2 7.79v9.46c0 .86.69 1.55 1.55 1.55h12.5c.86 0 1.55-.69 1.55-1.55V7.79Z"/>
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.31.56 3.57.56.55 0 1 .45 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5c.55 0 1 .45 1 1 0 1.26.19 2.45.56 3.57.12.35.03.75-.24 1.02l-2.2 2.2Z"/>
    </svg>
  `,
  profile: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2.25c-4.14 0-7.5 2.69-7.5 6v.75h15v-.75c0-3.31-3.36-6-7.5-6Z"/>
    </svg>
  `,
  grid: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"/>
    </svg>
  `,
  briefcase: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M9 4.5A2.5 2.5 0 0 1 11.5 2h1A2.5 2.5 0 0 1 15 4.5V6h3.75A2.25 2.25 0 0 1 21 8.25v9.5A2.25 2.25 0 0 1 18.75 20h-13.5A2.25 2.25 0 0 1 3 17.75v-9.5A2.25 2.25 0 0 1 5.25 6H9V4.5Zm1.5 0V6h3V4.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1Z"/>
    </svg>
  `,
  spark: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Zm-6.5 13 1 2.9L9.5 19l-2.9 1-1.1 3-1-3-2.9-1 2.9-1.1L5.5 15Zm13 0 1 2.9 2.9 1.1-2.9 1-1 3-1.1-3-2.9-1 2.9-1.1 1.1-2.9Z"/>
    </svg>
  `,
};

const education = [
  {
    label: "University",
    title: "University of Massachusetts Amherst",
    copy: "BS in Computer Science / Amherst, MA / Expected Graduation: Spring 2028\n\nHonors: Dean's List, Chancellor's Award, SASMO Bronze Medal",
  },
  {
    label: "Coursework",
    title: "Relevant coursework",
    items: [
      "Algorithms",
      "Data Structures",
      "Machine Learning",
      "Artificial Intelligence",
      "Object-Oriented Programming",
      "Stats and Reasoning",
      "Methodology Programming",
      "Computer Principles",
      "Computation",
    ],
  },
  {
    label: "Focus",
    title: "Current direction",
    copy: "Trustworthy AI systems for forecasting, planning, decision-support, and infrastructure people can actually rely on.",
  },
];

const storyIntro = {
  kicker: "About",
  title: "The longer version",
  meta: "Vietnam / forecasting / trust",
  copy:
    "AI opened the door. Purpose made me stay.\n\nGrowing up in Vietnam, I watched what fragile forecasts and fragile systems could do, especially through my father's work in meteorology. That question led me from river-basin data at ISTI to community work in An Giang, where I met children learning on the same old desktop computers that first pulled me toward computing myself.\n\nThe hardest lesson came early: detection is not prevention. If a system is going to help people act, it has to earn trust through data, rigor, and resilience.",
};

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

const caseStudyProjects = featuredProjects.slice(0, 2);
const archiveProjects = [...featuredProjects.slice(2), ...additionalProjects];

const caseStudyPages = {
  "Incident-Intelligence Platform": "project-incident.html",
  "AnomalyGuard": "project-anomalyguard.html",
};

const projectDetailLookup = {
  incident: "Incident-Intelligence Platform",
  anomalyguard: "AnomalyGuard",
};
const caseStudyContent = {
  "Incident-Intelligence Platform": {
    stats: ["80.8% less triage noise", "100% top-2 over 4 failures"],
    blocks: [
      {
        label: "Problem",
        copy: "Distributed telemetry can tell you something is wrong without showing what actually broke or what deserves attention first.",
      },
      {
        label: "System",
        copy: "I built event-driven ingestion, anomaly clustering, and dependency-aware ranking over temporal signals, service topology, and deployment context.",
      },
      {
        label: "Outcome",
        copy: "The system surfaced the true source within the top two candidates across 4 injected failures while cutting triage noise by 80.8 percent.",
      },
    ],
  },
  "AnomalyGuard": {
    stats: ["0.81 ms p50 search", "5,000 concurrent upserts"],
    blocks: [
      {
        label: "Problem",
        copy: "Water telemetry only matters if unusual conditions are caught early and explained clearly enough for someone to trust the alert.",
      },
      {
        label: "System",
        copy: "I combined FastAPI ingestion, TimescaleDB, Kafka, and an Isolation Forest plus SHAP pipeline to turn raw readings into explainable pollutant warnings.",
      },
      {
        label: "Outcome",
        copy: "The platform delivered live monitoring and alerting with sub-millisecond p50 search latency during a 5,000-upsert benchmark.",
      },
    ],
  },
};

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
    items: [
      { name: "Python", iconClass: "devicon-python-plain" },
      { name: "Java", iconClass: "devicon-java-plain" },
      { name: "C++", iconClass: "devicon-cplusplus-plain" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain" },
      { name: "C#", iconClass: "devicon-csharp-plain" },
      { name: "HTML5", iconClass: "devicon-html5-plain" },
      { name: "CSS3", iconClass: "devicon-css3-plain" },
    ],
  },
  {
    label: "Databases and Infra",
    items: [
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
      { name: "Redis", iconClass: "devicon-redis-plain" },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
      { name: "Kafka", iconClass: "devicon-apachekafka-original" },
      { name: "Neo4j", iconClass: "devicon-neo4j-plain" },
    ],
  },
  {
    label: "Frameworks and Tools",
    items: [
      { name: "FastAPI", iconClass: "devicon-fastapi-plain" },
      { name: "Flask", iconClass: "devicon-flask-original" },
      { name: "React", iconClass: "devicon-react-original" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain" },
      { name: "Docker", iconClass: "devicon-docker-plain" },
      { name: "Kubernetes", iconClass: "devicon-kubernetes-plain" },
      { name: "Git", iconClass: "devicon-git-plain" },
      { name: "REST API", short: "API" },
      { name: "PyTorch", iconClass: "devicon-pytorch-original" },
      { name: "TensorFlow", iconClass: "devicon-tensorflow-original" },
      { name: "NumPy", iconClass: "devicon-numpy-original" },
      { name: "Pandas", iconClass: "devicon-pandas-original" },
    ],
  },
];

function renderEducationCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.innerHTML = education
    .map((item) => {
      const content = item.items
        ? `
          <ul class="education-list">
            ${item.items.map((entry) => `<li>${entry}</li>`).join("")}
          </ul>
        `
        : `<p class="education-copy">${item.copy}</p>`;

      return `
        <article class="education-card reveal">
          <p class="education-label">${item.label}</p>
          <h3>${item.title}</h3>
          ${content}
        </article>
      `;
    })
    .join("");
}

function renderSkillGroups(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.innerHTML = skills
    .map(
      (group) => `
        <article class="skill-group reveal">
          <p class="skill-label">${group.label}</p>
          <div class="skill-logo-grid">
            ${group.items
              .map((item) => {
                const iconMarkup = item.iconClass
                  ? `<i class="skill-tile-icon ${item.iconClass} colored" aria-hidden="true"></i>`
                  : `<span class="skill-fallback" aria-hidden="true">${item.short || item.name.slice(0, 2)}</span>`;

                return `
                  <div class="skill-tile" aria-label="${item.name}">
                    <div class="skill-glyph">${iconMarkup}</div>
                    <span>${item.name}</span>
                  </div>
                `;
              })
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

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

function getProjectHref(project) {
  return caseStudyPages[project.name] || project.href;
}

function getProjectLinkAttrs(project) {
  const href = getProjectHref(project);
  const external = href.startsWith("http");
  return {
    href,
    attrs: external ? ' target="_blank" rel="noreferrer"' : "",
  };
}
function renderLinkSet(links, className, options = {}) {
  const currentPage = document.body.dataset.page || "home";
  return links
    .map((link) => {
      const external = link.href.startsWith("http") || link.href.startsWith("mailto:") || link.href.startsWith("tel:");
      const target = link.href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
      const activeClass = options.highlightCurrent && link.page === currentPage ? " is-active" : "";
      return `
        <a class="${className}${activeClass}" href="${link.href}"${target}>
          <span class="link-icon" aria-hidden="true">${iconMap[link.icon] || ""}</span>
          <span>${link.label}</span>
        </a>
      `;
    })
    .join("");
}

function setActiveNav() {
  const currentPage = document.body.dataset.page || "home";
  const effectivePage = currentPage === "project-detail" ? "work" : currentPage;
  document.querySelectorAll(".site-nav a[data-nav-page]").forEach((link) => {
    if (link.dataset.navPage === effectivePage) {
      link.classList.add("is-active");
    }
  });
}

function renderLinks() {
  const heroContainer = document.getElementById("hero-links");

  if (heroContainer) {
    heroContainer.innerHTML = renderLinkSet(heroLinks, "hero-link");
  }
}

function renderProjects(containerId, projects) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.innerHTML = projects
    .map((project) => {
      const link = getProjectLinkAttrs(project);
      const ctaLabel = caseStudyPages[project.name] ? "Open project" : "View GitHub";
      return `
        <article class="project-item reveal">
          <a class="project-cover ${project.coverClass}" href="${link.href}"${link.attrs} aria-label="Open ${project.name}">
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
              <a class="text-link" href="${link.href}"${link.attrs}>${ctaLabel}</a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderFeaturedProjectLinks(containerId, projects) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.innerHTML = projects
    .map((project, index) => {
      const link = getProjectLinkAttrs(project);
      return `
        <a class="featured-project-link reveal" href="${link.href}"${link.attrs}>
          <span class="featured-project-index">0${index + 1}</span>
          <span class="featured-project-copy">
            <span class="featured-project-title">${project.name}</span>
            <span class="featured-project-meta">${project.summary}</span>
            <span class="featured-project-submeta">${project.type} / ${project.year}</span>
          </span>
          <span class="featured-project-arrow">Open</span>
        </a>
      `;
    })
    .join("");
}

function renderArchiveProjectLinks(containerId, projects) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.innerHTML = projects
    .map((project) => {
      const link = getProjectLinkAttrs(project);
      const ctaLabel = caseStudyPages[project.name] ? "Open" : "GitHub";
      return `
        <a class="archive-project-link reveal" href="${link.href}"${link.attrs}>
          <span class="archive-project-title">${project.name}</span>
          <span class="archive-project-summary">${project.summary}</span>
          <span class="archive-project-meta">${project.type} / ${project.year}</span>
          <span class="archive-project-arrow">${ctaLabel}</span>
        </a>
      `;
    })
    .join("");
}



function renderExperienceCards(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

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

function openDetailModal(item) {
  const modal = document.getElementById("detail-modal");
  if (!modal) {
    return;
  }

  document.getElementById("detail-kicker").textContent = item.kicker;
  document.getElementById("detail-title").textContent = item.company ? `${item.company} / ${item.title}` : item.title;
  document.getElementById("detail-meta").textContent = item.meta || "";
  document.getElementById("detail-copy").textContent = item.copy;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeDetailModal() {
  const modal = document.getElementById("detail-modal");
  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function attachReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) {
    return;
  }

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

  revealElements.forEach((element) => observer.observe(element));
}

function attachModalControls() {
  if (!document.getElementById("detail-modal")) {
    return;
  }

  document.querySelectorAll("[data-detail-key='story-intro']").forEach((element) => {
    element.addEventListener("click", () => openDetailModal(storyIntro));
  });

  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeDetailModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDetailModal();
    }
  });
}


function renderProjectDetailPage() {
  const hero = document.getElementById("project-detail-hero");
  const artifact = document.getElementById("project-detail-artifact");
  const story = document.getElementById("project-detail-story");
  if (!hero || !artifact || !story) {
    return;
  }

  const projectKey = document.body.dataset.projectKey || "";
  const projectName = projectDetailLookup[projectKey];
  const project = featuredProjects.find((entry) => entry.name === projectName);
  if (!project) {
    return;
  }

  const caseStudy = caseStudyContent[project.name] || { stats: [], blocks: [] };

  hero.innerHTML = `
    <a class="story-trigger project-back-link" href="work.html">Back to projects</a>
    <div class="page-intro-grid project-detail-hero-grid">
      <div class="page-intro-copy">
        <p class="section-kicker">${project.type}</p>
        <h1>${project.name}</h1>
        <p class="subsection-copy page-intro-description">${project.summary}</p>
        <p class="project-detail-lede">${project.detail}</p>
      </div>
      <div class="project-detail-meta-grid">
        <article class="project-detail-meta-card">
          <p class="project-detail-meta-label">Year</p>
          <p class="project-detail-meta-value">${project.year}</p>
        </article>
        <article class="project-detail-meta-card">
          <p class="project-detail-meta-label">Focus</p>
          <p class="project-detail-meta-value">${project.type}</p>
        </article>
        <article class="project-detail-meta-card">
          <p class="project-detail-meta-label">Stack</p>
          <p class="project-detail-meta-value">${project.stack}</p>
        </article>
      </div>
    </div>
  `;

  artifact.innerHTML = `
    <div class="project-detail-visual reveal">
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
    </div>
  `;

  story.innerHTML = `
    <div class="project-detail-story-grid">
      <div class="case-study-stats">
        ${caseStudy.stats.map((stat) => `<span class="case-study-stat">${stat}</span>`).join("")}
      </div>
      <div class="case-study-grid">
        ${caseStudy.blocks
          .map(
            (block) => `
              <article class="case-study-block">
                <p class="case-study-label">${block.label}</p>
                <p class="case-study-text">${block.copy}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="project-links project-detail-links">
        <a class="text-link" href="${project.href}" target="_blank" rel="noreferrer">View GitHub</a>
        <a class="text-link" href="work.html">Back to projects</a>
      </div>
    </div>
  `;
}
function renderHomePage() {
  renderFeaturedProjectLinks("home-project-links", caseStudyProjects);
}

function renderAboutPage() {
  renderEducationCards("about-background-grid");
}

function renderWorkPage() {
  renderFeaturedProjectLinks("featured-project-links", caseStudyProjects);
  renderArchiveProjectLinks("archive-project-links", archiveProjects);
  renderSkillGroups("work-skills");
}

function renderExperiencePage() {
  renderExperienceCards("experience-list", experiences);
  renderExperienceCards("leadership-list", leadership);
}

function renderPage() {
  const page = document.body.dataset.page || "home";
  renderLinks();
  setActiveNav();

  switch (page) {
    case "about":
      renderAboutPage();
      break;
    case "work":
      renderWorkPage();
      break;
    case "experience":
      renderExperiencePage();
      break;
    case "project-detail":
      renderProjectDetailPage();
      break;
    default:
      renderHomePage();
      break;
  }

  attachModalControls();
  attachReveal();
}

renderPage();

