<script setup>
const techGroups = [
  {
    title: "Languages & Frameworks",
    icon: "mdi-code-json",
    color: "#FF4B4B",
    highlights: [
      { name: "Python", icon: "mdi-language-python" },
      { name: "Vue.js", icon: "mdi-vuejs" },
      { name: "Flutter", icon: "mdi-cellphone" },
      { name: "Laravel", icon: "mdi-laravel" },
    ],
    rest: ["TypeScript", "React", "React Native", "Dart", "PHP", "Java", "Go"],
  },
  {
    title: "Databases & Infrastructures",
    icon: "mdi-server-network",
    color: "#00D4B1",
    highlights: [
      { name: "PostgreSQL", icon: "mdi-database" },
      { name: "MongoDB", icon: "mdi-leaf" },
      { name: "Docker", icon: "mdi-docker" },
      { name: "Git", icon: "mdi-git" },
    ],
    rest: ["MySQL", "MariaDB", "Supabase", "AWS"],
  },
  {
    title: "AI & Specialized",
    icon: "mdi-brain",
    color: "#6C5CE7",
    highlights: [
      { name: "LLM Agents", icon: "mdi-robot" },
      { name: "RAG", icon: "mdi-file-document-refresh" },
      { name: "Speech IO", icon: "mdi-waveform" },
      { name: "Whisper", icon: "mdi-ear-hearing" },
    ],
    rest: [
      "Real-Time ASR",
      "Streaming TTS",
      "Local Inference",
      "Manim",
      "PyTorch",
    ],
  },
];
</script>

<template>
  <v-container class="py-16">
    <div class="text-center mb-16">
      <h2 class="section-header mb-4">
        <span class="text-secondary">Technical</span>
        <span class="grand-gradient-text px-2">Arsenal</span>
      </h2>
      <p class="section-subtitle">The engines that drive my solutions.</p>
    </div>

    <v-row>
      <v-col v-for="(group, i) in techGroups" :key="i" cols="12" md="4">
        <v-card
          class="ultra-glass h-100 d-flex flex-column pa-0 overflow-hidden"
          rounded="xl"
          elevation="0"
          :style="`border-top: 6px solid ${group.color};`"
        >
          <!-- Main Content (Highlights) -->
          <div class="pa-8 flex-grow-1">
            <div class="d-flex align-center justify-center mb-8">
              <div
                class="icon-wrapper mr-4"
                :style="`background: ${group.color}15; color: ${group.color};`"
              >
                <v-icon size="32">{{ group.icon }}</v-icon>
              </div>
              <h3 class="text-h5 font-weight-bold text-secondary">
                {{ group.title }}
              </h3>
            </div>

            <!-- 2x2 Grid for Perfect Consistency -->
            <v-row dense class="mb-4">
              <v-col cols="6" v-for="tech in group.highlights" :key="tech.name">
                <div
                  class="text-center py-4 rounded-lg bg-grey-lighten-5 highlight-card"
                >
                  <v-icon :color="group.color" size="36" class="mb-2">{{
                    tech.icon
                  }}</v-icon>
                  <div class="text-caption font-weight-bold text-secondary">
                    {{ tech.name }}
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>

          <!-- Distinct Ecosystem Footer -->
          <div class="bg-grey-lighten-4 pa-6 text-center border-t">
            <div
              class="text-caption font-weight-black text-uppercase text-grey-darken-1 mb-3 tracking-wider"
            >
              Extended Ecosystem
            </div>
            <div
              class="d-flex flex-wrap justify-center gap-2"
              style="font-size: 0.9rem"
            >
              <span
                v-for="(item, idx) in group.rest"
                :key="item"
                class="text-secondary font-weight-medium"
              >
                {{ item
                }}<span
                  v-if="idx < group.rest.length - 1"
                  class="text-grey-lighten-1 mx-2"
                  >/</span
                >
              </span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.gap-2 {
  gap: 4px;
}
.border-t {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.highlight-card {
  transition: all 0.3s ease;
  border: 1px solid transparent;
}
.highlight-card:hover {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
  border-color: rgba(0, 0, 0, 0.05);
}

.tracking-wider {
  letter-spacing: 0.08em;
}
</style>
