const siteConfig = {
  githubProfile: "https://github.com/danglewaee",
  linkedinProfile: "https://www.linkedin.com/in/dang-le-121abb2b4/",
  websiteUrl: "https://personal-website-bal2qm9cv-danglewaees-projects.vercel.app/",
};

const heroLinks = [
  { label: "GitHub", href: siteConfig.githubProfile, icon: "github", value: "github.com/danglewaee" },
  { label: "LinkedIn", href: siteConfig.linkedinProfile, icon: "linkedin", value: "linkedin.com/in/dang-le-121abb2b4" },
  { label: "Email", href: "mailto:dangle@umass.edu", icon: "mail", value: "dangle@umass.edu" },
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
    name: "Coastal Flood Risk",
    type: "Flood Risk System",
    year: "2025",
    summary: "Brings realtime water levels, short-term forecasts, and flood context into one operational view.",
    detail:
      "Built a situational-awareness layer that combines realtime water data, short-term forecasting, and map-based context so coastal risk can be seen earlier and more clearly.",
    stack: "Python, FastAPI, Leaflet, Forecasting",
    href: "https://github.com/danglewaee/Sea-Rising-Level",
    coverClass: "cover-sea",
    coverLabel: "Coastal risk",
    coverCaption: "Realtime water levels, short-term forecasting, and flood mapping in one view for faster coastal situational awareness.",
    imageSrc: "assets/project-covers/sea-rising-level.png",
    previewType: "sea",
  },
  {
    name: "AnomalyGuard",
    type: "Applied ML Platform",
    year: "2025",
    summary: "Helps under-resourced water teams catch abnormal changes earlier and act with more confidence.",
    detail:
      "Combined Isolation Forest and SHAP for pollutant alerts, then pushed search performance to 0.81 ms p50 during 5,000 concurrent upsert benchmarks.",
    stack: "FastAPI, React, PostgreSQL/TimescaleDB, Redis/Celery, Kafka, Docker Compose",
    href: siteConfig.githubProfile,
    coverClass: "cover-anomaly",
    coverLabel: "Operational ML",
    coverCaption: "Real-time telemetry monitoring with explainable anomaly alerts and live operational visibility.",
    imageSrc: "assets/project-covers/anomalyguard-cover.png",
    previewType: "anomaly",
  },
  {
    name: "Incident-Intelligence Platform",
    type: "Distributed Systems",
    year: "2025",
    summary: "Turns alert storms into a smaller, more actionable search space for on-call teams.",
    detail:
      "Built an incident correlation and ranking layer that reduced triage noise by 80.8 percent and found the root cause in the top two candidates across four failure scenarios.",
    stack: "FastAPI, Redis, PostgreSQL, Prometheus",
    href: siteConfig.githubProfile,
    coverClass: "cover-incident",
    coverLabel: "Systems observability",
    coverCaption: "Telemetry ingestion, anomaly detection, incident clustering, and root-cause ranking for distributed systems.",
    imageSrc: "assets/project-covers/incident-intelligence.png",
    previewType: "incident",
  },
  {
    name: "Cloud-Optimizer",
    type: "Infrastructure Optimization",
    year: "2025",
    summary: "Helps platform teams plan capacity changes before growth turns into waste or instability.",
    detail:
      "Reduced simulated infrastructure cost by 13.5 percent versus reactive autoscaling while keeping optimization fast enough for near-real-time planning.",
    stack: "Python, Kubernetes, MILP, TensorFlow",
    href: siteConfig.githubProfile,
    coverClass: "cover-cloud",
    coverLabel: "Cloud systems",
    coverCaption: "Forecasting, scheduling, and rollout planning for safer and cheaper infrastructure changes.",
    imageSrc: "assets/project-covers/cloud-optimizer.png",
    previewType: "cloud",
  },
  {
    name: "UMass-Study-Partner",
    type: "Planning Engine",
    year: "2026",
    summary: "Helps students turn overloaded weeks into plans they can actually follow.",
    detail:
      "Reduced missed deadlines by 62.9 percent versus an earliest-deadline-first baseline, then added stability-aware replanning and an RL selector for disruption recovery.",
    stack: "Python, FastAPI, JavaScript, HTML/CSS, Pydantic, Uvicorn, Reinforcement Learning",
    href: "https://github.com/danglewaee/balance_os",
    coverClass: "cover-study",
    coverLabel: "Scheduling plus RL",
    coverCaption: "Study scheduling, bounded replanning, and RL-guided strategy selection under changing workload conditions.",
    imageSrc: "assets/project-covers/umass-study-partner.png",
    previewType: "study",
  },
];

