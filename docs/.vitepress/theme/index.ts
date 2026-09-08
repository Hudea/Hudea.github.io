import DefaultTheme from 'vitepress/theme'
import HomeBoard from './components/HomeBoard.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeBoard', HomeBoard)
  }
}
