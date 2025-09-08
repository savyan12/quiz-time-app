import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
const app = createApp(App)
// animations
import 'animate.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//icons
import { QTIconSet } from './plugins/icons'
import { aliases, fa } from 'vuetify/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'
// Components
const vuetify = createVuetify({
  components,
  directives,
  //icons
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      qt: QTIconSet,
      fa,
    },
  },
})
app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
