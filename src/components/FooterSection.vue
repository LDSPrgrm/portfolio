<template>
  <v-footer
    class="bg-transparent py-12 mt-12 text-center position-relative overflow-hidden"
    style="border-top: 1px solid rgba(255, 255, 255, 0.04)"
  >
    <!-- Footer Glow -->
    <div class="footer-glow"></div>

    <v-container class="relative" style="z-index: 2">
      <v-row justify="center" align="center" class="mb-8">
        <v-col cols="12" md="8" lg="7">
          <v-card
            class="ultra-glass pa-8 pa-md-12 rounded-xl cta-card fade-up"
            elevation="0"
          >
            <h2
              class="text-h4 text-sm-h3 font-weight-black text-secondary mb-4 font-display"
            >
              Ready to Build?
            </h2>
            <p
              class="text-body-1 mb-8 mx-auto"
              style="
                max-width: 500px;
                line-height: 1.7;
                color: var(--secondary-dim);
              "
            >
              Whether it's a real-time event-driven architecture or an
              intelligent LLM agent pipeline, let's architect
              <strong class="text-secondary">reality</strong> together.
            </p>
            <v-btn
              href="mailto:ldsprgrm@gmail.com"
              color="primary"
              size="x-large"
              class="font-weight-bold px-10 cta-btn"
              rounded="pill"
              height="56"
            >
              <span style="font-size: 1rem; letter-spacing: 0.3px"
                >Send a Message</span
              >
              <v-icon end size="22" class="ml-2">mdi-email-fast</v-icon>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-divider class="mb-6" style="opacity: 0.06"></v-divider>
          <div
            class="d-flex flex-column flex-sm-row justify-space-between align-center px-4"
          >
            <p
              class="text-caption font-weight-bold mb-4 mb-sm-0 font-mono"
              style="
                letter-spacing: 0.5px;
                color: var(--secondary-dim);
                font-size: 0.7rem;
              "
            >
              &copy; {{ new Date().getFullYear() }} Lawrence David Subala · La
              Union, Philippines
            </p>
            <div class="d-flex align-center gap-2">
              <v-btn
                icon="mdi-github"
                variant="text"
                size="small"
                href="https://github.com/LDSPrgrm"
                target="_blank"
                class="footer-icon"
              ></v-btn>
              <v-btn
                icon="mdi-linkedin"
                variant="text"
                size="small"
                href="http://www.linkedin.com/in/lawsubala"
                target="_blank"
                class="footer-icon"
              ></v-btn>
              <v-btn
                icon="mdi-file-document-outline"
                variant="text"
                size="small"
                href="/portfolio/resume.pdf"
                target="_blank"
                class="footer-icon"
              ></v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
/* ─── Footer Glow ───────────────────────────────────────── */
.footer-glow {
  position: absolute;
  bottom: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 70vw;
  height: 70vw;
  background: radial-gradient(
    circle,
    rgba(255, 75, 75, 0.04) 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

/* ─── CTA Card ──────────────────────────────────────────── */
.cta-card {
  border-top: 2px solid rgba(255, 75, 75, 0.25) !important;
  transition: all 0.4s ease;
}

.cta-card:hover {
  border-top-color: rgba(255, 75, 75, 0.6) !important;
  box-shadow:
    0 20px 48px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(255, 75, 75, 0.06) !important;
}

/* ─── CTA Button ────────────────────────────────────────── */
.cta-btn {
  transition: all 0.35s ease;
  box-shadow: 0 8px 24px rgba(255, 75, 75, 0.25) !important;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(255, 75, 75, 0.4) !important;
}

/* ─── Footer Icons ──────────────────────────────────────── */
.footer-icon {
  color: rgba(255, 255, 255, 0.35) !important;
  transition: all 0.25s ease;
}

.footer-icon:hover {
  color: #ff4b4b !important;
  transform: translateY(-2px);
}
</style>
