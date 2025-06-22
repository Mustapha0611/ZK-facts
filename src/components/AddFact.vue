<template>
    <section class="absolute w-[100vw] backdrop-blur-md h-screen top-0  left-0 z-50 bg-black/20 flex items-center justify-center">
        <div class="bg-zinc-950  min-h-[20vh] w-[90%] md:w-[50%] shadow-emerald-800 shadow-md rounded-lg px-8 py-4">
          <p class="md:text-3xl text-lg font-semibold text-center mb-5">Prove your own ZK-Fact</p>
          <textarea name="" id="" cols="30" v-model="funFacts.fact" class="bg-slate-200 rounded-md w-full p-2 text-zinc-950 font-light text-sm h-20 outline" placeholder="Write You Zk fact here"></textarea>
          <input
            type="text"
            name=""
            id=""
            v-model="funFacts.Author"
            placeholder="Enter your name here"
            class="w-full p-2 my- border bg-slate-200 rounded-md text-zinc-950 font-light text-sm outline"
          />
          <button
            class="animated-border-btn mt-4"
            @click="funFacts.addFact()"
          >
            Prove Zk-Fact
            <span class="pi pi-spin pi-spinner" v-if="funFacts.isLoading"></span>
          </button>
        </div>
      </section>
</template>
<script setup>
import { ref } from "vue";

import { usefunFacts } from "@/stores/factsStore.js";
const funFacts = usefunFacts();


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