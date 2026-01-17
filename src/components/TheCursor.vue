<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const cursor = ref(null)
const follower = ref(null)

onMounted(() => {
  // Check if touch device
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return
  }

  document.body.classList.add('has-custom-cursor')

  // Center initially
  gsap.set([cursor.value, follower.value], { xPercent: -50, yPercent: -50 })

  const moveCursor = (e) => {
    gsap.to(cursor.value, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: 'power2.out'
    })
    gsap.to(follower.value, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: 'power2.out'
    })
  }

  // Hover effects
  const addHover = () => {
    gsap.to(follower.value, { scale: 1.5, borderColor: '#00FF94', duration: 0.3 })
  }
  const removeHover = () => {
    gsap.to(follower.value, { scale: 1, borderColor: '#00F0FF', duration: 0.3 })
  }

  window.addEventListener('mousemove', moveCursor)
  
  // Add listeners to interactive elements
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', addHover)
    el.addEventListener('mouseleave', removeHover)
  })
  
  // Observe DOM for new elements (simple observer)
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          const links = node.tagName === 'A' || node.tagName === 'BUTTON' ? [node] : node.querySelectorAll('a, button');
          links.forEach(el => {
            el.addEventListener('mouseenter', addHover)
            el.addEventListener('mouseleave', removeHover)
          })
        }
      })
    })
  })
  observer.observe(document.body, { childList: true, subtree: true })
})
</script>

<template>
  <div class="hidden md:block">
    <div ref="cursor" class="fixed top-0 left-0 w-2 h-2 bg-cyber-cyan rounded-full pointer-events-none z-[9999] mix-blend-difference"></div>
    <div ref="follower" class="fixed top-0 left-0 w-8 h-8 border border-cyber-cyan rounded-full pointer-events-none z-[9998] mix-blend-difference opacity-50"></div>
  </div>
</template>