const additionalProjects = [
  {
    name: "Inference Control Plane",
    type: "Inference Infrastructure",
    year: "2025",
    summary: "Keeps self-hosted model serving stable when load, latency, and backend health keep changing.",
    detail:
      "Built a control layer for routing, fallback, and safe rollout across self-hosted LLM backends using runtime health and load signals.",
    stack: "FastAPI, HTTPX, Prometheus, Docker Compose",
    href: siteConfig.githubProfile,
    coverClass: "cover-control",
    coverLabel: "Inference infrastructure",
    coverCaption: "A control layer for routing, fallback, and safe model rollout across self-hosted LLM backends.",
    imageSrc: "assets/project-covers/inference-control-plane.png",
    previewType: "control",
  },
  {
    name: "Rag-memory-service",
    type: "RAG Backend Service",
    year: "2025",
    summary: "Persistent conversational memory service with hybrid retrieval, JWT APIs, Redis caching, and Prometheus metrics.",
    stack: "FastAPI, MongoDB, Redis",
    href: siteConfig.githubProfile,
  },
  {
    name: "Bitcoin trend",
    type: "Infrastructure Cost Tooling",
    year: "2025",
    summary: "Node telemetry and spend projection tool with an action engine for apply steps, rollback plans, and risk-aware execution guidance.",
    stack: "FastAPI, SQLite/PostgreSQL",
    href: siteConfig.githubProfile,
    imageSrc: "assets/project-covers/Bitcoin-trend.png",
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

const inferenceControlPlaneProject = additionalProjects.find(
  (project) => project.name === "Inference Control Plane"
);

const homeFeaturedProjects = [
  featuredProjects[0],
  featuredProjects[2],
  featuredProjects[3],
].filter(Boolean);
const caseStudyProjects = [
  featuredProjects[0],
  inferenceControlPlaneProject,
  featuredProjects[1],
  featuredProjects[2],
  featuredProjects[3],
  featuredProjects[4],
].filter(Boolean);
const archiveProjects = additionalProjects.filter(
  (project) => project.name !== "Inference Control Plane"
);

const caseStudyPages = {
  "Coastal Flood Risk": "project-coastal-flood-risk.html",
  "Inference Control Plane": "project-inference-control-plane.html",
  "Incident-Intelligence Platform": "project-incident.html",
  "AnomalyGuard": "project-anomalyguard.html",
  "Cloud-Optimizer": "project-cloud-optimizer.html",
  "UMass-Study-Partner": "project-study-partner.html",
};

const projectDetailLookup = {
  coastal: "Coastal Flood Risk",
  control: "Inference Control Plane",
  incident: "Incident-Intelligence Platform",
  anomalyguard: "AnomalyGuard",
  cloud: "Cloud-Optimizer",
  study: "UMass-Study-Partner",
};
const caseStudyContent = {
  "Coastal Flood Risk": {
    stats: ["Realtime station data", "Map-based risk context"],
    blocks: [
      {
        label: "Context",
        copy: "I built this project around a problem that feels very familiar to me: water risk changes by the hour, but the information needed to make sense of it is often scattered across different tools. One place shows realtime levels, another shows a forecast, and another shows a map. By the time someone pieces them together, the moment for early action is already getting smaller.",
      },
      {
        label: "Why it gets hard",
        copy: "Coastal and flood risk is hard because the signal moves faster than the workflow around it. Teams need a fast picture of what is happening now, what is likely to happen next, and where the first visible impact may show up, even when there is no time to run a heavier modeling workflow first.",
      },
      {
        label: "What most systems still miss",
        copy: "A lot of systems still treat data, forecast, and map context as separate views. That means operators can see pieces of the situation, but not the situation itself. The missing layer is situational awareness that is quick enough to support earlier judgment.",
      },
      {
        label: "What I built",
        copy: "I built a coastal flood risk dashboard that combines realtime water-level data, short-term forecasting, and map-based flood context in one place. The goal is not to replace a full forecasting stack, but to give someone an operational picture quickly enough to decide where to pay attention first.",
      },
      {
        label: "Why trust matters",
        copy: "The system earns trust by being legible and useful at the moment it is needed. Instead of asking someone to jump across feeds and maps, it puts the live signal, near-term forecast, and location context together so the first decision can happen faster and with less guesswork.",
      },
      {
        label: "Mission link",
        copy: "This project is close to the reason I started. It is the kind of system I want to keep building for forecasting work like my father's: something faster, clearer, and easier to act on before visible damage becomes the only thing left to trust.",
      },
    ],
  },
  "Inference Control Plane": {
    stats: ["289.8 ms p95", "90-request mixed-priority benchmark"],
    blocks: [
      {
        label: "Context",
        copy: "This project comes from a simple operational pain: serving a model is not the same thing as serving the right model on the right capacity at the right moment. Once traffic, latency, and backend health start moving at the same time, static routing stops being enough.",
      },
      {
        label: "Why it gets hard",
        copy: "In multi-model inference, one backend can get hot while another stays idle, the first request to a colder model can be slower, and retries can make overload even worse if the system is already under stress.",
      },
      {
        label: "What most systems still miss",
        copy: "Basic routing assumes every request looks the same and every healthy backend is equally good. That falls apart once request lengths vary, model health changes, and a bad rollout can affect the whole application at once.",
      },
      {
        label: "What I built",
        copy: "I built a control plane for self-hosted LLM stacks that routes requests using runtime health and load signals, falls back when a backend becomes unhealthy, and gives operators safer rollout behavior through canary and rollback support.",
      },
      {
        label: "Why teams can trust it",
        copy: "The value is not just smarter routing. It is that the system exposes the operating state teams need to trust under pressure: health, queue depth, latency, request history, fallback behavior, and observability through Prometheus and Grafana.",
      },
      {
        label: "Mission link",
        copy: "It carries the same question into AI infrastructure: how do we keep a system reliable enough to trust when conditions change underneath it and someone still needs an answer?",
      },
    ],
  },
  "Incident-Intelligence Platform": {
    stats: ["80.8% less triage noise", "100% top-2 over 4 failures"],
    blocks: [
      {
        label: "Context",
        copy: "Modern on-call engineers do not suffer from a lack of telemetry. They suffer from too much of it, arriving from the wrong places at the wrong time. In distributed systems, one upstream failure can look like many unrelated downstream incidents.",
      },
      {
        label: "Why it gets hard",
        copy: "When everything turns red at once, teams have to answer the hardest questions under pressure: is this one incident or many, which service is the cause, which ones are only victims, and what should be investigated first?",
      },
      {
        label: "What most systems still miss",
        copy: "Raw dashboards, logs, and alerts still leave responders doing the same cognitive work themselves. The missing layer is not more telemetry. It is structure: what belongs together, what is symptom versus cause, and what changed nearby.",
      },
      {
        label: "What I built",
        copy: "I built a platform that ingests multi-service telemetry, detects anomalies, clusters related failures into incidents, and ranks likely root causes using temporal precedence, anomaly intensity, service topology, and deployment proximity.",
      },
      {
        label: "Why teams can trust it",
        copy: "The system earns trust by shrinking the search space without pretending to be magic. It reduced triage noise by 80.8 percent in local benchmarking and surfaced the true root cause in the top two candidates across four failure scenarios.",
      },
      {
        label: "Mission link",
        copy: "It is the infrastructure version of the same question I keep returning to: how do we turn messy signals into decisions people can trust under pressure?",
      },
    ],
  },
  "AnomalyGuard": {
    stats: ["0.81 ms p50 search", "5,000 concurrent upserts"],
    blocks: [
      {
        label: "Who it helps",
        copy: "Built for rural water operators and local environmental offices in under-resourced areas, where limited staffing and infrastructure make close, continuous monitoring difficult.",
      },
      {
        label: "What makes the moment hard",
        copy: "The hardest moment is when a water source may be turning unsafe, but the team does not have enough people, time, or inspection coverage to know early and respond with confidence. Without continuous signals, it becomes easier to miss abnormal change until it is harder to ignore.",
      },
      {
        label: "What the system changes",
        copy: "The system turns telemetry into earlier, more interpretable alerts by combining live ingestion, anomaly detection, and explainability. Instead of a black-box warning, teams get a clearer signal about what deserves attention first and why it may matter.",
      },
      {
        label: "Why it earns trust",
        copy: "Trust matters here because these teams cannot afford to inspect everything manually. The system helps them use scarce staff and infrastructure more intelligently by surfacing earlier, interpretable signals that show where to investigate, what to prioritize, and when to escalate.",
      },
      {
        label: "Why it belongs here",
        copy: "This is one of the clearest expressions of my mission: building systems people can act on before visible damage is the only thing left to trust.",
      },
    ],
  },
  "Cloud-Optimizer": {
    stats: ["13.5% cost reduction", "p95 < 1 ms"],
    blocks: [
      {
        label: "Context",
        copy: "This project is shaped by the kind of launch problem Meta faced with Threads: a product can grow faster than infrastructure teams can safely react. In that moment, the problem is not just scaling. It is deciding how much to change, how early, and where the real risk sits.",
      },
      {
        label: "Why it gets hard",
        copy: "When growth arrives quickly, teams can neither wait until traffic is already spiking nor overreact by spraying excess capacity everywhere. The real difficulty is balancing speed, cost, and reliability at the same time.",
      },
      {
        label: "What most systems still miss",
        copy: "Autoscaling alone reacts after the fact. It does not tell operators what is likely to happen next, what the safest capacity plan is, or how to roll out that change without turning one bad decision into a larger reliability event.",
      },
      {
        label: "What I built",
        copy: "I built a decision layer for cloud infrastructure that combines workload forecasting, optimization, and rollout guardrails so teams can compare scenarios, choose a plan earlier, and scale more deliberately instead of reactively.",
      },
      {
        label: "Why teams can trust it",
        copy: "The system is built to be trusted before action, not after regret. It benchmarks against reactive baselines, tests decisions in shadow mode, and wraps changes in canary and rollback logic so optimization does not come at the cost of operational recklessness.",
      },
      {
        label: "Mission link",
        copy: "It carries the same mission into cloud infrastructure: turning uncertain tradeoffs into decisions teams can trust enough to act on.",
      },
    ],
  },
  "UMass-Study-Partner": {
    stats: ["62.9% fewer misses", "89.7% blocks preserved"],
    blocks: [
      {
        label: "Who it helps",
        copy: "Built for students whose weeks are packed with classes, deadlines, and overlapping tasks, but who still need a plan they can realistically follow.",
      },
      {
        label: "What makes the moment hard",
        copy: "The hard part is not knowing that the workload is heavy. It is knowing what to do first, how much to take on, and how to avoid building a schedule that collapses halfway through the week.",
      },
      {
        label: "What the system changes",
        copy: "The system turns messy task dumps into more realistic weekly plans by accounting for deadlines, workload, sleep, and recovery, then replanning when disruptions happen.",
      },
      {
        label: "Why it earns trust",
        copy: "Trust comes from the fact that it does not just produce an optimized schedule. It is designed to keep plans realistic, preserve as much of the schedule as possible when things change, and benchmark against simpler baselines instead of assuming the first plan is always good enough.",
      },
      {
        label: "Why it belongs here",
        copy: "It brings the same mission down to human scale: turning messy constraints into decisions people can trust enough to act on every day.",
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

function attachAboutEssayCards() {
  if (document.body.dataset.page !== "about") {
    return;
  }

  document.querySelectorAll(".about-essay-stack .essay-block").forEach((block) => {
    if (block.dataset.enhanced === "true") {
      return;
    }

    const kicker = block.querySelector(".section-kicker");
    const body = block.querySelector(".essay-body");
    const title = body?.querySelector(".essay-title");
    const copies = body ? Array.from(body.querySelectorAll(".essay-copy")) : [];

    if (!kicker || !body || !title || !copies.length) {
      return;
    }

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "essay-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = `
      <span class="section-kicker">${kicker.textContent}</span>
      <span class="essay-toggle-body">
        <span class="essay-title">${title.textContent}</span>
        <span class="story-card-arrow">Open</span>
      </span>
    `;

    const detail = document.createElement("div");
    detail.className = "essay-detail";
    detail.hidden = true;
    copies.forEach((paragraph) => detail.appendChild(paragraph));

    block.innerHTML = "";
    block.appendChild(toggle);
    block.appendChild(detail);
    block.dataset.enhanced = "true";

    toggle.addEventListener("click", () => {
      const isOpen = block.classList.toggle("is-open");
      detail.hidden = !isOpen;
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.querySelector(".story-card-arrow").textContent = isOpen ? "Close" : "Open";
    });
  });
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
    sea: `
      <div class="cover-surface preview-shell preview-sea-ui">
        <div class="preview-topline">
          <span class="preview-pill">forecasting trend</span>
          <span class="preview-pill preview-pill-muted">~24 ms inference</span>
        </div>
        <div class="preview-wave">
          <span style="height: 24%"></span>
          <span style="height: 32%"></span>
          <span style="height: 36%"></span>
          <span style="height: 44%"></span>
          <span style="height: 52%"></span>
          <span style="height: 64%"></span>
          <span style="height: 72%"></span>
          <span style="height: 82%"></span>
        </div>
        <div class="preview-alert-list">
          <div class="preview-alert"><span>Trend strength</span><strong>rising</strong></div>
          <div class="preview-alert"><span>Baseline</span><strong>poly -2.3% RMSE</strong></div>
        </div>
      </div>
    `,
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

function renderProjectCoverMedia(project) {
  const fallback = renderProjectPreview(project);

  if (!project.imageSrc) {
    return fallback;
  }

  return `
    <div class="cover-media">
      <img
        class="cover-image"
        src="${project.imageSrc}"
        alt="${project.name} interface preview"
        loading="lazy"
        onerror="this.parentElement.classList.add('image-failed')"
      />
      <div class="cover-fallback">
        ${fallback}
      </div>
    </div>
  `;
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
          <a class="project-cover ${project.coverClass}${project.imageSrc ? " has-image" : ""}" href="${link.href}"${link.attrs} aria-label="Open ${project.name}">
            <div class="cover-top">
              <span class="cover-chip">${project.coverLabel}</span>
              <span class="cover-year">${project.year}</span>
            </div>
            ${renderProjectCoverMedia(project)}
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

function renderProjectGallery(containerId, projects) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  const isHomeGallery = containerId === "home-project-gallery";

  container.innerHTML = projects
    .map((project, index) => {
      const link = getProjectLinkAttrs(project);
      const ctaLabel = caseStudyPages[project.name] ? "Open case study" : "View GitHub";
      const layoutClass = isHomeGallery
        ? "gallery-card-home"
        : "gallery-card-standard";
      if (isHomeGallery) {
        return `
          <a class="gallery-card ${layoutClass} reveal" href="${link.href}"${link.attrs}>
            <div class="project-cover gallery-card-cover gallery-card-cover-home ${project.coverClass}${project.imageSrc ? " has-image" : ""}">
              ${renderProjectCoverMedia(project)}
            </div>
            <div class="gallery-card-body gallery-card-body-home">
              <div class="gallery-cover-meta">
                <span class="gallery-card-type">${project.type}</span>
                <span class="gallery-card-year">${project.year}</span>
              </div>
              <h3 class="gallery-card-title">${project.name}</h3>
              <p class="gallery-card-summary">${project.summary}</p>
              <span class="gallery-card-cta">${ctaLabel}</span>
            </div>
          </a>
        `;
      }

      return `
        <a class="gallery-card ${layoutClass} reveal" href="${link.href}"${link.attrs}>
          <div class="project-cover gallery-card-cover ${project.coverClass}${project.imageSrc ? " has-image" : ""}">
            <div class="cover-top">
              <span class="cover-chip">${project.coverLabel}</span>
              <span class="cover-year">${project.year}</span>
            </div>
            ${renderProjectCoverMedia(project)}
            <div class="gallery-cover-copy">
              <div class="gallery-cover-meta">
                <span class="gallery-card-type">${project.type}</span>
                <span class="gallery-card-year">${project.year}</span>
              </div>
              <h3 class="gallery-card-title">${project.name}</h3>
            </div>
          </div>
          <div class="gallery-card-body">
            <div class="gallery-card-footer">
              <p class="gallery-card-summary">${project.summary}</p>
              <span class="gallery-card-cta">${ctaLabel}</span>
            </div>
          </div>
        </a>
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
  const project = [...featuredProjects, ...additionalProjects].find((entry) => entry.name === projectName);
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
        ${renderProjectCoverMedia(project)}
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
  renderProjectGallery("home-project-gallery", homeFeaturedProjects);
}

function renderAboutPage() {
  renderEducationCards("about-background-grid");
  attachAboutEssayCards();
}

function renderWorkPage() {
  renderProjectGallery("project-gallery", caseStudyProjects);
  renderArchiveProjectLinks("archive-project-links", archiveProjects);
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


