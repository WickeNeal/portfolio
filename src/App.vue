<script setup>
import { onMounted } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import TheNoise from './components/TheNoise.vue'
import TheCursor from './components/TheCursor.vue'
import HeroSection from './components/HeroSection.vue'
import WorkSection from './components/WorkSection.vue'
import ContactSection from './components/ContactSection.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Initialize Smooth Scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true
  })

  // Link Lenis to GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  
  gsap.ticker.lagSmoothing(0)
})
</script>

<template>
  <div class="relative w-full min-h-screen md:min-h-screen bg-cyber-void text-cyber-white selection:bg-cyber-green selection:text-black">
    <TheNoise />
    <TheCursor />
    
    <main>
      <HeroSection />
      <WorkSection />
      <ContactSection />
    </main>
  </div>
</template>
