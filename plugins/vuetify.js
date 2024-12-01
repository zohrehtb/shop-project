import {
  createVuetify
} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myTheme = {
  colors: {
    background: '#FEFEFE',
    primary: '#2196F3',
    secondary: '#FF9800',
    error: '#D32F2F',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#F57C00',
    danger: '#D32F2F',
    detail: '#673AB7',
  },
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'myTheme',
      themes: {
        myTheme,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})