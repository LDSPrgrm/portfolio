<script setup>
const aiProjects = [
  {
    title: "AlgoVision",
    role: "Multimodal AI Pipeline",
    desc: "LLM orchestration pipeline converting text to animated videos with Manim. Features multimodal chatbot for real-time interaction and automated error correction.",
    tags: ["FastAPI", "Vue.js", "LLM Agents", "Manim"],
    icon: "mdi-robot-excited-outline",
    color: "#FF4B4B",
  },
  {
    title: "CycloSync",
    role: "Real-time IoT Telemetry",
    desc: "Real-time cycling analytics platform connecting to BLE devices. Transforms raw sensor streams into structured performance metrics with Google Gemini coaching.",
    tags: ["Vue.js", "WebSockets", "BLE", "IoT"],
    icon: "mdi-lightning-bolt",
    color: "#00D4B1",
  },
  {
    title: "LiveSubs",
    role: "Low-Latency Audio Stream",
    desc: "Low-latency STT pipeline for JP-EN translation. Uses WASAPI loopback, Whisper model, and custom hallucination guardrails for real-time sub generation.",
    tags: ["Python", "WASAPI", "Streaming ASR", "Real-time"],
    icon: "mdi-waveform",
    color: "#6C5CE7",
  },
];

const sweProjects = [
  {
    title: "SakAI",
    role: "Ride-Hailing Platform",
    desc: "Ride-hailing and delivery platform. Implemented real-time systems and subscription features.",
    tags: ["Flutter", "Go", "PostgreSQL", "WebSockets"],
    icon: "mdi-car-connected",
    color: "#FF8F6B",
  },
  {
    title: "Errandlify",
    role: "On-Demand Errand Services",
    desc: "Cash-on-delivery errand and delivery platform for small-town markets. Built multi-role marketplace handling add-on tasks and subscription capabilities.",
    tags: ["Flutter", "Supabase", "Firebase"],
    icon: "mdi-truck-delivery",
    color: "#00E5FF",
  },
  {
    title: "Tryk",
    role: "Backend Architecture",
    desc: "Architected backend services for ride matching and dispatch logic. Implemented event-driven real-time synchronization, reducing latency vs polling.",
    tags: ["Flutter", "Laravel", "PostgreSQL", "Event-Driven"],
    icon: "mdi-server-network",
    color: "#FF4B4B",
  },
];
</script>

