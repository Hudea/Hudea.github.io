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
        <span class="img-zoom-hint" aria-hidden="true">ESC / 点击关闭</span>
        <div class="img-zoom-stage">
          <img :src="activeSrc" :alt="activeAlt" class="img-zoom-full" />
          <p v-if="activeAlt" class="img-zoom-caption">{{ activeAlt }}</p>
        </div>
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
  padding: 2rem 1.5rem;
  background: rgba(8, 9, 13, 0.86);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: zoom-out;
}

.img-zoom-hint {
  position: fixed;
  top: 1.15rem;
  right: 1.35rem;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(17, 19, 24, 0.72);
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.72);
}

.img-zoom-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  max-width: min(94vw, 1480px);
}

.img-zoom-full {
  max-width: 100%;
  max-height: 84vh;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #ffffff;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55);
  object-fit: contain;
}

.img-zoom-caption {
  margin: 0;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: rgba(17, 19, 24, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.88);
  text-align: center;
}

.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: opacity 0.18s ease;
}

.zoom-fade-enter-active .img-zoom-stage,
.zoom-fade-leave-active .img-zoom-stage {
  transition: transform 0.18s ease;
}

.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
}

.zoom-fade-enter-from .img-zoom-stage,
.zoom-fade-leave-to .img-zoom-stage {
  transform: scale(0.97);
}
</style>
