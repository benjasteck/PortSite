<script setup>
import Navar from './navar.vue'
import navar from './navar.vue'
import greenBackground from '@/assets/images/greenBackground.png'
import MyVideo from '@/assets/images/Sequence 01.mp4'
</script>

<template>
  <div id="header">
    <div class="headerBackgroundMask">
      <img class="backgroundImg" :src="greenBackground" alt="" />
      <div class="modelWrapper">
        <model-viewer
          id="laptopModel"
          src="/Laptop_High-Polay_HP_cycles_blend.glb"
          alt="3D laptop"
          camera-controls
          disable-zoom
          disable-pan
          disable-tap
          interpolation-decay="200"
          interaction-prompt="none"
          camera-orbit="45deg 55deg 50m"
          exposure="1.0"
          shadow-intensity="3"
          @Load="handleModelLoad()"
          style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
          "
        ></model-viewer>
      </div>
    </div>

    <div class="container">
      <navar />
      <div class="header-text-container">
        <div class="header-text">
          <p class="headerTitle" v-html="headerTitle"></p>
          <h1 id="headerDesc" v-html="headerDesc"></h1>
        </div>
        <div class="glassParts">
          <div class="glass1">
            <h3>{{ texts.glassTitle }}</h3>
            <h4>{{ texts.glassSubtitle }}</h4>
            <p>{{ texts.glassText }}</p>
          </div>
          <div class="glass2">
            <video :src="MyVideo" class="glassVid" autoplay muted loop playsinline></video>
          </div>
        </div>
      </div>
      <div class="headerBottomText">
        <h3>{{ texts.headerBottomTitle }}</h3>
        <p v-html="texts.headerBottomText"></p>
      </div>
      <div class="HeaderBottomTextMid">
        <p>{{ texts.headerBottomTextMid }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    headerTitle: {
      type: String,
      required: true,
    },
    headerDesc: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      currentLang: 'en',
      isExpanded: false,
      overriddenDesc: null,
      overriddenTitle: null,
      texts: {
        en: {
          headerTitle: 'BENJN STECKMETZ',
          headerDesc:
            "Hi, I'm <span>Benjamin</span> A Multimedia Design student based in Denmark, <br>turning ideas into digital work. This is where I share my best projects and progress.<br> Design. Direction. Detail.",
          headerBottomTitle: 'Design, Code, Detail',
          headerBottomText:
            'My mission when designing and coding<br> is to be unique and challange norms',
          headerBottomTextMid: 'Explore more',
          glassTitle: 'MY SKILLS',
          glassSubtitle: 'Design. Code. Deliver.',
          glassText:
            'UX/UI Design · Frontend Dev · Branding Photoshop · Illustrator · Figma · React Node.js · SQL · Fullstack Projects',
        },
      },
    }
  },
  computed: {
    texts() {
      const langContent = this.texts[this.currentLang]
      return {
        ...langContent,
        headerDesc: this.overriddenDesc || langContent.headerDesc,
        headerTitle: this.overriddenTitle || langContent.headerTitle,
      }
    },
  },
  mounted() {
    const onLoad = () => {
      const delay = window.innerWidth < 1470 ? 2000 : 3500
      setTimeout(() => {
        const header = document.getElementById('header')
        if (header) {
          header.classList.add('headerExpanded')
        }
      }, delay)
    }

    if (document.readyState === 'complete') {
      onLoad() // already loaded
    } else {
      window.addEventListener('load', onLoad)
    }
    setTimeout(() => {
      this.isBlurred = true // Start blur at 5s
    }, 5000)
    setTimeout(() => {
      this.isBlurred = false // Remove blur much later
    }, 6000) // e.g., remove blur after 10 seconds
    setTimeout(() => {
      this.isExpanded = true // Change text at 6s (while still blurred)
    }, 6000)
    const delay = window.innerWidth < 1470 ? 2400 : 3500

    setTimeout(() => {
      this.overriddenTitle = 'BENJAMIN<br>STECKMETZ'
      this.overriddenDesc = `Hi, I'm <span>Benjamin</span> A Multimedia Design student based in <br>Denmark, turning ideas into digital work. <br>This is where I share my best projects and progress.`
    }, delay)
  },
  name: 'laptopModel',
  methods: {
    handleModelLoad() {
      const modelViewer = document.querySelector('#laptopModel')
      console.log('Model loaded!')

      let angle = 40
      const initialAngle = angle
      let elevation = 60
      const initialElevation = elevation
      let tick = 0
      let radius = 50
      const minRadius = 5
      const maxRadius = 50

      modelViewer.cameraOrbit = `${angle}deg ${elevation}deg ${radius}m`
      modelViewer.jumpCameraToGoal()

      setTimeout(() => {
        const interval = setInterval(() => {
          const elevationOscillation = -20 * Math.sin(tick / 45)
          const angleIncrement = 2 + 18 * Math.min(tick / 13, 1)
          angle = (angle + angleIncrement) % 360
          elevation = 60 + elevationOscillation

          modelViewer.cameraOrbit = `${angle}deg ${elevation.toFixed(2)}deg ${radius.toFixed(2)}m`
          modelViewer.jumpCameraToGoal()

          tick++

          if (tick > 95) {
            clearInterval(interval)

            const steps = 60 // how many frames to animate back
            let returnTick = 0

            const currentAngle = angle
            const currentElevation = elevation
            const currentRadius = radius

            const smoothReturn = () => {
              const t = returnTick / steps

              angle = lerp(currentAngle, initialAngle, t)
              elevation = lerp(currentElevation, initialElevation, t)
              radius = lerp(currentRadius, maxRadius, t) // back to max

              modelViewer.cameraOrbit = `${angle.toFixed(2)}deg ${elevation.toFixed(2)}deg ${radius.toFixed(2)}m`
              modelViewer.jumpCameraToGoal()

              returnTick++
              if (returnTick <= steps) {
                requestAnimationFrame(smoothReturn)
              }
            }

            smoothReturn()
          }
        }, 60) // ~60fps
      }, 1000) // 1s delay before animation starts
    },
  },
  beforeUnmount() {
    // optional cleanup
    window.removeEventListener('load', onLoad)
  },
}
</script>
