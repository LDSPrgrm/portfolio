<script setup>
const aiProjects = [
  {
    title: "AlgoVision",
    role: "Multimodal AI Pipeline",
    desc: "LLM orchestration pipeline converting text to animated videos with Manim. Features multimodal chatbot for real-time interaction.",
    tags: ["Python", "LLM Agents", "Manim", "Streamlit"],
    icon: "mdi-robot-excited-outline",
    color: "primary",
  },
  {
    title: "CycloSync",
    role: "Real-time IoT Telemetry",
    desc: "Real-time telemetry platform with Google Gemini integration for context-aware coaching. WebSocket-first architecture.",
    tags: ["Vue.js", "WebSockets", "Gemini API", "IoT"],
    icon: "mdi-lightning-bolt",
    color: "deep-purple-accent-3",
  },
  {
    title: "LiveSubs",
    role: "Low-Latency Audio Stream",
    desc: "Low-latency STT pipeline for JP-EN translation. Uses WASAPI loopback and custom hallucination guardrails.",
    tags: ["Python", "WASAPI", "Streaming ASR", "Real-time"],
    icon: "mdi-waveform",
    color: "teal-accent-4",
  },
];

const sweProjects = [
  {
    title: "SakAI",
    role: "Real-time Ride-Hailing Platform",
    desc: "Modern, scalable ride-hailing app with real-time geospatial matching, live location tracking, and an admin dashboard. Built with a robust microservices-ready architecture.",
    tags: ["Flutter", "Go", "PostgreSQL", "WebSockets"],
    icon: "mdi-car-connected",
    color: "amber-darken-3",
  },
  {
    title: "Errandlify",
    role: "On-Demand Errand Services",
    desc: "A robust mobile application designed for on-demand errand services, leveraging Supabase for backend-as-a-service and real-time interactive mapping with OpenStreetMap.",
    tags: ["Flutter", "Supabase", "Riverpod", "Firebase"],
    icon: "mdi-truck-delivery",
    color: "blue-darken-2",
  },
  {
    title: "Food-Mate",
    role: "Distributed Ordering System",
    desc: "Centralized ordering system with REST API syncing for mobile/web clients and real-time inventory management.",
    tags: ["PHP", "REST API", "SQL Optimization", "Admin Panel"],
    icon: "mdi-food-variant",
    color: "deep-orange-accent-3",
  },
];
</script>

