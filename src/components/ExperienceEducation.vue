<script setup>
const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'Lorma Colleges',
    period: 'Jun 2025 – Aug 2025',
    color: '#FF4B4B',
    details: [
      'Architected and shipped "Tryk", a hyper-local ride-hailing platform serving thousands of daily interactions.',
      'Engineered the core real-time dispatching engine using WebSocket protocols for instant driver allocation.',
      'Optimized geospatial queries reducing ride-matching latency by 40% under high load.',
      'Designed a multi-role admin dashboard for granular fleet management and analytics.'
    ]
  }
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'LORMA Colleges',
    location: 'La Union, Philippines',
    year: 'June 2026',
    icon: 'mdi-school',
    color: '#00D4B1'
  },
  {
    degree: 'ITPEC IT Passport Certification',
    school: 'Certification',
    location: 'April 2025',
    year: '',
    icon: 'mdi-certificate',
    color: '#6C5CE7'
  }
]
</script>

<template>
  <v-container class="py-16">
    <div class="text-center mb-16">
      <h2 class="section-header mb-4">
        <span class="grand-gradient-text">The Journey</span>
      </h2>
    </div>

    <v-row>
      <!-- Experience Column -->
      <v-col cols="12" md="7">
        <v-card class="ultra-glass pa-8 h-100" rounded="xl">
          <div class="d-flex align-center mb-10">
            <div class="icon-box bg-red-lighten-5 text-primary mr-4">
               <v-icon size="32">mdi-briefcase-variant</v-icon>
            </div>
            <h3 class="text-h4 font-weight-bold text-secondary">Experience</h3>
          </div>
          
          <div class="experience-track pl-4 ml-4">
            <div v-for="(item, i) in experience" :key="i" class="relative pb-12">
              <div class="timeline-node"></div>
              
              <v-card class="active-card pa-6 ml-6" elevation="0" rounded="xl" border>
                 <div class="d-flex flex-column flex-sm-row justify-space-between align-start mb-4">
                    <div>
                      <h4 class="text-h5 font-weight-bold text-secondary mb-1">{{ item.role }}</h4>
                      <div class="text-subtitle-1 text-primary font-weight-bold">{{ item.company }}</div>
                    </div>
                    <v-chip color="primary" variant="flat" size="small" class="font-weight-bold mt-2 mt-sm-0">
                      {{ item.period }}
                    </v-chip>
                 </div>
                 
                 <ul class="pl-4 text-body-1 text-secondary" style="line-height: 1.8;">
                   <li v-for="(d, idx) in item.details" :key="idx" class="mb-2">
                     {{ d }}
                   </li>
                 </ul>
              </v-card>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- Education Column -->
      <v-col cols="12" md="5">
        <v-card class="ultra-glass pa-8 h-100" rounded="xl">
          <div class="d-flex align-center mb-10">
            <div class="icon-box bg-teal-lighten-5 text-teal-accent-4 mr-4">
               <v-icon size="32">mdi-school</v-icon>
            </div>
            <h3 class="text-h4 font-weight-bold text-secondary">Education</h3>
          </div>

          <div class="d-flex flex-column gap-6">
            <v-card 
              v-for="(edu, i) in education" 
              :key="i"
              class="pa-6 edu-card"
              rounded="xl"
              elevation="0"
              border
            >
              <div class="d-flex align-start">
                <v-avatar :color="edu.color" variant="tonal" size="56" class="mr-4 rounded-lg">
                  <v-icon size="32">{{ edu.icon }}</v-icon>
                </v-avatar>
                <div>
                   <h4 class="text-h6 font-weight-bold text-secondary line-height-tight mb-1">
                     {{ edu.degree }}
                   </h4>
                   <div class="text-body-2 font-weight-medium text-grey-darken-2 mb-2">
                     {{ edu.school }}
                   </div>
                   <div class="text-caption font-weight-bold text-uppercase" :style="`color: ${edu.color}`">
                     {{ edu.location }} {{ edu.year ? `• ${edu.year}` : '' }}
                   </div>
                </div>
              </div>
            </v-card>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.icon-box {
  width: 64px;
  height: 64px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.experience-track {
  border-left: 2px dashed rgba(0,0,0,0.1);
}

.timeline-node {
  position: absolute;
  left: -25px;
  top: 24px;
  width: 16px;
  height: 16px;
  background: white;
  border: 4px solid #FF4B4B;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 75, 75, 0.15);
}

.active-card {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  transition: transform 0.3s ease;
}
.active-card:hover {
  transform: translateX(8px);
  border-color: rgba(255, 75, 75, 0.3);
}

.edu-card {
  transition: all 0.3s ease;
}
.edu-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.gap-6 { gap: 24px; }
.line-height-tight { line-height: 1.3; }
</style>
