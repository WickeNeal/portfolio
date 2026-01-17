<script setup>
import { useLoop } from '@tresjs/core'
import { shallowRef } from 'vue'

const mesh = shallowRef(null)

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (mesh.value) {
    mesh.value.rotation.x = elapsed * 0.5
    mesh.value.rotation.y = elapsed * 0.2
  }
})
</script>

<template>
  <TresMesh ref="mesh">
    <TresTorusGeometry :args="[1.2, 0.4, 16, 100]" />
    <TresMeshStandardMaterial 
      color="#EAEAEA"
      :roughness="0.3"
      :metalness="0.6"
      :emissive="'#00FF94'"
      :emissiveIntensity="0.4"
    />
  </TresMesh>
</template>
