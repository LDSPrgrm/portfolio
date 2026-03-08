<script setup>
const aiStack = [
  { name: "Python", icon: "mdi-language-python", color: "#3776AB" },
  { name: "LLM Orchestrator", icon: "mdi-brain", color: "#FF4B4B" },
  { name: "RAG Pipelines", icon: "mdi-database-search", color: "#E11D48" },
  {
    name: "Prompt Engineering",
    icon: "mdi-text-box-edit-outline",
    color: "#EE4C2C",
  },
];

const backendStack = [
  { name: "Go", icon: "mdi-language-go", color: "#00ADD8" },
  { name: "FastAPI", icon: "mdi-api", color: "#009688" },
  { name: "PostgreSQL", icon: "mdi-database", color: "#336791" },
  { name: "Node.js", icon: "mdi-nodejs", color: "#339933" },
];

const devopsStack = [
  { name: "Docker", icon: "mdi-docker", color: "#2496ED" },
  { name: "Kubernetes", icon: "mdi-kubernetes", color: "#326CE5" },
  { name: "CI/CD", icon: "mdi-github", color: "#2088FF" },
  { name: "Playwright", icon: "mdi-test-tube", color: "#2EAD33" },
  { name: "Appium", icon: "mdi-cellphone-check", color: "#9B59B6" },
];

const frontendStack = [
  { name: "Flutter", icon: "mdi-cellphone-link", color: "#02569B" },
  { name: "Vue.js", icon: "mdi-vuejs", color: "#4FC08D" },
  { name: "Nuxt.js", icon: "mdi-nuxt", color: "#00DC82" },
  { name: "React", icon: "mdi-react", color: "#01579B" },
];
</script>