<template>
  <v-container class="py-16">
    <div class="text-center mb-14 fade-up">
      <h2 class="section-header mb-4">
        <span class="text-secondary">Featured </span
        ><span class="grand-gradient-text">Projects</span>
      </h2>
      <p class="section-subtitle">
        Architectures engineered for scale, low-latency, and real-world impact.
      </p>
    </div>

    <!-- AI Group -->
    <div class="mb-14">
      <div
        class="d-flex justify-center justify-md-start align-center mb-8 px-2 fade-up"
      >
        <div
          class="icon-box mr-4 rounded-xl"
          style="
            background: rgba(255, 75, 75, 0.08);
            color: #ff4b4b;
            border: 1px solid rgba(255, 75, 75, 0.15);
          "
        >
          <v-icon size="28">mdi-brain</v-icon>
        </div>
        <h3 class="text-h4 font-weight-bold text-secondary font-display">
          AI & Machine Learning
        </h3>
      </div>

      <v-row>
        <v-col v-for="(project, i) in aiProjects" :key="i" cols="12" md="4">
          <v-card
            class="ultra-glass h-100 d-flex flex-column pa-6 project-card overflow-hidden fade-up"
            :class="'stagger-' + (i + 1)"
            elevation="0"
          >
            <!-- Hover Glow Bar -->
            <div
              class="card-top-bar"
              :style="{ background: project.color }"
            ></div>

            <!-- Watermark -->
            <v-icon
              class="watermark-icon"
              :style="{ color: project.color }"
              size="150"
              >{{ project.icon }}</v-icon
            >

            <!-- Header -->
            <div class="relative" style="z-index: 2">
              <div class="d-flex justify-space-between align-start mb-4">
                <div
                  class="icon-box"
                  :style="{
                    background: project.color + '12',
                    color: project.color,
                    border: '1px solid ' + project.color + '25',
                  }"
                >
                  <v-icon size="24">{{ project.icon }}</v-icon>
                </div>
                <v-chip
                  size="x-small"
                  class="font-weight-bold text-uppercase font-mono"
                  :color="project.color"
                  variant="tonal"
                  style="letter-spacing: 0.5px; font-size: 0.65rem"
                >
                  {{ project.role }}
                </v-chip>
              </div>

              <h4
                class="text-h4 font-weight-black text-secondary mb-2 font-display"
                style="line-height: 1.1"
              >
                {{ project.title }}
              </h4>
            </div>

            <!-- Description -->
            <v-card-text
              class="pt-0 px-0 flex-grow-1 relative"
              style="z-index: 2"
            >
              <p
                class="text-body-1 mb-6"
                style="line-height: 1.7; color: var(--secondary-dim)"
              >
                {{ project.desc }}
              </p>
              <div class="d-flex flex-wrap gap-2 mt-auto">
                <v-chip
                  v-for="tag in project.tags"
                  :key="tag"
                  size="small"
                  variant="outlined"
                  :color="project.color"
                  class="font-weight-bold tag-chip"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- SWE Group -->
    <div>
      <div
        class="d-flex justify-center justify-md-start align-center mb-8 px-2 fade-up"
      >
        <div
          class="icon-box mr-4 rounded-xl"
          style="
            background: rgba(0, 212, 177, 0.08);
            color: #00d4b1;
            border: 1px solid rgba(0, 212, 177, 0.15);
          "
        >
          <v-icon size="28">mdi-monitor-dashboard</v-icon>
        </div>
        <h3 class="text-h4 font-weight-bold text-secondary font-display">
          Software Engineering
        </h3>
      </div>

      <v-row>
        <v-col v-for="(project, i) in sweProjects" :key="i" cols="12" md="4">
          <v-card
            class="ultra-glass h-100 d-flex flex-column pa-6 project-card overflow-hidden fade-up"
            :class="'stagger-' + (i + 1)"
            elevation="0"
          >
            <!-- Hover Glow Bar -->
            <div
              class="card-top-bar"
              :style="{ background: project.color }"
            ></div>

            <!-- Watermark -->
            <v-icon
              class="watermark-icon"
              :style="{ color: project.color }"
              size="150"
              >{{ project.icon }}</v-icon
            >

            <!-- Header -->
            <div class="relative" style="z-index: 2">
              <div class="d-flex justify-space-between align-start mb-4">
                <div
                  class="icon-box"
                  :style="{
                    background: project.color + '12',
                    color: project.color,
                    border: '1px solid ' + project.color + '25',
                  }"
                >
                  <v-icon size="24">{{ project.icon }}</v-icon>
                </div>
                <v-chip
                  size="x-small"
                  class="font-weight-bold text-uppercase font-mono"
                  :color="project.color"
                  variant="tonal"
                  style="letter-spacing: 0.5px; font-size: 0.65rem"
                >
                  {{ project.role }}
                </v-chip>
              </div>

              <h4
                class="text-h4 font-weight-black text-secondary mb-2 font-display"
                style="line-height: 1.1"
              >
                {{ project.title }}
              </h4>
            </div>

            <!-- Description -->
            <v-card-text
              class="pt-0 px-0 flex-grow-1 relative"
              style="z-index: 2"
            >
              <p
                class="text-body-1 mb-6"
                style="line-height: 1.7; color: var(--secondary-dim)"
              >
                {{ project.desc }}
              </p>
              <div class="d-flex flex-wrap gap-2 mt-auto">
                <v-chip
                  v-for="tag in project.tags"
                  :key="tag"
                  size="small"
                  variant="outlined"
                  :color="project.color"
                  class="font-weight-bold tag-chip"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
/* ─── Project Card ──────────────────────────────────────── */
.project-card {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
}

/* ─── Top Glow Bar ──────────────────────────────────────── */
.card-top-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  transform: scaleX(0);
  transition: transform 0.5s ease;
  transform-origin: left;
  z-index: 3;
}

.project-card:hover .card-top-bar {
  transform: scaleX(1);
}

/* ─── Watermark Icon ────────────────────────────────────── */
.watermark-icon {
  position: absolute;
  bottom: -16px;
  right: -16px;
  opacity: 0.3;
  transform: rotate(-15deg);
  transition: all 0.6s ease;
  pointer-events: none;
  z-index: 0;
}

.project-card:hover .watermark-icon {
  transform: rotate(0deg) scale(1.08);
  opacity: 0.5;
}

/* ─── Tag Chips ─────────────────────────────────────────── */
.tag-chip {
  border-color: currentColor !important;
  opacity: 0.8;
  transition: all 0.25s ease;
  font-size: 0.72rem !important;
}

.tag-chip:hover {
  opacity: 1;
  box-shadow: 0 0 12px currentColor;
}
</style>
