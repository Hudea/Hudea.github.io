<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const activeSrc = ref('')
const activeAlt = ref('')
const route = useRoute()

function onDocClick(e) {
  const target = e.target
  if (!(target instanceof HTMLImageElement)) return
  if (!target.closest('.vp-doc')) return
  activeSrc.value = target.currentSrc || target.src
  activeAlt.value = target.alt || ''
}

function onKeydown(e) {
  if (e.key === 'Escape' && activeSrc.value) {
    activeSrc.value = ''
  }
}

watch(
  () => route.path,
  () => {
    activeSrc.value = ''
  }
)

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="zoom-fade">
      <div
        v-if="activeSrc"
        class="img-zoom-overlay"
        role="dialog"
        aria-modal="true"
        @click="activeSrc = ''"
      >
        <img :src="activeSrc" :alt="activeAlt" class="img-zoom-full" />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.img-zoom-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(10, 12, 18, 0.82);
  backdrop-filter: blur(4px);
  cursor: zoom-out;
}

.img-zoom-full {
  max-width: min(94vw, 1480px);
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  object-fit: contain;
}

.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: opacity 0.16s ease;
}

.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
}
</style>
