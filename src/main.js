import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import './styles/main.css'

import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#FF4B4B', // Streamlit Red
                    secondary: '#31333F', // Streamlit Dark Text
                    accent: '#00D4B1', // Teal
                    background: '#FFFFFF',
                    surface: '#F0F2F6',
                    'surface-variant': '#FFFFFF',
                },
            },
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})

createApp(App).use(vuetify).mount('#app')
