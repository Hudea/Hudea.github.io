<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter } = useData()
const route = useRoute()
const progress = ref(0)

const isDocPage = computed(() => frontmatter.value?.layout !== 'page' && frontmatter.value?.layout !== 'home')

function updateProgress() {
  if (!isDocPage.value) {
    progress.value = 0
    return
  }
  const doc = document.documentElement
  const scrollTop = window.scrollY || doc.scrollTop
  const scrollable = doc.scrollHeight - window.innerHeight
  if (scrollable <= 0) {
    progress.value = 0
    return
  }
  progress.value = Math.min(100, Math.max(0, (scrollTop / scrollable) * 100))
}

watch(
  () => route.path,
  () => {
    requestAnimationFrame(updateProgress)
  }
)

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })
  window.addEventListener('resize', updateProgress, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('resize', updateProgress)
})
</script>

<template>
  <div v-if="isDocPage" class="reading-progress" aria-hidden="true">
    <div class="reading-progress-bar" :style="{ transform: `scaleX(${progress / 100})` }" />
  </div>
</template>

<style scoped>
.reading-progress {
  position: fixed;
  top: var(--vp-nav-height);
  left: 0;
  right: 0;
  height: 2px;
  z-index: 30;
  pointer-events: none;
  background: transparent;
}

.reading-progress-bar {
  width: 100%;
  height: 100%;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transition: transform 0.08s linear;
}
</style>