<template>
  <v-container class="py-16">
    <div class="text-center mb-14 fade-up">
      <h2 class="section-header mb-4">
        <span class="text-secondary">Technology </span>
        <span
          class="grand-gradient-text"
          style="
            background: linear-gradient(135deg, #00d4b1 0%, #00e5ff 100%);
            -webkit-background-clip: text;
            color: transparent;
          "
          >Arsenal</span
        >
      </h2>
      <p class="section-subtitle">
        Purpose-built tools for full-stack, real-time, and intelligent systems.
      </p>
    </div>

    <!-- Bento Grid -->
    <v-row class="bento-grid">
      <!-- AI & ML (Wide) -->
      <v-col cols="12" md="8" class="bento-item">
        <v-card
          class="ultra-glass h-100 pa-7 pa-md-8 rounded-xl relative overflow-hidden bento-card fade-up"
          elevation="0"
        >
          <div
            class="bento-bg-glow"
            style="background: rgba(255, 75, 75, 0.12); top: -20%; right: -10%"
          ></div>
          <div class="relative" style="z-index: 2">
            <div class="d-flex flex-column h-100">
              <h3
                class="text-h4 font-weight-black text-secondary mb-2 font-display"
              >
                AI &amp; Data
              </h3>
              <p class="text-body-1 mb-8" style="color: var(--secondary-dim)">
                Pipelines, Agents, and Orchestration.
              </p>

              <v-row>
                <v-col
                  v-for="tech in aiStack"
                  :key="tech.name"
                  cols="6"
                  sm="3"
                  class="text-center"
                >
                  <div
                    class="tech-icon mx-auto mb-3"
                    :style="{ color: tech.color }"
                  >
                    <v-icon size="40">{{ tech.icon }}</v-icon>
                  </div>
                  <div class="text-body-2 font-weight-bold text-secondary">
                    {{ tech.name }}
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- Real-Time (Narrow) -->
      <v-col cols="12" md="4" class="bento-item">
        <v-card
          class="ultra-glass h-100 pa-7 pa-md-8 rounded-xl relative overflow-hidden bento-card fade-up stagger-2"
          elevation="0"
        >
          <div
            class="bento-bg-glow"
            style="
              background: rgba(108, 92, 231, 0.12);
              bottom: -20%;
              right: -20%;
            "
          ></div>
          <div
            class="relative d-flex flex-column h-100 justify-space-between"
            style="z-index: 2"
          >
            <div>
              <h3
                class="text-h5 font-weight-black text-secondary mb-2 font-display"
              >
                DevOps & QA
              </h3>
              <p class="text-body-2 mb-6" style="color: var(--secondary-dim)">
                Cloud-native & testing frameworks.
              </p>
            </div>

            <div class="d-flex flex-wrap gap-2">
              <v-chip
                v-for="tech in devopsStack"
                :key="tech.name"
                size="small"
                variant="outlined"
                :color="tech.color"
                class="font-weight-bold rt-chip"
              >
                <v-icon start size="14">{{ tech.icon }}</v-icon>
                {{ tech.name }}
              </v-chip>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- Backend (Half) -->
      <v-col cols="12" md="6" class="bento-item">
        <v-card
          class="ultra-glass h-100 pa-7 pa-md-8 rounded-xl relative overflow-hidden bento-card fade-up stagger-3"
          elevation="0"
        >
          <div
            class="bento-bg-glow"
            style="background: rgba(0, 212, 177, 0.08); top: 50%; left: -20%"
          ></div>
          <div class="relative d-flex flex-column h-100" style="z-index: 2">
            <div class="d-flex justify-space-between align-center mb-6">
              <div>
                <h3
                  class="text-h4 font-weight-black text-secondary mb-1 font-display"
                >
                  Backend
                </h3>
                <p class="text-body-1" style="color: var(--secondary-dim)">
                  Scalable Systems &amp; DBs.
                </p>
              </div>
              <v-icon size="40" style="color: #00d4b1; opacity: 0.25"
                >mdi-server</v-icon
              >
            </div>

            <v-row class="mt-auto">
              <v-col
                v-for="tech in backendStack"
                :key="tech.name"
                cols="3"
                class="text-center"
              >
                <div
                  class="tech-icon tech-icon-sm mx-auto mb-2"
                  :style="{ color: tech.color }"
                >
                  <v-icon size="32">{{ tech.icon }}</v-icon>
                </div>
                <div
                  class="text-caption font-weight-bold text-secondary"
                  style="font-size: 0.7rem !important"
                >
                  {{ tech.name }}
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>

      <!-- Frontend (Half) -->
      <v-col cols="12" md="6" class="bento-item">
        <v-card
          class="ultra-glass h-100 pa-7 pa-md-8 rounded-xl relative overflow-hidden bento-card fade-up stagger-4"
          elevation="0"
        >
          <div
            class="bento-bg-glow"
            style="
              background: rgba(255, 143, 107, 0.08);
              bottom: -30%;
              left: 30%;
            "
          ></div>
          <div class="relative d-flex flex-column h-100" style="z-index: 2">
            <div class="d-flex justify-space-between align-center mb-6">
              <div>
                <h3
                  class="text-h4 font-weight-black text-secondary mb-1 font-display"
                >
                  Frontend
                </h3>
                <p class="text-body-1" style="color: var(--secondary-dim)">
                  Cross-platform &amp; Web.
                </p>
              </div>
              <v-icon size="40" style="color: #ff8f6b; opacity: 0.25"
                >mdi-cellphone-link</v-icon
              >
            </div>

            <v-row class="mt-auto">
              <v-col
                v-for="tech in frontendStack"
                :key="tech.name"
                cols="3"
                class="text-center"
              >
                <div
                  class="tech-icon tech-icon-sm mx-auto mb-2"
                  :style="{ color: tech.color }"
                >
                  <v-icon size="32">{{ tech.icon }}</v-icon>
                </div>
                <div
                  class="text-caption font-weight-bold text-secondary"
                  style="font-size: 0.7rem !important"
                >
                  {{ tech.name }}
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* ─── Bento Grid ────────────────────────────────────────── */
.bento-grid {
  margin: -8px;
}

.bento-item {
  padding: 8px;
}

.bento-card {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.bento-card:hover {
  transform: translateY(-4px) scale(1.005);
  border-color: rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5) !important;
}

/* ─── Background Glow ───────────────────────────────────── */
.bento-bg-glow {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(70px);
  z-index: 0;
  pointer-events: none;
  transition: all 0.6s ease;
}

.bento-card:hover .bento-bg-glow {
  transform: scale(1.3);
  filter: blur(50px);
}

/* ─── Tech Icons ────────────────────────────────────────── */
.tech-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  transition: all 0.35s ease;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.tech-icon-sm {
  width: 52px;
  height: 52px;
  border-radius: 14px;
}

.bento-card:hover .tech-icon {
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

/* ─── RT Chips ──────────────────────────────────────────── */
.rt-chip {
  border-color: currentColor !important;
  transition: all 0.25s ease;
  font-size: 0.72rem !important;
}

.rt-chip:hover {
  box-shadow: 0 0 10px currentColor;
}

@media (max-width: 599px) {
  .tech-icon {
    width: 48px;
    height: 48px;
  }
  .tech-icon-sm {
    width: 44px;
    height: 44px;
  }
}
</style>
