<script setup>
import logo from '@/assets/images/logo.png'
import enFlag from '@/assets/images/flag-united-kingdom-emoji-2048x1279-po023g13.png'
import dkFlag from '@/assets/images/flag-denmark-emoji-2048x1279-r54we2pz.png'
</script>

<template>
  <nav>
    <img :src="logo" class="logo" />

    <ul id="sidemenu">
      <li>
        <a href="/" id="headerHome"> {{ texts.headerHome }}</a>
      </li>
      <li>
        <a href="/" id="headerAbout">{{ texts.headerAbout }}</a>
      </li>
      <li>
        <a href="#services2" id="headerPortfolio">{{ texts.headerPortfolio }}</a>
      </li>
      <li>
        <a href="#portfolio" id="headerProject">{{ texts.headerProj }}</a>
      </li>
      <li>
        <a href="#contact" id="headerContact">{{ texts.headerContact }}</a>
      </li>
      <i class="fa-solid fa-xmark" @click="closemenu()"></i>
      <lan id="language">
        <a href="#" language="English" class="active" @click="setLanguage('en')"
          ><img :src="enFlag"
        /></a>
        <a href="#" language="Danish" @click="setLanguage('da')"><img :src="dkFlag" /></a>
      </lan>
    </ul>

    <i class="fa-solid fa-bars" onclick="openmenu()"></i>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      texts: {
        headerHome: 'Home',
        headerAbout: 'About',
        headerPortfolio: 'Portfolio',
        headerProj: 'Projects',
        headerContact: 'Contact',
      },
    }
  },
}
</script>
