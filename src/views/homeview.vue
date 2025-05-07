<script setup>
import AboutMe from '@/components/Aboutme.vue'
import Portfolio from '@/components/Portfolio.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
</script>

<template>
  <AboutMe :texts="texts" />
  <Portfolio :texts="texts" />
  <Projects :texts="texts" />
  <Contact :texts="texts" />
</template>
