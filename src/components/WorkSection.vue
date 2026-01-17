<script setup>
import { onMounted, ref, defineAsyncComponent } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PhCaretRight } from '@phosphor-icons/vue'

gsap.registerPlugin(ScrollTrigger)

const container = ref(null)

// Lazy load 3D scenes
const SceneWeb = defineAsyncComponent(() => import('./3d/SceneWeb.vue'))
const SceneApp = defineAsyncComponent(() => import('./3d/SceneApp.vue'))
const SceneNetwork = defineAsyncComponent(() => import('./3d/SceneNetwork.vue'))
const SceneAI = defineAsyncComponent(() => import('./3d/SceneAI.vue'))
const SceneCycle = defineAsyncComponent(() => import('./3d/SceneCycle.vue'))

const projects = [
  {
    id: '01',
    name: 'High-Impact Websites',
    category: 'Digital Identity',
    stack: 'Speed (<1s Load) • SEO Optimized • Mobile First',
    description: 'Visually stunning, animation-rich websites designed to elevate your brand authority and convert visitors.',
    year: 'WEB',
    scene: SceneWeb
  },
  {
    id: '02',
    name: 'Custom Applications',
    category: 'SaaS & Tools',
    stack: 'Secure Data • Real-time Sync • Scalable Architecture',
    description: 'Tailor-made software to streamline your business. From customer portals to complex management dashboards.',
    year: 'APPS',
    scene: SceneApp
  },
  {
    id: '03',
    name: 'System Integrations',
    category: 'Connectivity',
    stack: 'Automated Workflows • Error-Free • Reliable Uptime',
    description: 'Seamlessly connecting your software ecosystem. Payment gateways, CRM syncing, and custom API development.',
    year: 'API',
    scene: SceneNetwork
  },
  {
    id: '04',
    name: 'AI Solutions',
    category: 'Intelligence',
    stack: 'Process Automation • Cost Reduction • 24/7 Operations',
    description: 'Automating intelligence. Custom AI microservices, LLM integration, and smart document processing.',
    year: 'AI',
    scene: SceneAI
  },
  {
    id: '05',
    name: 'End-to-End Delivery',
    category: 'Partnership',
    stack: 'Blueprint to Launch • Documentation • Maintainable Codebase',
    description: 'I take full ownership of the lifecycle. From the first database diagram to the final production deployment.',
    year: 'FULL CYCLE',
    scene: SceneCycle
  }
]

onMounted(() => {
  const sections = gsap.utils.toArray('.project-panel')
  
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container.value,
      pin: true,
      scrub: 1,
      end: () => "+=" + container.value.offsetWidth
    }
  })
})
</script>

<template>
  <section ref="container" class="h-screen w-full flex overflow-x-hidden relative bg-cyber-void">
    <div class="absolute top-10 left-10 z-20 mix-blend-difference">
      <h2 class="text-4xl font-display font-bold uppercase text-cyber-white">Technical Capabilities</h2>
      <div class="w-12 h-1 bg-cyber-cyan mt-2"></div>
    </div>

    <!-- Horizontal Scroll Wrapper -->
    <div class="flex flex-nowrap h-full" :style="{ width: `${projects.length * 100}%` }">
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="project-panel w-screen h-full flex items-center justify-center p-8 md:p-20 border-r border-white/5 bg-cyber-void relative"
      >
        <!-- Project Card -->
        <div class="glass-panel w-full max-w-4xl h-[60vh] flex flex-col md:flex-row relative group overflow-hidden hover:border-cyber-cyan/30 transition-colors duration-500">
          
          <!-- Image Placeholder (Now 3D Scene) -->
          <div class="w-full md:w-1/2 h-full bg-cyber-gray relative overflow-hidden">
            <div class="absolute inset-0 bg-cyber-gradient opacity-10 pointer-events-none"></div>
            
            <div class="absolute inset-0 z-10">
              <component :is="project.scene" />
            </div>
            
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span class="text-[10rem] font-display font-bold text-white/5">{{ project.id }}</span>
            </div>
          </div>
          
          <!-- Content -->
          <div class="w-full md:w-1/2 h-full p-8 md:p-12 flex flex-col justify-between relative z-20 bg-cyber-void/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none">
            <div>
              <div class="flex items-center gap-4 mb-4">
                <span class="px-3 py-1 border border-white/20 rounded-full text-xs font-mono text-cyber-white/60">{{ project.year }}</span>
                <span class="px-3 py-1 border border-cyber-cyan/20 rounded-full text-xs font-mono text-cyber-cyan">{{ project.category }}</span>
              </div>
              <h3 class="text-4xl md:text-5xl font-display font-bold uppercase mb-6 leading-none text-cyber-white">{{ project.name }}</h3>
              
              <p class="text-cyber-white/80 mb-4 leading-relaxed font-light">
                {{ project.description }}
              </p>
              
              <p class="font-mono text-sm text-cyber-cyan border-l-2 border-cyber-cyan pl-4 py-1">
                {{ project.stack }}
              </p>
            </div>
            
            <button class="flex items-center gap-2 text-cyber-white hover:text-cyber-cyan transition-colors group/btn mt-6">
              <span class="uppercase tracking-widest text-sm font-bold">Consult</span>
              <PhCaretRight :size="20" class="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
