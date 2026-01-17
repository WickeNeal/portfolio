<script setup>
import { useLoop } from '@tresjs/core'
import { shallowRef } from 'vue'

const group = shallowRef(null)

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (group.value) {
    group.value.rotation.x = Math.sin(elapsed * 0.5) * 0.5
    group.value.rotation.y = elapsed * 0.2
  }
})
</script>

<template>
  <TresGroup ref="group">
    <!-- 3x3 Grid of Cubes -->
    <TresMesh v-for="i in 3" :key="`row-${i}`" :position="[(i-2)*1.2, 0, 0]">
      <TresBoxGeometry :args="[0.8, 0.8, 0.8]" />
      <TresMeshBasicMaterial wireframe color="#00F0FF" />
    </TresMesh>
    
    <TresMesh v-for="i in 3" :key="`row-top-${i}`" :position="[(i-2)*1.2, 1.2, 0]">
      <TresBoxGeometry :args="[0.8, 0.8, 0.8]" />
      <TresMeshBasicMaterial wireframe color="#00F0FF" />
    </TresMesh>

    <TresMesh v-for="i in 3" :key="`row-bot-${i}`" :position="[(i-2)*1.2, -1.2, 0]">
      <TresBoxGeometry :args="[0.8, 0.8, 0.8]" />
      <TresMeshBasicMaterial wireframe color="#00F0FF" />
    </TresMesh>
  </TresGroup>
</template>
