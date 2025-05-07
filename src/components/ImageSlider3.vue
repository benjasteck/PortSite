<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import MovieCollectionImg from '@/assets/images/card111.PNG'
import TicketImg from '@/assets/images/card21.png'
import CategoryImg from '@/assets/images/card31.png'
import ItunesImg from '@/assets/images/card41.png'
import AttendenceImg from '@/assets/images/card51.png'
import TictacImg from '@/assets/images/card61.png'
import NetflixImg1 from '@/assets/images/card12.PNG'
import TicketImg1 from '@/assets/images/card22.png'
import TicketImg2 from '@/assets/images/card23.png'
import TicketImg3 from '@/assets/images/card21.png'
import CatImg1 from '@/assets/images/card31.png'
import CatImg2 from '@/assets/images/card32.png'
import CatImg3 from '@/assets/images/card34.png'
import CatImg4 from '@/assets/images/card33.png'
import ItunesImg1 from '@/assets/images/card41.png'
import AttImg1 from '@/assets/images/card51.png'
import AttImg2 from '@/assets/images/card52.png'
import TicImg1 from '@/assets/images/card61.png'

const imageModules = import.meta.glob('@/assets/images/*.{png,jpg,jpeg,PNG}', { eager: true })

const imageMap = {}
for (const path in imageModules) {
  const fileName = path.split('/').pop() // e.g., "htmlcard2.PNG"
  imageMap[fileName] = imageModules[path].default
}

const imageTrack = ref(null)

const expand = (src) => {
  // Do your expand logic here
  console.log('Expand:', src)
}

const showNetflix = () => {
  const contents = document.querySelectorAll('.content')
  contents.forEach((content) => {
    content.style.transform = 'translateY(-100%)'
    content.style.opacity = '0'
    content.style.height = '0'
    content.style.transition = 'none'
  })

  document.getElementById('netflixContent').style.transform = 'translateY(0px)'
  document.getElementById('netflixContent').style.opacity = '100%'
  document.getElementById('netflixContent').style.height = '100%'
  document.getElementById('content').style.height = '100%'
  document.getElementById('netflixContent').style.transition =
    'transform 1.5s, height 1.5s, opacity 6s'
}
function showTicket() {
  const contents = document.querySelectorAll('.content')
  contents.forEach((content) => {
    content.style.transform = 'translateY(-100%)'
    content.style.opacity = '0'
    content.style.height = '0'
    content.style.transition = 'none'
  })

  document.getElementById('ticketContent').style.transform = 'translateY(0px)'
  document.getElementById('ticketContent').style.opacity = '100%'
  document.getElementById('ticketContent').style.height = '100%'
  document.getElementById('content').style.height = '100%'
  document.getElementById('ticketContent').style.transition =
    'transform 1.5s, height 1.5s, opacity 6s'
}
function showCat() {
  const contents = document.querySelectorAll('.content')
  contents.forEach((content) => {
    content.style.transform = 'translateY(-100%)'
    content.style.opacity = '0'
    content.style.height = '0'
    content.style.transition = 'none'
  })
  document.getElementById('catContent').style.transform = 'translateY(0px)'
  document.getElementById('catContent').style.opacity = '100%'
  document.getElementById('catContent').style.height = '100%'
  document.getElementById('content').style.height = '100%'
  document.getElementById('catContent').style.transition = 'transform 1.5s, height 1.5s, opacity 6s'
}

function showItunes() {
  const contents = document.querySelectorAll('.content')
  contents.forEach((content) => {
    content.style.transform = 'translateY(-100%)'
    content.style.opacity = '0'
    content.style.height = '0'
    content.style.transition = 'none'
  })
  document.getElementById('tunesContent').style.transform = 'translateY(0px)'
  document.getElementById('tunesContent').style.opacity = '100%'
  document.getElementById('tunesContent').style.height = '100%'
  document.getElementById('content').style.height = '100%'
  document.getElementById('tunesContent').style.transition =
    'transform 1.5s, height 1.5s, opacity 6s'
}

function showAtt() {
  const contents = document.querySelectorAll('.content')
  contents.forEach((content) => {
    content.style.transform = 'translateY(-100%)'
    content.style.opacity = '0'
    content.style.height = '0'
    content.style.transition = 'none'
  })
  document.getElementById('attContent').style.transform = 'translateY(0px)'
  document.getElementById('attContent').style.opacity = '100%'
  document.getElementById('attContent').style.height = '100%'
  document.getElementById('content').style.height = '100%'
  document.getElementById('attContent').style.transition = 'transform 1.5s, height 1.5s, opacity 6s'
}

