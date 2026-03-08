<script setup>
import { ref, onMounted } from "vue";

const socialLinks = [
  {
    icon: "mdi-github",
    url: "https://github.com/LDSPrgrm",
    label: "GitHub",
  },
  {
    icon: "mdi-linkedin",
    url: "http://www.linkedin.com/in/lawsubala",
    label: "LinkedIn",
  },
  {
    icon: "mdi-email",
    url: "mailto:ldsprgrm@gmail.com",
    label: "Email",
  },
];

const stats = [
  {
    value: "End-to-End Systems",
    label: "Full-Stack Core",
    icon: "mdi-server-network",
  },
  {
    value: "AI & Data Pipelines",
    label: "Intelligent Workflows",
    icon: "mdi-brain",
  },
  {
    value: "Cross-Platform Apps",
    label: "Mobile & Web",
    icon: "mdi-cellphone-link",
  },
];

const loaded = ref(false);

onMounted(() => {
  setTimeout(() => (loaded.value = true), 100);
});
</script>

<template>
  <v-container class="hero-section py-16 mt-8 position-relative" fluid>
    <v-row justify="center" align="center" class="text-center">
      <v-col cols="12" md="10" lg="8">
        <!-- Status Badge -->
        <div
          :class="['hero-badge', { 'hero-visible': loaded }]"
          class="d-inline-flex align-center mb-8 px-4 py-2 rounded-pill"
        >
          <div class="status-dot mr-2"></div>
          <span
            class="font-mono"
            style="font-size: 0.75rem; letter-spacing: 1.5px"
          >
            BUILDING AI & REAL-TIME SYSTEMS
          </span>
        </div>

        <!-- Headline -->
        <h1
          :class="['hero-title', { 'hero-visible': loaded }]"
          class="font-display mb-5"
          style="line-height: 1.05"
        >
          <span class="grand-gradient-text">Architecting</span><br />
          <span class="text-secondary">Intelligence</span>
        </h1>

        <!-- Subtitle -->
        <h2
          :class="['hero-subtitle', { 'hero-visible': loaded }]"
          class="text-subtitle-1 text-sm-h5 text-md-h4 font-weight-regular mb-10 font-display"
          style="color: var(--secondary-dim); line-height: 1.4"
        >
          Lawrence David Subala<br class="d-sm-none" />
          <span class="d-none d-sm-inline"> · </span>Full-Stack Software & AI
          Engineer
        </h2>

        <!-- Social Links -->
        <div
          :class="['hero-actions', { 'hero-visible': loaded }]"
          class="d-flex flex-wrap justify-center gap-3 mb-12"
        >
          <v-btn
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.url"
            target="_blank"
            variant="outlined"
            size="large"
            color="white"
            class="social-btn font-weight-bold px-6"
            rounded="lg"
            height="46"
          >
            <v-icon start size="20">{{ link.icon }}</v-icon>
            {{ link.label }}
          </v-btn>

          <v-btn
            href="/portfolio/resume.pdf"
            target="_blank"
            variant="flat"
            size="large"
            color="primary"
            class="social-btn font-weight-bold px-6"
            rounded="lg"
            height="46"
          >
            <v-icon start size="20">mdi-download</v-icon>
            Resume
          </v-btn>
        </div>

        <!-- Intro Card -->
        <v-card
          :class="['hero-card', { 'hero-visible': loaded }]"
          class="ultra-glass pa-6 pa-sm-8 pa-md-10 text-center mx-auto relative overflow-visible intro-card"
          max-width="780"
          rounded="xl"
        >
          <!-- Floating Badge -->
          <div class="floating-badge">
            <v-icon color="primary" size="28">mdi-brain</v-icon>
          </div>

          <h3
            class="text-h5 text-sm-h4 font-weight-bold text-secondary mb-5 mt-4 font-display"
          >
            Engineering Reality
          </h3>

          <p
            class="text-body-1 mb-8 mx-auto"
            style="
              max-width: 600px;
              line-height: 1.85;
              color: var(--secondary-dim);
            "
          >
            Software Engineer specializing in
            <span class="text-primary font-weight-bold"
              >AI-powered applications</span
            >,
            <span class="text-primary font-weight-bold"
              >real-time data pipelines</span
            >, and
            <span class="text-primary font-weight-bold"
              >full-stack architectures</span
            >. Experienced in designing end-to-end solutions, integrating
            models, and ensuring reliability through comprehensive
            <span class="text-primary font-weight-bold">Quality Assurance</span>
            and testing workflows.
          </p>

          <div
            class="d-flex justify-space-around flex-wrap gap-4 pt-6 stats-strip"
          >
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="stat-item text-center"
            >
              <v-icon
                class="mb-2"
                size="22"
                :style="'color: var(--accent-teal); opacity: 0.7'"
                >{{ stat.icon }}</v-icon
              >
              <div
                class="text-h6 text-sm-h5 font-weight-black text-secondary mb-1 font-display"
              >
                {{ stat.value }}
              </div>
              <div
                class="font-mono text-uppercase"
                style="
                  font-size: 0.65rem;
                  letter-spacing: 1.5px;
                  color: var(--accent-teal);
                "
              >
                {{ stat.label }}
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* ─── Staggered Entrance ────────────────────────────────── */
.hero-badge,
.hero-title,
.hero-subtitle,
.hero-actions,
.hero-card {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out;
}

.hero-badge.hero-visible {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.1s;
}
.hero-title.hero-visible {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.25s;
}
.hero-subtitle.hero-visible {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.4s;
}
.hero-actions.hero-visible {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.55s;
}
.hero-card.hero-visible {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.7s;
}

/* ─── Title Sizing ──────────────────────────────────────── */
.hero-title {
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
}

/* ─── Badge ─────────────────────────────────────────────── */
.hero-badge {
  background: rgba(255, 75, 75, 0.06);
  border: 1px solid rgba(255, 75, 75, 0.15);
  color: rgba(255, 255, 255, 0.7);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00d4b1;
  box-shadow: 0 0 8px #00d4b1;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.85);
  }
}

/* ─── Social Buttons ────────────────────────────────────── */
.social-btn {
  border-color: rgba(255, 255, 255, 0.12) !important;
  transition: all 0.3s ease;
  font-size: 0.85rem !important;
  letter-spacing: 0.01em;
}

.social-btn:hover {
  background: rgba(255, 255, 255, 0.06) !important;
  border-color: rgba(255, 255, 255, 0.25) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* ─── Intro Card ────────────────────────────────────────── */
.intro-card {
  border-top: 2px solid rgba(255, 75, 75, 0.4) !important;
}

.intro-card:hover {
  border-top-color: #ff4b4b !important;
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(255, 75, 75, 0.08) !important;
}

.floating-badge {
  position: absolute;
  top: -26px;
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0e0e0e;
  border: 1px solid rgba(255, 75, 75, 0.3);
  box-shadow: 0 8px 24px rgba(255, 75, 75, 0.2);
}

/* ─── Stats Strip ───────────────────────────────────────── */
.stats-strip {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.stat-item {
  min-width: 120px;
  padding: 8px 4px;
}

@media (max-width: 599px) {
  .stat-item {
    min-width: 100px;
  }
}
</style>