<template>
  <v-container class="py-16">
    <div class="text-center mb-16">
      <h2 class="section-header mb-4">
        <span class="grand-gradient-text">Featured Work</span>
      </h2>
      <p class="section-subtitle">
        A collection of tools crafted with precision. Grouped by their core
        technical focus.
      </p>
    </div>

    <!-- AI Group -->
    <div class="mb-16">
      <div class="d-flex align-center mb-8 px-2">
        <div class="icon-box bg-red-lighten-5 text-primary mr-4 rounded-xl">
          <v-icon size="32">mdi-brain</v-icon>
        </div>
        <h3 class="text-h4 font-weight-bold text-secondary">
          AI & Machine Learning
        </h3>
      </div>

      <v-row>
        <v-col v-for="(project, i) in aiProjects" :key="i" cols="12" md="4">
          <v-card
            class="ultra-glass h-100 d-flex flex-column pa-6 project-card overflow-hidden"
            elevation="0"
          >
            <div
              class="card-glow"
              :style="`background: ${project.color}`"
            ></div>

            <!-- Watermark Icon -->
            <v-icon class="watermark-icon" :color="project.color" size="160">{{
              project.icon
            }}</v-icon>

            <!-- Header -->
            <div class="relative z-10 mb-6">
              <div class="d-flex justify-space-between align-start mb-4">
                <div
                  class="icon-box"
                  :class="`bg-${project.color}-lighten-5 text-${project.color}`"
                >
                  <v-icon size="28">{{ project.icon }}</v-icon>
                </div>
                <v-chip
                  size="small"
                  class="font-weight-bold text-uppercase"
                  :color="project.color"
                  variant="tonal"
                  style="letter-spacing: 0.5px; font-size: 0.7rem"
                >
                  {{ project.role }}
                </v-chip>
              </div>

              <h4
                class="text-h4 font-weight-black text-secondary mb-1"
                style="line-height: 1.1"
              >
                {{ project.title }}
              </h4>
            </div>

            <!-- Description -->
            <v-card-text class="pt-0 relative z-10 px-0">
              <p
                class="text-body-1 text-secondary mb-6 opacity-90"
                style="line-height: 1.6; min-height: 4.8em"
              >
                {{ project.desc }}
              </p>
              <div class="d-flex flex-wrap gap-2">
                <v-chip
                  v-for="tag in project.tags"
                  :key="tag"
                  size="small"
                  variant="outlined"
                  :color="project.color"
                  class="font-weight-bold bg-white"
                  style="border-color: currentColor; opacity: 0.9"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </v-card-text>

            <!-- View Project button removed -->
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- SWE Group -->
    <div>
      <div class="d-flex align-center mb-8 px-2">
        <div
          class="icon-box bg-blue-lighten-5 text-blue-darken-2 mr-4 rounded-xl"
        >
          <v-icon size="32">mdi-monitor-dashboard</v-icon>
        </div>
        <h3 class="text-h4 font-weight-bold text-secondary">
          Software Engineering
        </h3>
      </div>

      <v-row>
        <v-col v-for="(project, i) in sweProjects" :key="i" cols="12" md="4">
          <v-card
            class="ultra-glass h-100 d-flex flex-column pa-6 project-card overflow-hidden"
            elevation="0"
          >
            <div
              class="card-glow"
              :style="`background: ${project.color}`"
            ></div>

            <!-- Watermark Icon -->
            <v-icon class="watermark-icon" :color="project.color" size="160">{{
              project.icon
            }}</v-icon>

            <!-- Header -->
            <div class="relative z-10 mb-6">
              <div class="d-flex justify-space-between align-start mb-4">
                <div
                  class="icon-box"
                  :class="`bg-${project.color}-lighten-5 text-${project.color}`"
                >
                  <v-icon size="28">{{ project.icon }}</v-icon>
                </div>
                <v-chip
                  size="small"
                  class="font-weight-bold text-uppercase"
                  :color="project.color"
                  variant="tonal"
                  style="letter-spacing: 0.5px; font-size: 0.7rem"
                >
                  {{ project.role }}
                </v-chip>
              </div>

              <h4
                class="text-h4 font-weight-black text-secondary mb-1"
                style="line-height: 1.1"
              >
                {{ project.title }}
              </h4>
            </div>

            <!-- Description -->
            <v-card-text class="pt-0 relative z-10 px-0">
              <p
                class="text-body-1 text-secondary mb-6 opacity-90"
                style="line-height: 1.6; min-height: 4.8em"
              >
                {{ project.desc }}
              </p>
              <div class="d-flex flex-wrap gap-2">
                <v-chip
                  v-for="tag in project.tags"
                  :key="tag"
                  size="small"
                  variant="outlined"
                  :color="project.color"
                  class="font-weight-bold bg-white"
                  style="border-color: currentColor; opacity: 0.9"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </v-card-text>

            <!-- View Project button removed -->
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.gap-2 {
  gap: 8px;
}

/* Premium Card Styles */
.project-card {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.project-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 24px 32px -8px rgba(0, 0, 0, 0.08);
}

/* Watermark Icon */
.watermark-icon {
  position: absolute;
  bottom: -20px;
  right: -20px;
  opacity: 0.06;
  transform: rotate(-15deg);
  transition: all 0.5s ease;
  pointer-events: none;
  z-index: 0;
}

.project-card:hover .watermark-icon {
  transform: rotate(0deg) scale(1.1);
  opacity: 0.1;
  bottom: -10px;
  right: -10px;
}

/* Subtle Top Glow on Hover */
.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  transform: scaleX(0);
  transition: transform 0.4s ease;
  transform-origin: left;
}

.project-card:hover .card-glow {
  transform: scaleX(1);
}

.icon-box {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.project-card:hover .icon-box {
  transform: scale(1.1);
}

.hover-arrow .v-icon {
  transition: transform 0.2s;
}
.hover-arrow:hover .v-icon {
  transform: translateX(6px);
}
</style>