function showAi() {
  const contents = document.querySelectorAll('.content')
  contents.forEach((content) => {
    content.style.transform = 'translateY(-100%)'
    content.style.opacity = '0'
    content.style.height = '0'
    content.style.transition = 'none'
  })
  document.getElementById('aiContent').style.transform = 'translateY(0px)'
  document.getElementById('aiContent').style.opacity = '100%'
  document.getElementById('aiContent').style.height = '100%'
  document.getElementById('content').style.height = '100%'
  document.getElementById('aiContent').style.transition = 'transform 1.5s, height 1.5s, opacity 6s'
}
let isDragged = false

onMounted(() => {
  window.scrollTo(0, 0)

  let isDragged = false

  const track = imageTrack.value
  track.dataset.mouseDownAt = '0'
  track.dataset.prevPercentage = '0'

  const onMouseDown = (e) => {
    track.dataset.mouseDownAt = e.clientX
  }

  const onMouseMove = (e) => {
    if (track.dataset.mouseDownAt === '0') return

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX
    const maxDelta = window.innerWidth / 2
    const percentage = (mouseDelta / maxDelta) * -100
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -68)

    track.dataset.percentage = nextPercentage
    if (window.innerWidth > 1224) {
      if (Math.abs(mouseDelta) >= 1) {
        isDragged = true
      }

      track.animate(
        { transform: `translate(${nextPercentage}%, 0%)` },
        { duration: 1200, fill: 'forwards' },
      )

      for (const image of track.getElementsByClassName('image')) {
        image.animate(
          { objectPosition: `${100 + nextPercentage}% center` },
          { duration: 1200, fill: 'forwards' },
        )
      }
    }
  }
  const onMouseUp = () => {
    if (isDragged) {
      track.dataset.prevPercentage = track.dataset.percentage
    }
    track.dataset.mouseDownAt = '0'
  }

  window.addEventListener('mousedown', onMouseDown)
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)

  onUnmounted(() => {
    window.removeEventListener('mousedown', onMouseDown)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  })
})
</script>

