<script setup>
import { onMounted } from "vue";
import HeroSection from "./components/HeroSection.vue";
import TechStack from "./components/TechStack.vue";
import FeaturedProjects from "./components/FeaturedProjects.vue";
import ExperienceEducation from "./components/ExperienceEducation.vue";
import FooterSection from "./components/FooterSection.vue";

const navLinks = [
  { label: "Projects", to: "#projects" },
  { label: "Stack", to: "#stack" },
  { label: "Experience", to: "#experience" },
  { label: "Contact", to: "#contact" },
];

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
});
</script>

<template>
  <v-app style="background: transparent">
    <!-- Mesh Background -->
    <div class="mesh-background">
      <div class="mesh-blob blob-1"></div>
      <div class="mesh-blob blob-2"></div>
      <div class="mesh-blob blob-3"></div>
    </div>

    <!-- Noise Overlay -->
    <div class="noise-overlay"></div>

    <!-- Navigation -->
    <v-app-bar class="nav-bar" flat density="comfortable" height="64">
      <v-container class="d-flex align-center justify-space-between py-0">
        <a href="#" class="nav-logo font-display text-decoration-none">
          <span class="logo-box">
            <span class="logo-l">L</span><span class="logo-ds">DS</span>
          </span>
        </a>

        <div class="d-none d-sm-flex align-center gap-2">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.to"
            class="nav-link text-decoration-none"
          >
            {{ link.label }}
          </a>
          <v-btn
            href="/portfolio/resume.pdf"
            target="_blank"
            variant="outlined"
            color="primary"
            size="small"
            rounded="lg"
            class="ml-2 font-weight-bold nav-resume-btn"
          >
            <v-icon start size="16">mdi-file-document-outline</v-icon>
            Resume
          </v-btn>
        </div>

        <!-- Mobile menu -->
        <v-menu location="bottom end">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-menu"
              variant="text"
              color="secondary"
              class="d-sm-none"
              size="small"
            ></v-btn>
          </template>
          <v-list class="ultra-glass pa-2" style="min-width: 180px">
            <v-list-item
              v-for="link in navLinks"
              :key="link.label"
              :href="link.to"
              class="rounded-lg"
            >
              <v-list-item-title class="font-weight-medium text-secondary">{{
                link.label
              }}</v-list-item-title>
            </v-list-item>
            <v-divider class="my-2 opacity-10"></v-divider>
            <v-list-item
              href="/portfolio/resume.pdf"
              target="_blank"
              class="rounded-lg"
            >
              <v-list-item-title class="font-weight-medium text-primary">
                <v-icon start size="16">mdi-file-document-outline</v-icon>
                Resume
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <div id="hero">
        <HeroSection />
      </div>

      <div class="section-divider"></div>

      <div id="projects">
        <FeaturedProjects />
      </div>

      <div class="section-divider"></div>

      <div id="stack">
        <TechStack />
      </div>

      <div class="section-divider"></div>

      <div id="experience">
        <ExperienceEducation />
      </div>

      <div id="contact">
        <FooterSection />
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.nav-bar {
  background: rgba(10, 10, 10, 0.7) !important;
  backdrop-filter: blur(24px) saturate(1.2);
  -webkit-backdrop-filter: blur(24px) saturate(1.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04) !important;
  z-index: 100;
}

.nav-logo {
  font-size: 1.1rem;
  letter-spacing: -0.02em;
  text-decoration: none;
}

.logo-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ff4b4b;
  border-radius: 8px;
  width: 36px;
  height: 36px;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  line-height: 1;
}

.logo-l {
  color: #ffffff;
}

.logo-ds {
  color: #ffffff;
}

.nav-link {
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  padding: 6px 14px;
  border-radius: 8px;
  transition: all 0.25s ease;
  letter-spacing: 0.01em;
}

.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

.nav-resume-btn {
  letter-spacing: 0.02em;
  font-size: 0.8rem !important;
}
</style>
