<script setup>
import funFacts from '@/components/funFact.vue'
import AddFact from '@/components/AddFact.vue'
import { usefunFacts } from '@/stores/factsStore.js'

const factsStore = usefunFacts()
</script>

<template>
  <main class="home-view">
    <video autoplay muted loop playsinline class="bg-video">
      <source src="https://videos.cdn.union.build/app-union-background-2.webm" type="video/webm" />
    </video>

    <div class="content bg-zinc-900 md:w-[50%] w-[90%] shadow-emerald-800 shadow-md rounded-lg px-8">
      <funFacts />
      <transition name="modal-fade">
        <AddFact v-if="factsStore.showAddFactModal" />
      </transition>
    </div>
    <div class="text-white z-50 absolute bottom-5">Build by Musteey  <a href="https://x.com/MustaphaMS007" target="_blank" class="border px-2 py-1 rounded-xl transition-all hover:bg-slate-100 hover:text-zinc-900">Say Hello on X</a></div>
  </main>
</template>

<style scoped>
/* Transition for modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Layout styles */
.home-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  overflow: hidden;
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.content {
  z-index: 1;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>
