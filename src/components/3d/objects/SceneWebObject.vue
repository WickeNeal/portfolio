<script setup>
import { useLoop } from '@tresjs/core'
import { shallowRef } from 'vue'

const mesh = shallowRef(null)

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (mesh.value) {
    mesh.value.rotation.y = elapsed * 0.5
    mesh.value.rotation.z = elapsed * 0.2
  }
})
</script>

<template>
  <TresMesh ref="mesh">
    <TresIcosahedronGeometry :args="[1.5, 0]" />
    <TresMeshPhysicalMaterial 
      color="#006066"
      :roughness="0.2"
      :metalness="0.1"
      :transmission="0.6"
      :thickness="1.5"
      :clearcoat="1"
      :emissive="'#00F0FF'"
      :emissiveIntensity="0.05"
    />
  </TresMesh>
</template>
