<script setup>
import { ref } from "vue";

const experience = ref([
  {
    title: "Full-Stack Software Engineer",
    company: "Lorma Colleges",
    location: "La Union, Philippines",
    period: "Jun 2025 – Aug 2025",
    desc: "Developed a full-stack ride-hailing system spanning mobile clients, backend APIs, and admin tools. Architected backend services for ride matching, dispatch logic, and trip lifecycle management. Implemented real-time ride synchronization via event-driven architecture.",
    color: "#00D4B1",
  },
  {
    title: "Full-Stack Software Engineer",
    company: "SakAI",
    period: "Feb 2026 – Present",
    desc: "Developing a ride-hailing and delivery platform for small-town markets. Built multi-role marketplace with negotiation flows. Implemented real-time systems with offline support and subscription-based features.",
    color: "#FF4B4B",
  },
  {
    title: "Full-Stack Software Engineer",
    company: "Errandify",
    period: "Feb 2026 – Present",
    desc: "Developing a cash-on-delivery errand and delivery platform. Built multi-role marketplace handling add-on tasks and a trust-score system. Managed end-to-end product development.",
    color: "#00E5FF",
  },
  {
    title: "AI Developer",
    company: "AlgoVision",
    period: "Apr 2025 – Present",
    desc: "Developed AI-powered platform generating animated instructional videos from high-level topics. Designed content generation pipeline with automated error detection and self-correction for reliability.",
    color: "#6C5CE7",
  },
]);

const education = ref([
  {
    degree: "Bachelor of Science in Computer Science",
    school: "LORMA Colleges",
    period: "2022 – 2026",
    desc: "Focus on AI/ML, Software Engineering, Data Structures, and Algorithms.",
    color: "#00D4B1",
  },
]);

const certifications = ref([
  {
    name: "ITPEC IT Passport Certification",
    year: "2025",
    color: "#FF8F6B",
  },
]);
</script>

