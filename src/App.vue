<script setup>
import HeroSection from './components/HeroSection.vue'
import TechStack from './components/TechStack.vue'
import FeaturedProjects from './components/FeaturedProjects.vue'
import ExperienceEducation from './components/ExperienceEducation.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <v-app class="bg-transparent">
    <div class="mesh-background">
      <div class="mesh-blob blob-1"></div>
      <div class="mesh-blob blob-2"></div>
      <div class="mesh-blob blob-3"></div>
    </div>

    <v-main>
      <HeroSection />
      <FeaturedProjects />
      <TechStack />
      <ExperienceEducation />
      <FooterSection />
    </v-main>
  </v-app>
</template>

<style scoped>
.bg-background {
  background-color: #FFFFFF !important;
  color: #31333F;
}

.background-globes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.globe {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: pulse 10s infinite alternate;
}

.globe-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 75, 75, 0.1) 0%, rgba(255,255,255,0) 70%);
  top: -100px;
  left: -100px;
}

.globe-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 140, 0, 0.08) 0%, rgba(255,255,255,0) 70%);
  bottom: 0;
  right: -100px;
  animation-delay: -5s;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.3; }
  100% { transform: scale(1.1); opacity: 0.5; }
}
</style>
