<script setup></script>

<template>
  <div id="services">
    <div class="container2 scroll-item" id="services2">
      <h1 class="subtitle" id="portTitle">{{ texts.portTitle }}</h1>
      <div class="services-list">
        <div class="services hidden" v-observe-show>
          <svg xmlns="http://www.w3.org/2000/svg" height="55" width="60" viewBox="0 0 640 512">
            <path
              fill="#ffffff"
              d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3 .8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2 .6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7 .8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
            />
          </svg>
          <font-awesome-icon :icon="['fas', 'code']" />
          <h2>Java/FXML</h2>
          <p id="portJava">{{ texts.portJava }}</p>
          <a href="/Java" id="portBtn">{{ texts.portBtn }}</a>
        </div>
        <div class="services hidden" v-observe-show>
          <svg xmlns="http://www.w3.org/2000/svg" height="55" width="60" viewBox="0 0 640 512">
            <path
              fill="#ffffff"
              d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
            />
          </svg>
          <h2>C#/HTML</h2>
          <p id="portHTML">{{ texts.portHTML }}</p>
          <a href="/CSharp" id="portBtn2">{{ texts.portBtn }}</a>
        </div>
        <div class="services hidden" v-observe-show>
          <svg xmlns="http://www.w3.org/2000/svg" height="55" width="60" viewBox="0 0 640 512">
            <path
              fill="#ffffff"
              d="M256 0L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224c0-35.3 28.7-64 64-64zM476 106.7C471.5 100 464 96 456 96s-15.5 4-20 10.7l-56 84L362.7 169c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l80 0 48 0 144 0c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144zM336 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 128l96 0 0 256 0 32c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32 160 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64zm8 64c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm0 104c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm0 104c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm336 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"
            />
          </svg>
          <h2>PhotoShop and Illustrator</h2>
          <p id="port3D">{{ texts.port3D }}</p>
          <a href="/Adobe" id="portBtn3">{{ texts.portBtn }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: {
        portTitle: 'My Portfolio',
        portJava:
          'I have plenty experience working with Java, FXML and SQL. I have successfully completed numerous projects, several of which are available for viewing through the following link.',
        portHTML:
          "I've been coding websites using HTML, CSS, JavaScript/typescript, and C#. As a result, I have a number of projects at this time. You can view some of these projects by clicking on the link below.",
        port3D:
          'In my ambition to be a website developer, ive aquired skills in multiple of Adobes programs, such as Illustrator, Photoshop and After Effects. To this end ive completed multiple images,logos and videos for future reference and knowledge',
        portBtn: 'Learn more',
      },
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const items = document.querySelectorAll('#services .scroll-item')
      const windowHeight = window.innerHeight

      items.forEach((item) => {
        const rect = item.getBoundingClientRect()

        if (rect.top < windowHeight) {
          const offset = (rect.top - windowHeight) / 12
          item.style.transform = `translateY(${offset}px)`
        }
      })
    },
  },
}
</script>
