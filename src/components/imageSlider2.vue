<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import VideoCv from '@/assets/images/videocv.jpg'
import IndesignImg from '@/assets/images/CaSRGGFEpture.PNG'
import PhotoShopImg from '@/assets/images/yk1udjixfob31.jpg'
import IllustratorImg from '@/assets/images/maxresdefault.jpg'
import LogoImg from '@/assets/images/myLogo.png'
import PamphletImg from '@/assets/images/paperin.PNG'
import EFBImg1 from '@/assets/images/efb1.jpg'
import EFBImg2 from '@/assets/images/efb2.png'
import EFBImg3 from '@/assets/images/efb3.png'
import EFBImg4 from '@/assets/images/efb4.png'
import IconImg from '@/assets/images/illIcon.jpg'

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
  <div class="imageContainer" id="pastProjects">
    <h1 class="subtitle" id="contentTitle">Past Projects</h1>
    <div id="image-track" ref="imageTrack" data-mouse-down-at="0" data-prev-percentage="0">
      <div class="kort" id="kort1">
        <img class="image" :src="VideoCv" draggable="false" onclick="expand(this.src)" />
        <div class="kortLayer" id="kortLayer1">
          <h2 class="cardTitle" id="card1Title">MY video CV</h2>
          <p class="cardBody" id="card1Body">A simple video CV explaining who i am.</p>
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
        <img class="image" :src="IndesignImg" draggable="false" onclick="expand(this.src)" />
        <div class="kortLayer">
          <h2 class="cardTitle" id="card2Title">InDesign</h2>
          <p class="cardBody" id="card2Body">
            Ive used Indesign plenty and ive become efficient at designing pages and material for
            reading.
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
        <img class="image" :src="PhotoShopImg" draggable="false" onclick="expand(this.src)" />
        <div class="kortLayer">
          <h2 class="cardTitle" id="card3Title">Photoshop</h2>
          <p class="cardBody" id="card3Body">
            I have a good grasp on photoshop and its contents however i still have planty room for
            improvement.
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
        <img class="image" :src="IllustratorImg" draggable="false" onclick="expand(this.src)" />
        <div class="kortLayer">
          <h2 class="cardTitle" id="card4Title">Illustrator</h2>
          <p class="cardBody" id="card4Body">
            I have a good grasp on Illustrator but again, room for improvement.
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
        <img class="image" :src="LogoImg" draggable="false" onclick="expand(this.src)" />
        <div class="kortLayer">
          <h2 class="cardTitle" id="card5Title">Logo Development</h2>
          <p class="cardBody" id="card5Body">
            Using Illustrator ive made several logos for school and personal use.
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
        <img class="image" :src="PamphletImg" draggable="false" onclick="expand(this.src)" />
        <div class="kortLayer">
          <h2 class="cardTitle" id="card6Title">Pamphlet design</h2>
          <p class="cardBody" id="card6Body">As a part of a project i made a Pamphlet.</p>
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
    </div>
  </div>
  <div id="content">
    <div class="content" id="netflixContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="netflixTitle">My video CV</h1>
        <div class="row1">
          <div class="content-col-1">
            <p class="aboutDesc" id="aboutDesc">
              A short video CV showing me, who i am and my past experience.
            </p>
          </div>
          <div class="content-col-2">
            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/DiIUhdMWH5s">
            </iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="content" id="ticketContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="ticketTitle">InDesign</h1>
        <div class="row1">
          <div class="content-col-1 hidden" v-observe-show>
            <p class="aboutDesc" id="aboutDesc3">
              In a major UX project, we were tasked with following a full design process to
              conceptualize and develop an app. For our project, we selected an existing football
              club with the goal of modernizing their brand and online presence through the creation
              of a new, user-friendly mobile application. <br /><br />
              We began the project by brainstorming initial ideas for the app, as illustrated to the
              left. This phase involved documenting every potential feature we believed could
              enhance the user experience. Through extensive market analysis and research into the
              habits and expectations of the potential user base, we refined our ideas to focus on
              what was truly essential.
              <br /><br />
              The final concept aimed to match the core features offered by competitors—such as
              access to club news, match statistics, and ticket management—while also introducing a
              unique element: the integration of a universal QR code system. This innovation would
              allow users to scan a single QR code to manage tickets, season cards, in-app sales,
              and more, significantly improving convenience and streamlining the user experience.
              This focus on differentiation and practicality became a central part of the app’s
              identity.
            </p>
          </div>
          <div class="content-col-2 hidden2" v-observe-show>
            <img class="contentimg" :src="EFBImg1" />
          </div>
        </div>
        <div class="row1">
          <div class="content2-col-1 hidden" v-observe-show>
            <img class="contentimg" :src="EFBImg2" />
          </div>
          <div class="content2-col-2 hidden2" v-observe-show>
            <p class="aboutDesc" id="aboutDesc4">
              Through additional analysis, we identified the key pain points and struggles
              experienced by potential users. This allowed us to refine our concept further by
              introducing new features that addressed these challenges and removing redundant
              elements that did not add value to the user experience. By utilizing models like the
              one shown to the right, we were able to clearly assess which features made sense to
              include and which should be discarded. <br /><br />
              Building on this foundation, we moved into more detailed stages of development,
              conducting targeted user research and constructing a comprehensive information
              architecture for the app. To guide our decisions and maintain a user-centered
              approach, we created detailed personas based on our research, one of which is
              presented in the image below. This persona helped ensure that every design choice
              aligned with the needs, goals, and behaviors of the intended user base.
            </p>
          </div>
        </div>
        <div class="imagerow2">
          <div class="contentimgbig hidden" v-observe-show>
            <img class="contentimg" :src="EFBImg4" />
          </div>
          <div class="contentimgbig hidden2" v-observe-show>
            <img class="contentimg" :src="EFBImg3" />
          </div>
        </div>

        <div class="row1">
          <div class="content2-col-1 hidden" v-observe-show>
            <p class="aboutDesc" id="aboutDesc41">
              As part of the project, we also developed a Business Model Canvas to outline the value
              proposition of the app in relation to the required resources and financial investment.
              This strategic tool was essential for communicating the business viability of the
              concept—particularly when presenting it to stakeholders or potential funders.
              <br /><br />
              The canvas helped us clearly demonstrate how the app could generate value and,
              ultimately, profit. Two key insights emerged from this analysis. First, the app’s
              ability to collect user data could open up opportunities for monetization through
              targeted marketing and potential data partnerships. Second, the app would enhance user
              engagement on match days—not only by encouraging more fans to attend games, but also
              by driving increased spending at the stadium through exclusive in-app offers and
              sales. These factors strengthened the overall business case for the app and
              highlighted its potential for long-term sustainability.
            </p>
          </div>
          <div class="content2-col-2 hidden2" v-observe-show>
            <p class="aboutDesc" id="aboutDesc42">
              All of the analyses and models presented here—along with several additional
              ones—contributed to the creation of a cohesive brand identity and a complete wireframe
              for the app. These steps ensured that the final product not only aligned with the
              football club’s existing image but also delivered a user experience tailored to the
              needs and expectations of its fan base. <br /><br />
              Ultimately, we compiled all components of the project into a single, comprehensive
              sketch board, which can be seen below. This board brings together every element of our
              process—from initial brainstorming to final wireframes—organized in a clean, visually
              consistent layout that reflects the same design principles used throughout the app
              itself. It serves as both a summary and a visual presentation of the full UX journey
              from concept to near-completion.
            </p>
          </div>
        </div>
        <img class="contentimg hidden" v-observe-show :src="IndesignImg" />
      </div>
    </div>

    <div class="content" id="catContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="catTitle">Photoshop</h1>
        <div class="row1">
          <div class="content-col-1 hidden" v-observe-show>
            <p class="aboutDesc" id="aboutDesc5">
              By now, I have gained substantial hands-on experience with Adobe Photoshop. My work
              has included everything from basic photo retouching to more advanced tasks such as
              seamlessly blending multiple images using layer masks. I would consider myself at an
              intermediate level, and I’m confident in my ability to quickly learn and adapt to new
              tools or techniques as needed. My approach is both creative and efficient, ensuring
              high-quality results across a range of visual editing tasks. <br /><br />
              I've used Photoshop in both academic and professional contexts—for example, preparing
              visuals for UX presentations, creating marketing material mockups, and editing assets
              for websites and social media. I'm also comfortable integrating Photoshop into broader
              design workflows, including using it alongside tools like Illustrator, Figma, or After
              Effects when needed.
            </p>
          </div>
          <div class="content-col-2 hidden2" v-observe-show>
            <img class="contentimg" :src="PhotoShopImg" />
          </div>
        </div>
      </div>
    </div>

    <div class="content" id="tunesContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="tunesTitle">Illustrator</h1>
        <div class="row1">
          <div class="content2-col-1 hidden" v-observe-show>
            <img class="contentimg" :src="IconImg" />
          </div>
          <div class="content2-col-2 hidden2" v-observe-show>
            <p class="aboutDesc" id="aboutDesc7">
              I have worked extensively with Adobe Illustrator, creating a range of visuals both for
              personal enjoyment and for practical use in school and personal projects. Examples
              include designing custom icons—such as the home icon shown in the image—as well as
              producing artwork and graphical assets for various applications. <br /><br />
              I am familiar with many of Illustrator’s core tools and techniques, including vector
              drawing, path editing, and working with typography and color systems. I feel confident
              in my ability to quickly master any additional features as needed, allowing me to
              adapt flexibly to different types of design work.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="content" id="attContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="attTitle">Logo Development</h1>
        <div class="row1">
          <div class="content-col-1 hidden" v-observe-show>
            <p class="aboutDesc" id="aboutDesc8">
              I have experience in logo development, working across personal projects and academic
              assignments. My process typically begins with hand-drawn sketching to explore a wide
              range of concepts and visual directions before moving into digital refinement. I place
              a strong emphasis on ensuring that each logo communicates the brand’s core identity
              clearly and memorably. <br /><br />
              When developing logos, I focus on creating designs that are scalable, versatile, and
              timeless. I often incorporate classic design principles such as balance, proportion,
              and the use of frameworks like the golden ratio or grid systems to achieve visual
              harmony and structural integrity. Throughout the process, I work iteratively—moving
              from rough sketches to polished vector designs in Illustrator—while ensuring that
              feedback is integrated thoughtfully. My goal is always to deliver logos that not only
              look striking but also function effectively across different platforms, from digital
              applications to print materials.
            </p>
          </div>
          <div class="content-col-2 hidden2" v-observe-show>
            <img class="contentimg" :src="LogoImg" />
          </div>
        </div>
      </div>
    </div>
    <div class="content" id="aiContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="aiTitle">Pamphlet Design</h1>
        <div class="row1">
          <div class="content2-col-1 hidden" v-observe-show>
            <img class="contentimg" :src="PamphletImg" />
          </div>
          <div class="content2-col-2 hidden2" v-observe-show>
            <p class="aboutDesc" id="aboutDesc9">
              As part of a project, we designed a promotional pamphlet for the city of Esbjerg, with
              two sample pages shown in the image. This was one of my first major projects utilizing
              both Adobe InDesign and Illustrator in combination. Despite being relatively new to
              the tools at the time, my creativity, attention to detail, and determination to
              deliver a high-quality product resulted in a strong and cohesive final piece. The
              project highlights not only my early technical development but also my natural drive
              to achieve professional results through thoughtful layout, typography, and visual
              storytelling.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="content" id="imgContent">
      <div class="contentContainer">
        <h1 class="subtitleContent" id="imgTitle">Image-Slider</h1>
        <div class="row1">
          <div class="content2-col-1">
            <img class="contentimg" src="" />
          </div>
          <div class="content2-col-2">
            <p class="aboutDesc" id="aboutDesc10">
              Simple image slider. This was my very first project, however as its so simple this is
              just a temporary entry.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
