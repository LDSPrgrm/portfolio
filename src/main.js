import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "./styles/main.css";

import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: "#FF4B4B",
          secondary: "#FFFFFF",
          accent: "#00D4B1",
          background: "#0A0A0A",
          surface: "#141414",
          "surface-variant": "#1A1A1A",
          "on-background": "#FFFFFF",
          "on-surface": "#FFFFFF",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App).use(vuetify).mount("#app");
