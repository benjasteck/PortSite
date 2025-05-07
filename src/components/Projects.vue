<script setup>
import netflixImage from '@/assets/images/netflix.png'
import chatsyImage from '@/assets/images/htmlcard2.PNG'
import clientImage from '@/assets/images/Photography.PNG'
</script>

<template>
  <div id="portfolio" class="hidden" v-observe-show>
    <div class="container2">
      <h1 class="subtitle" id="proTitle">{{ texts.proTitle }}</h1>
      <div class="work-list">
        <div class="work">
          <img :src="netflixImage" />
          <div class="layer">
            <h3 id="netflixTitle">{{ texts.netflixTitle }}</h3>
            <p id="netflixDesc">{{ texts.netflixDesc }}</p>
            <a href="/"
              ><svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 512 512">
                <path
                  fill="#810054"
                  d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="work">
          <img :src="chatsyImage" />
          <div class="layer">
            <h3 id="mapTitle">{{ texts.mapTitle }}</h3>
            <p id="mapDesc">{{ texts.mapDesc }}</p>
            <a href="/indexChatsy.html"
              ><svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 512 512">
                <path
                  fill="#810054"
                  d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="work">
          <img :src="clientImage" />
          <div class="layer">
            <h3 id="horTitle">{{ texts.horTitle }}</h3>
            <p id="horDesc">{{ texts.horDesc }}</p>
            <a href="/PHOTO.html">
              <svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 512 512">
                <path
                  fill="#810054"
                  d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <a href="#" class="btn" id="proBtn">{{ texts.proBtn }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: {
        proTitle: 'Ongoing And Future Projects',
        netflixTitle: 'Online Netflix Clone',
        netflixDesc:
          'A website aimed at improving my skills with the use of javascript and animations. especially in regard to properly position the many components of the site such as movies etc, and how to animate these, while keeping the site optimized.',
        mapTitle: 'Chatsy',
        mapDesc:
          'A chatting website aimed at improving my skills with API and sending data. It is similar to many chatting sites with the exception of not using a database for anything but the users. Futhermore it is also to improve my skills on using jS to manipulate html components as i want the site to be highly customizeable.',
        horTitle: 'Client Work',
        horDesc:
          'Ive recently begun working freelance for clients. currently im working on a website for a start-up photographer. Mostly a simple but luxerious website with a lot of attention to design. Its my first proper professional work, with communication and meetings with clients. The site shown here is a demo',
        proBtn: 'sumbmit',
      },
    }
  },
}
</script>
