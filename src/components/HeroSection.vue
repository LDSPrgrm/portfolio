<script setup>
import { ref } from "vue";

const socialLinks = [
  {
    icon: "mdi-github",
    url: "https://github.com/LDSPrgrm",
    label: "GitHub",
    color: "#333",
  },
  {
    icon: "mdi-linkedin",
    url: "http://www.linkedin.com/in/lawsubala",
    label: "LinkedIn",
    color: "#0077B5",
  },
  {
    icon: "mdi-email",
    url: "mailto:ldsprgrm@gmail.com",
    label: "Email",
    color: "#EA4335",
  },
];

const stats = [
  { value: "2+", label: "Years Technical Experience" },
  { value: "5+", label: "Projects Completed" },
  { value: "100%", label: "Commitment" },
];
</script>

<template>
  <v-container class="py-16 mt-4 position-relative" fluid>
    <!-- Geometric Decorators -->
    <!-- Geometric Decorators Removed -->

    <v-row justify="center" align="center" class="text-center">
      <v-col cols="12" md="10" lg="8">
        <div
          class="d-inline-block mb-6 px-4 py-1 rounded-pill bg-red-lighten-5 text-primary font-weight-bold text-uppercase"
          style="
            letter-spacing: 2px;
            font-size: 0.8rem;
            border: 1px solid rgba(255, 75, 75, 0.2);
          "
        >
          ðŸš€ Available for Hire
        </div>

        <h1
          class="text-h3 text-sm-h2 text-md-h1 font-weight-black mb-4 font-display hero-shadow animate-float"
          style="line-height: 1.1"
        >
          <span class="grand-gradient-text">Architecting</span><br />
          <span class="text-secondary">Intelligence</span>
        </h1>

        <h2
          class="text-subtitle-1 text-sm-h5 text-md-h4 font-weight-regular text-secondary mb-8 opacity-75 font-display"
        >
          Lawrence David Subala | Full-Stack AI Developer
        </h2>

        <div class="d-flex flex-wrap justify-center gap-3 mb-10 mb-sm-12">
          <v-btn
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.url"
            target="_blank"
            variant="flat"
            size="large"
            color="white"
            class="ultra-glass text-secondary font-weight-bold px-5 px-sm-8"
            rounded="xl"
            height="48"
          >
            <v-icon start :color="link.color" size="22">{{ link.icon }}</v-icon>
            {{ link.label }}
          </v-btn>
        </div>

        <!-- Grand Intro Card -->
        <v-card
          class="ultra-glass pa-5 pa-sm-8 pa-md-12 text-center mx-auto relative overflow-visible"
          max-width="800"
          rounded="xl"
          style="border-top: 6px solid #ff4b4b"
        >
          <!-- Absolute Badge -->
          <div class="absolute-badge bg-white shadow-lg">
            <v-icon color="primary" size="32">mdi-code-json</v-icon>
          </div>

          <h3 class="text-h4 font-weight-bold text-secondary mb-6 mt-4">
            Engineering Reality
          </h3>

          <p
            class="text-body-1 text-secondary mb-8"
            style="font-size: 1.25rem !important; line-height: 1.8"
          >
            "I treat code as a medium for converting chaos into clarity. Whether
            it's orchestrating
            <span class="text-primary font-weight-bold">LLM agents</span> or
            optimizing
            <span class="text-primary font-weight-bold"
              >real-time pipelines</span
            >, I build tools that feel inevitable."
          </p>

          <div
            class="d-flex justify-space-around flex-wrap gap-4 pt-4 border-t"
          >
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div
                class="text-h5 text-sm-h4 text-md-h3 font-weight-black text-primary mb-1"
              >
                {{ stat.value }}
              </div>
              <div
                class="text-caption text-uppercase font-weight-bold text-grey"
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
.gap-4 {
  gap: 16px;
}
.gap-3 {
  gap: 12px;
}
.border-t {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.absolute-badge {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(255, 75, 75, 0.2);
  border: 4px solid white;
}
</style>
