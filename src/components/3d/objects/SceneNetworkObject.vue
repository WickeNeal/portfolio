<script setup>
import { useLoop } from '@tresjs/core'
import { shallowRef } from 'vue'

const mesh = shallowRef(null)

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (mesh.value) {
    mesh.value.rotation.x = elapsed * 0.2
    mesh.value.rotation.y = elapsed * 0.3
  }
})
</script>

<template>
  <TresPoints ref="mesh">
    <TresTorusKnotGeometry :args="[1, 0.3, 100, 16]" />
    <TresPointsMaterial 
      color="#7000FF"
      :size="0.05"
      :sizeAttenuation="true"
    />
  </TresPoints>
</template>
