<script setup>
import DecodedText from './DecodedText.vue'
import { PhArrowDown } from '@phosphor-icons/vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.from('.hero-content', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out',
    delay: 0.5
  })
})
</script>

<template>
  <section class="h-screen w-full flex flex-col justify-start md:justify-center items-center relative overflow-hidden bg-cyber-void pt-20 md:pt-0">
    <div class="hero-content z-10 text-center flex flex-col items-center justify-between md:justify-center h-[70dvh] md:h-auto">
      <div class="flex items-center gap-4">
        <div class="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
        <h2 class="text-cyber-cyan tracking-[0.5em] text-xs md:text-sm uppercase font-mono">
          <DecodedText text="SYSTEM ONLINE // BE-2026" />
        </h2>
      </div>
      
      <div class="flex flex-col items-center">
        <h1 class="text-[18vw] md:text-[15vw] leading-[0.8] font-display font-bold uppercase text-cyber-white">
          <DecodedText text="NEAL" />
        </h1>
        <h1 class="text-[18vw] md:text-[15vw] leading-[0.8] font-display font-bold uppercase text-transparent stroke-text">
          WICKE
        </h1>
      </div>
      
      <p class="max-w-[280px] md:max-w-md text-center text-cyber-white/60 font-mono text-xs md:text-sm leading-relaxed px-4 md:mt-8">
        Full Stack Engineer crafting high-performance digital architecture.
        Based in Belgium.
      </p>
    </div>
    
    <div class="absolute bottom-12 flex flex-col items-center gap-2 opacity-50">
      <span class="text-[10px] uppercase tracking-widest font-mono text-cyber-white">Scroll to Initialize</span>
      <PhArrowDown :size="20" class="text-cyber-cyan animate-bounce" />
    </div>
    
    <!-- Background Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-cyber-cyan/10 blur-[150px] rounded-full pointer-events-none"></div>
  </section>
</template>

<style scoped>
.stroke-text {
  -webkit-text-stroke: 2px #00F0FF;
}
</style>
