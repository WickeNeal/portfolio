<script setup>
import { PhEnvelopeSimple, PhGithubLogo, PhLinkedinLogo } from '@phosphor-icons/vue'
</script>

<template>
  <section class="min-h-[80vh] w-full flex flex-col justify-center items-center px-4 relative bg-cyber-void border-t border-white/5">
    
    <div class="text-center z-10">
      <h2 class="font-mono text-cyber-green text-sm mb-4 tracking-widest uppercase">Initiate Protocol</h2>
      
      <a href="mailto:contact@nealwicke.be" class="group relative block">
        <h1 class="text-[10vw] font-display font-bold uppercase leading-none text-cyber-white group-hover:text-transparent group-hover:stroke-text transition-all duration-300">
          Let's Talk
        </h1>
        <h1 class="text-[10vw] font-display font-bold uppercase leading-none text-cyber-cyan absolute top-0 left-0 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300">
          Let's Talk
        </h1>
      </a>
      
      <div class="flex gap-8 justify-center mt-12">
        <a href="#" class="p-4 border border-white/10 rounded-full hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all text-cyber-white">
          <PhGithubLogo :size="32" />
        </a>
        <a href="#" class="p-4 border border-white/10 rounded-full hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all text-cyber-white">
          <PhLinkedinLogo :size="32" />
        </a>
        <a href="mailto:contact@nealwicke.be" class="p-4 border border-white/10 rounded-full hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all text-cyber-white">
          <PhEnvelopeSimple :size="32" />
        </a>
      </div>
    </div>
    
    <footer class="absolute bottom-8 text-center w-full">
      <p class="font-mono text-xs text-cyber-white/30">
        © 2026 Neal Wicke. Engineered in Belgium.
      </p>
    </footer>
    
    <!-- Background Gradient -->
    <div class="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-cyber-cyan/5 to-transparent pointer-events-none"></div>
  </section>
</template>

<style scoped>
.stroke-text {
  -webkit-text-stroke: 2px #00F0FF;
  color: transparent;
}
</style>