<template>
  <div class="imageContainer">
    <h1 class="subtitle" id="contentTitle">Past Projects</h1>
    <div id="image-track" ref="imageTrack" data-mouse-down-at="0" data-prev-percentage="0">
      <div class="kort" id="kort1">
        <img class="image" :src="MovieCollectionImg" draggable="false" onclick="expand(this.src)" />
        <div class="kortLayer" id="kortLayer1">
          <h2 class="cardTitle" id="card1Title">Movie Collection</h2>
          <p class="cardBody" id="card1Body">
            A versatile program enabling users to browse, categorize, search, edit, and watch
            movies. It comes preloaded with two movies and allows effortless addition of new ones by
            simply providing the file ready for categorization Etc.
          </p>
          <a href="#content" class="btn3" @click="showNetflix()"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14.25"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="kort">
        <img class="image" :src="TicketImg" draggable="false" onclick="expand(this.src)" />
        <div class="kortLayer">
          <h2 class="cardTitle" id="card2Title">Ticket Master</h2>
          <p class="cardBody" id="card2Body">
            I designed a versatile ticketing system for customers to browse and book event tickets,
            With the transaction built on robust authorization. With admin and event coordinator
            roles to empower efficient event management.
          </p>
          <a href="#content" class="btn3" @click="showTicket()"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14.25"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="kort">
        <img class="image" :src="CategoryImg" draggable="false" onclick="expand(this.src)" />
        <div class="kortLayer">
          <h2 class="cardTitle" id="card3Title">Categorization Application</h2>
          <p class="cardBody" id="card3Body">
            A collaboration to create a prototype application for patient categorization by
            ailments. Admin and teacher roles enable seamless student-patient assignments, enhancing
            educational efficiency.
          </p>
          <a href="#content" class="btn3" @click="showCat()"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14.25"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="kort">
        <img class="image" :src="ItunesImg" draggable="false" onclick="expand(this.src)" />
        <div class="kortLayer">
          <h2 class="cardTitle" id="card4Title">Itunes Clone</h2>
          <p class="cardBody" id="card4Body">
            We created a user-friendly program for storing and managing MP3 music files. Users can
            effortlessly save, categorize, play, and edit their music collection, emphasizing
            simplicity due to limitless storage and categorization options.
          </p>
          <a href="#content" class="btn3" @click="showItunes()"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14.25"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="kort">
        <img class="image" :src="AttendenceImg" draggable="false" onclick="expand(this.src)" />
        <div class="kortLayer">
          <h2 class="cardTitle" id="card5Title">Attendance System</h2>
          <p class="cardBody" id="card5Body">
            We developed a student attendance recording program that utilizes a chip-scanning
            system. Users can confirm their attendance through the scanning process, and these
            records are efficiently stored and displayed for teachers' reference.
          </p>
          <a href="#content" class="btn3" @click="showAtt()"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14.25"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="kort">
        <img class="image" :src="TictacImg" draggable="false" onclick="expand(this.src)" />
        <div class="kortLayer">
          <h2 class="cardTitle" id="card6Title">Tic Tac Toe AI</h2>
          <p class="cardBody" id="card6Body">
            We created a Tic-Tac-Toe game with AI and human play options. The AI uses Minimax for a
            challenging experience and makes it almost impossible to win over, and the code's
            modularity allows for easy adaptation to other games such as chess.
          </p>
          <a href="#content" class="btn3" @click="showAi()"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14.25"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="kort">
        <div class="kortLayer">
          <h2 class="cardTitle" id="card7Title">Image Slider</h2>
          <p class="cardBody" id="card7Body">
            While not the most impressive application, It's still noteworthy as this was my first
            coding assignment ever.
          </p>
          <a href="#content" class="btn3" @click="showImg()"
            ><i class="fa-solid fa-angles-down"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  <div id="content">
    <div class="content" id="netflixContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="netflixTitle">Netflix Clone</h1>
        <div class="row1">
          <div class="content-col-1 hidden" v-observe-show>
            <p class="aboutDesc" id="aboutDesc">
              As an early project, i undertook the development of a Netflix-inspired application
              with a primary emphasis on the backend functionality. In this project, the goal was
              not only to construct a simple user interface but also to demonstrate the depth of my
              backend skills encompassing database management and intricate logic. <br /><br />
              The application commenced with a database housing two default movies, serving as a
              foundational starting point. To foster user engagement, i implemented a feature
              allowing users to effortlessly expand the movie collection by adding their own
              selections. This flexibility extended to the ability to categorize movies according to
              the user's preferences, effectively personalizing their virtual streaming library.
              <br /><br />
              Moreover, the system offered a comprehensive editing capability. Users had the
              autonomy to modify various aspects of each movie entry, such as altering titles or
              adjusting ratings, providing them with a tailored and dynamic movie management
              experience. This project not only showcased backend prowess but also illustrated
              dedication to user-friendly design and interactive functionality, however hard that
              might be in FXML.
            </p>
          </div>
          <div class="content-col-2 hidden2" v-observe-show>
            <img class="contentimg" :src="NetflixImg1" />
          </div>
        </div>
        <div class="row1">
          <div class="content2-col-1 hidden" v-observe-show>
            <img class="contentimg" :src="MovieCollectionImg" />
          </div>
          <div class="content2-col-2 hidden2" v-observe-show>
            <p class="aboutDesc" id="aboutDesc2">
              Reflecting on this project, it stands out as a pivotal moment in my programming
              journey. I undertook the development of an application that demanded the creation of
              intricate features. One of these was a dynamic search bar, offering users the ability
              to fine-tune their searches with options for categories or movie names. This not only
              showcased my problem-solving skills but also significantly enhanced the application's
              user-friendliness. <br /><br />
              Another noteworthy achievement was the successful implementation of synchronized video
              player controls, including a slider to navigate through videos seamlessly. This
              addition not only enriched the user experience but also required mastering complex
              logic.
              <br /><br />
              Furthermore, the project served as a comprehensive exploration of SQL. It afforded
              hands-on experience in various aspects, such as creating, updating, and deleting
              entries within the database. The understanding of key relationships to connect movies
              with categories added depth to my SQL proficiency.
              <br /><br />
              In summary, this project was more than just an assignment; it was a transformative
              learning journey. It broadened my technical expertise, honed my problem-solving
              abilities, and deepened my appreciation for the multifaceted nature of software
              development
            </p>
            <div class="social-icons">
              <h2>
                Code:
                <a href=""
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="27"
                    width="25"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="#262635"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content" id="ticketContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="ticketTitle">Event Manager</h1>
        <div class="row1">
          <div class="content-col-1 hidden" v-observe-show>
            <p class="aboutDesc" id="aboutDesc3">
              In a bigger project, I created a Ticket Master system with three distinct roles:
              customers, event coordinators, and admins. Admins had the unique ability to create
              other admins and coordinators, sharing similar capabilities. Coordinators oversaw
              event management and customer orders, while customers could seamlessly purchase
              tickets. <br /><br />
              The project's core challenge was implementing a robust authentication system, ensuring
              secure transactions. This emphasis on data security significantly deepened my
              understanding of user role management. It highlighted the critical nature of secure
              transactions in software development, enriching my overall knowledge in the domain.
              <br /><br />
              This experience broadened my expertise in developing user-oriented systems and
              reinforced the significance of safeguarding data integrity. It served as a valuable
              lesson, shaping my approach towards secure and user-friendly software solutions.
              <br /><br />
              The outcome of this process involved customers adding their information to the event
              coordinators' database. A sample ticket, displayed to the right, showcases details
              like name and start date. This seamless integration of customer data into the system
              and the structured ticket format marked the successful culmination of the project.
            </p>
          </div>
          <div class="content-col-2 hidden2" v-observe-show>
            <img class="contentimg" :src="TicketImg1" />
          </div>
        </div>
        <img class="contentimgbig hidden" :src="TicketImg2" />
        <p class="aboutDescbig hidden2" id="aboutDescbig1">
          In the image above, customers navigated a clear ticket ordering interface. In this
          snapshot, unedited by coordinators, the labels are visible, ready for customization. This
          illustrates the coordinator's ability to uniquely tailor event tickets. While I aimed for
          a polished design using FXML, the focus remained on functionality, not aesthetics,
          reflecting the grading criteria. The limited timeframe led to prioritizing functionality
          over aesthetics, resulting in a polished main screen and ticket interface but everything
          else being basic. Investing more time in interface design wouldn't have impacted the grade
          significantly, hence the focus on core functionality.
        </p>
        <div class="row1">
          <div class="content2-col-1 hidden" v-observe-show>
            <img class="contentimg" :src="TicketImg3" />
          </div>
          <div class="content2-col-2 hidden2" v-observe-show>
            <p class="aboutDesc" id="aboutDesc4">
              In the image to the left, customers encountered a central display of events,
              complemented by a login button and a search bar.<br />
              The project's success was underscored by flawless authentication implementation, the
              paramount objective in this endeavor. <br /><br />
              Reflecting on this project, it was pivotal in teaching me authentication intricacies.
              It also familiarized me with the MVC pattern and the implementation of GoF design
              patterns, particularly Singleton. Beyond technical aspects, the project provided
              valuable exposure to client-coder relationships, emphasizing the significance of
              meticulous planning for meetings and sprints.
              <br /><br />
              Utilizing tools like Trello streamlined our task management, enabling efficient task
              assignment among group members. This experience not only enhanced my technical skills
              but also honed my collaboration and project management abilities, preparing me for
              future, client-oriented software development endeavors.
            </p>
            <div class="social-icons">
              <h2>
                Code:
                <a href=""
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="27"
                    width="25"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="#262635"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content" id="catContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="catTitle">Categorization Application</h1>
        <div class="row1">
          <div class="content-col-2 hidden" v-observe-show>
            <img class="contentimg" :src="CatImg1" />
          </div>
          <div class="content-col-2 hidden2" v-observe-show>
            <img class="contentimg" :src="CatImg2" />
          </div>
          <p class="aboutDesc hidden" id="aboutDescbig2">
            As part of a project, we developed an application tailored for student use, enabling the
            classification and categorization of fictional patients across various categories and
            sub-categories. The system featured distinct roles: admin, teacher, and student.
            <br /><br />
            Administrators held the authority to create other admins and teachers, establishing a
            hierarchical structure. Teachers, in turn, could generate patients and link students to
            these cases. Notably, teachers possessed the capability to create templates,
            streamlining the process of generating multiple unique patients for different student
            groups within a class.
            <br /><br />
            Students accessed the system to view their assigned patients, delve into patient
            details, and contribute to their reports. The image above displays the intuitive report
            interface, comprising various categories and subcategories for detailed information
            editing. This project not only demonstrated our technical skills but also emphasized
            user roles and seamless data management, offering a comprehensive solution for
            educational purposes.
          </p>
        </div>
        <div class="row1">
          <div class="content-col-1 hidden" v-observe-show>
            <p class="aboutDesc" id="aboutDesc5">
              This project was a collaborative effort with SOSU, a school specializing in social and
              health education, where nursing and patient care are central. SOSU served as our
              client, leading to structured sprint meetings. They played a pivotal role in design
              decisions and functionality, shaping the project's direction and ensuring its
              alignment with real-world healthcare needs. <br /><br />
              In the image to the left, students access the application, finding a list of their
              assigned patients. Clicking on a patient reveals detailed information. The two buttons
              in the lower left corner lead them to the corresponding screens displayed at the top,
              facilitating smooth navigation and enhancing user experience.
              <br /><br />
              The deliberate choice of having appropriately sized buttons and text, along with
              detailed explanations for every feature, reflects our intentional design. Simplicity
              was paramount for our client, leading us to ensure clarity in every aspect. Moreover,
              the inclusion of question marks next to titles allows students to access detailed
              explanations, enhancing user understanding and engagement with the application.
            </p>
          </div>
          <div class="content-col-2 hidden2" v-observe-show>
            <img class="contentimg" :src="CatImg3" />
          </div>
        </div>
        <div class="row1">
          <div class="content2-col-1 hidden" v-observe-show>
            <img class="contentimg" :src="CatImg4" />
          </div>
          <div class="content2-col-2 hidden2" v-observe-show>
            <p class="aboutDesc" id="aboutDesc6">
              In the teacher's view, depicted here, the process of assigning students to patients is
              simplified. Teachers can effortlessly sort and search for patients, select students,
              and establish connections with a simple click. The interface features three columns,
              allowing seamless management. <br /><br />
              Additionally, teachers have the option to create templates, essentially opening the
              categorization screen shown in the images at the top. In this screen, teachers can
              input pre-made data, save it, and apply it to new patients or multiple unique
              patients, streamlining the data entry process effectively.
              <br /><br />
              The application's complexity was substantial, involving multiple objects with diverse
              properties like students, teachers, admins, patients, and templates. To manage this
              complexity, adhering to programming principles was crucial. We meticulously followed
              these principles in class and method design, ensuring effective communication between
              classes and maintaining coherent naming conventions.
              <br /><br />
              This experience proved invaluable in steering clear of tangled and convoluted code. By
              embracing structured practices, we successfully avoided spaghetti code, ensuring the
              application's robustness and maintainability. In summary, this project was vast,
              demanding a level of internal planning we hadn't previously encountered. It challenged
              us to new heights, emphasizing the importance of meticulous organization and
              structured development methodologies. Navigating this complexity provided invaluable
              insights, refining our approach to future large-scale endeavors.
            </p>
            <div class="social-icons">
              <h2>
                Code:
                <a href=""
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="27"
                    width="25"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="#262635"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content" id="tunesContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="tunesTitle">Itunes Clone</h1>
        <div class="row1">
          <div class="content2-col-1 hidden" v-observe-show>
            <img class="contentimg" :src="ItunesImg1" />
          </div>
          <div class="content2-col-2 hidden2" v-observe-show>
            <p class="aboutDesc" id="aboutDesc7">
              This application shares similarities with the movie collection project, functioning as
              a file categorization system, specifically for MP3 files. Users can add songs and
              freely categorize and edit them, mirroring the movie application's functionality.
              These customized categories, titles, and other details are stored in a database,
              enhancing user organization and accessibility.
            </p>
            <div class="social-icons">
              <h2>
                Code:
                <a href=""
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="27"
                    width="25"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="#262635"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content" id="attContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="attTitle">Attendance System</h1>
        <div class="row1">
          <div class="content-col-1">
            <p class="aboutDesc" id="aboutDesc8">
              This application served as a student attendance tracker, where students would scan a
              chip at a class screen, recording their name, date, and time upon scanning. The data
              was then seamlessly transmitted to a database, accessible for teachers on their end.
              This efficient system simplified attendance tracking, ensuring accurate and real-time
              recording of student attendance.
            </p>
          </div>
          <div class="content-col-2">
            <img class="contentimg" :src="AttImg1" />
          </div>
        </div>
        <img class="contentimgbig" :src="AttImg2" />
      </div>
    </div>
    <div class="content" id="aiContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="aiTitle">Tic-Tac-Toe AI</h1>
        <div class="row1">
          <div class="content2-col-1">
            <img class="contentimg" :src="TicImg1" />
          </div>
          <div class="content2-col-2">
            <p class="aboutDesc" id="aboutDesc9">
              In this project, i delved into the realm of AI, particularly through a Tic-Tac-Toe
              game featuring an AI opponent. The AI operates on the mini-max principle, calculating
              optimal moves by exploring all possible game states. By assigning positive values to
              favorable moves, it determines the easiest path to victory or a draw. Unlike other
              applications, this one doesn't require a database connection due to its nature.
              However, the attributes and objects are designed in a way that seamlessly integrates
              with a database, ensuring flexibility in future implementations. Prior to this, we had
              also developed a simpler version using a Rock-Paper-Scissors game.
            </p>
            <div class="social-icons">
              <h2>
                Code:
                <a href=""
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="27"
                    width="25"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="#262635"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    /></svg
                ></a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
