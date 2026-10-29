import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HomeBoard from './components/HomeBoard.vue'
import NotesBoard from './components/NotesBoard.vue'
import ImageZoom from './components/ImageZoom.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'doc-bottom': () => h(ImageZoom)
    }),
  enhanceApp({ app }) {
    app.component('HomeBoard', HomeBoard)
    app.component('NotesBoard', NotesBoard)
  }
}
