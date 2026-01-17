<script setup>
import { useLoop } from '@tresjs/core'
import { shallowRef } from 'vue'

const mesh = shallowRef(null)

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (mesh.value) {
    // Pulse scale
    const scale = 1 + Math.sin(elapsed * 2) * 0.1
    mesh.value.scale.set(scale, scale, scale)
    mesh.value.rotation.z = elapsed * 0.5
  }
})
</script>

<template>
  <TresMesh ref="mesh">
    <TresIcosahedronGeometry :args="[1.4, 4]" />
    <TresMeshStandardMaterial 
      color="#00FF94"
      :roughness="0.2"
      :metalness="0.8"
      wireframe
    />
    <!-- Inner core -->
    <TresMesh>
       <TresSphereGeometry :args="[1, 32, 32]" />
       <TresMeshBasicMaterial color="#7000FF" />
    </TresMesh>
  </TresMesh>
</template>
