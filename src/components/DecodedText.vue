<script setup>
import { ref, watch, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  text: { type: String, required: true },
  tag: { type: String, default: 'span' },
  class: { type: String, default: '' }
})

const output = ref('')
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'
const target = ref(null)
const hasAnimated = ref(false)

useIntersectionObserver(target, ([entry]) => {
  if (entry.isIntersecting && !hasAnimated.value) {
    hasAnimated.value = true
    animate()
  }
})

const animate = () => {
  let iterations = 0
  const interval = setInterval(() => {
    output.value = props.text
      .split('')
      .map((letter, index) => {
        if (index < iterations) {
          return props.text[index]
        }
        return characters[Math.floor(Math.random() * characters.length)]
      })
      .join('')
    
    if (iterations >= props.text.length) {
      clearInterval(interval)
      output.value = props.text // Ensure final state is clean
    }
    
    iterations += 1 / 2 // Slower for drama
  }, 40)
}

onMounted(() => {
  output.value = props.text.split('').map(() => characters[Math.floor(Math.random() * characters.length)]).join('')
})
</script>

<template>
  <component :is="tag" ref="target" :class="['font-mono', props.class]">
    {{ output }}
  </component>
</template>
