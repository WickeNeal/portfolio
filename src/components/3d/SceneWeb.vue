<script setup>
import { TresCanvas } from '@tresjs/core'
import { OrbitControls, Levioso } from '@tresjs/cientos'
import SceneWebObject from './objects/SceneWebObject.vue'
</script>

<template>
  <div class="w-full h-full">
    <TresCanvas alpha preset="realistic" :dpr="[1, 2]" power-preference="high-performance">
      <TresPerspectiveCamera :position="[0, 0, 5]" :fov="45" :look-at="[0, 0, 0]" />
      
      <TresAmbientLight :intensity="1.5" color="#ffffff" />
      <TresDirectionalLight :position="[2, 5, 5]" :intensity="2" color="#00F0FF" />
      <TresDirectionalLight :position="[-2, -5, 5]" :intensity="2" color="#7000FF" />
      
      <Levioso :speed="1.5" :rotationFactor="1.5" :floatFactor="1.2">
        <SceneWebObject />
      </Levioso>

      <OrbitControls :enable-zoom="false" :enable-pan="false" :auto-rotate="false" />
    </TresCanvas>
  </div>
</template>
