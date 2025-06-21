<template>
  <main class="min-h-[20vh]">
    <div class="h-100vh w-full flex pt-4 items-center justify-center">
      <h1 class="text-3xl font-semibold text-center">Union build : ZK-Fact</h1>
    </div>
    <div class="lg:p-4 p-2" v-if="funFacts.factData && funFacts.factData.fact">
      <section>
        <p class="text-lg font-light text-center">
          "{{ funFacts.factData?.fact }}"
        </p>
        <p class="text-right italic font-light">
          - {{ funFacts.factData?.Author }}</p>

      </section>
      <section class="flex gap-4 md:gap-2 justify-center md:flex-row mt-4 mb-2 md:mb-0  w-full">
        <button @click="getRandomFact" class="animated-border-btn text-xs md:text-sm">
          More ZK-fact
        </button>
            <button class="animated-border-btn text-xs md:text-sm" @click="funFacts.showAddFactModal = true">
               Add Zk-fact
             </button>
      </section>
    
    </div>
    <div v-else class="flex items-center justify-center h-[30vh]">
        <p class="text-2xl font-semibold animate-bounce">Loading Zkg facts...</p>
    </div>
  </main>
</template>
<script setup>
import { ref, onMounted } from "vue";

import { usefunFacts } from "@/stores/factsStore.js";



const funFacts = usefunFacts();
onMounted(() => {
  getRandomFact();
});


const getRandomFact = () => {
  funFacts.fetchRandomFact()
};
</script>

<style scoped>
.animated-border-btn {
  position: relative;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  color: #18181b;
  background: #fff;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
}

.animated-border-btn::before {
  content: "";
  position: absolute;
  inset: -3px;
  z-index: -1;
  border-radius: 0.5rem;
  background: linear-gradient(270deg, #22d3ee, #da4de7, #ddd3c8, #22d3ee);
  background-size: 600% 600%;
  animation: borderMove 3s linear infinite;
}

@keyframes borderMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