<template>
  <v-container class="py-16">
    <v-row>
      <!-- Experience Column -->
      <v-col cols="12" md="7" class="px-md-6 mb-12 mb-md-0">
        <div class="d-flex align-center mb-10 fade-up">
          <div
            class="icon-box mr-4 rounded-xl"
            style="
              background: rgba(255, 75, 75, 0.08);
              color: #ff4b4b;
              border: 1px solid rgba(255, 75, 75, 0.15);
            "
          >
            <v-icon size="28">mdi-briefcase-outline</v-icon>
          </div>
          <h2
            class="section-header font-display"
            style="font-size: 2.5rem !important"
          >
            Experience
          </h2>
        </div>

        <div class="timeline-container relative pl-6">
          <div class="timeline-line"></div>

          <div
            v-for="(item, i) in experience"
            :key="i"
            class="timeline-item mb-10 relative fade-up"
            :class="'stagger-' + (i + 1)"
          >
            <div
              class="timeline-dot"
              :style="{
                background: item.color,
                boxShadow: '0 0 12px ' + item.color,
              }"
            ></div>

            <div class="timeline-content">
              <div
                class="text-caption text-uppercase font-weight-bold mb-2 font-mono"
                :style="{ color: item.color }"
                style="font-size: 0.7rem; letter-spacing: 1px"
              >
                <v-icon size="small" class="mr-1 mb-1"
                  >mdi-calendar-range</v-icon
                >
                {{ item.period }}
              </div>

              <v-card
                class="ultra-glass pa-6 rounded-xl timeline-card"
                elevation="0"
              >
                <h3
                  class="text-h6 text-sm-h5 font-weight-black text-secondary mb-1 font-display"
                >
                  {{ item.title }}
                </h3>
                <h4
                  class="text-body-2 font-weight-bold mb-4"
                  style="color: var(--secondary-dim); opacity: 0.8"
                >
                  {{ item.company }}
                  <span v-if="item.location" class="text-caption">
                    · {{ item.location }}</span
                  >
                </h4>
                <p
                  class="text-body-2"
                  style="line-height: 1.7; color: var(--secondary-dim)"
                >
                  {{ item.desc }}
                </p>
              </v-card>
            </div>
          </div>
        </div>
      </v-col>

      <!-- Education & Certs Column -->
      <v-col cols="12" md="5" class="px-md-6">
        <!-- Education -->
        <div class="d-flex align-center mb-10 fade-up">
          <div
            class="icon-box mr-4 rounded-xl"
            style="
              background: rgba(0, 212, 177, 0.08);
              color: #00d4b1;
              border: 1px solid rgba(0, 212, 177, 0.15);
            "
          >
            <v-icon size="28">mdi-school-outline</v-icon>
          </div>
          <h2
            class="section-header font-display"
            style="font-size: 2.5rem !important"
          >
            Education
          </h2>
        </div>

        <div class="timeline-container relative pl-6 mb-14">
          <div class="timeline-line"></div>

          <div
            v-for="(item, i) in education"
            :key="i"
            class="timeline-item mb-10 relative fade-up"
          >
            <div
              class="timeline-dot"
              :style="{
                background: item.color,
                boxShadow: '0 0 12px ' + item.color,
              }"
            ></div>

            <div class="timeline-content">
              <div
                class="text-caption text-uppercase font-weight-bold mb-2 font-mono"
                :style="{ color: item.color }"
                style="font-size: 0.7rem; letter-spacing: 1px"
              >
                <v-icon size="small" class="mr-1 mb-1"
                  >mdi-calendar-range</v-icon
                >
                {{ item.period }}
              </div>

              <v-card
                class="ultra-glass pa-6 rounded-xl timeline-card"
                elevation="0"
              >
                <h3
                  class="text-h6 text-sm-h5 font-weight-black text-secondary mb-1 font-display"
                >
                  {{ item.degree }}
                </h3>
                <h4
                  class="text-body-2 font-weight-bold mb-4"
                  style="color: var(--secondary-dim); opacity: 0.8"
                >
                  {{ item.school }}
                </h4>
                <p
                  class="text-body-2"
                  style="line-height: 1.7; color: var(--secondary-dim)"
                >
                  {{ item.desc }}
                </p>
              </v-card>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="d-flex align-center mb-8 fade-up">
          <div
            class="icon-box mr-4 rounded-xl"
            style="
              background: rgba(255, 143, 107, 0.08);
              color: #ff8f6b;
              border: 1px solid rgba(255, 143, 107, 0.15);
            "
          >
            <v-icon size="28">mdi-certificate-outline</v-icon>
          </div>
          <h2
            class="section-header font-display"
            style="font-size: 2rem !important"
          >
            Certifications
          </h2>
        </div>

        <div class="fade-up stagger-2">
          <v-card
            v-for="cert in certifications"
            :key="cert.name"
            class="ultra-glass pa-5 rounded-xl d-flex align-center timeline-card"
            elevation="0"
          >
            <v-icon size="28" :style="{ color: cert.color }" class="mr-4"
              >mdi-medal-outline</v-icon
            >
            <div>
              <h4 class="text-body-1 font-weight-bold text-secondary">
                {{ cert.name }}
              </h4>
              <span
                class="text-caption font-mono"
                :style="{ color: cert.color }"
                style="font-size: 0.7rem; letter-spacing: 1px"
                >{{ cert.year }}</span
              >
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* ─── Timeline ──────────────────────────────────────────── */
.timeline-container {
  padding-left: 24px;
  position: relative;
}

.timeline-line {
  position: absolute;
  top: 10px;
  bottom: 0;
  left: 31px;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.01)
  );
  z-index: 0;
}

.timeline-item {
  z-index: 1;
}

.timeline-dot {
  position: absolute;
  left: -20px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #0a0a0a;
  z-index: 2;
  transition: all 0.35s ease;
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.4);
}

/* ─── Timeline Card Hover ───────────────────────────────── */
.timeline-card {
  position: relative;
  overflow: hidden;
}

.timeline-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.02),
    transparent
  );
  transform: translateX(-100%);
  transition: transform 0.6s ease;
  pointer-events: none;
}

.timeline-card:hover::before {
  transform: translateX(100%);
}
</style>
