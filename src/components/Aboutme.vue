<script setup>
import MyPic from '@/assets/images/migselv.png'
</script>

<template>
  <div id="about">
    <div class="container2">
      <div class="row">
        <div class="about-col-1">
          <img :src="MyPic" class="hidden" v-observe-show />
        </div>
        <div class="about-col-2 hidden2" v-observe-show>
          <h1 class="subtitle" id="aboutTitle">{{ texts.aboutTitle }}</h1>
          <p class="aboutDesc" id="aboutDesc">{{ texts.aboutDesc }}</p>

          <div class="tab-titles">
            <p
              class="tab-links"
              :class="{ 'active-link': activeTab === 'skills' }"
              @click="setTab('skills')"
              id="skillHeader"
            >
              {{ texts.skillHeader }}
            </p>
            <p
              class="tab-links"
              :class="{ 'active-link': activeTab === 'experience' }"
              @click="setTab('experience')"
              id="expHeader"
            >
              {{ texts.expHeader }}
            </p>
            <p
              class="tab-links"
              :class="{ 'active-link': activeTab === 'education' }"
              @click="setTab('education')"
              id="eduHeader"
            >
              {{ texts.eduHeader }}
            </p>
          </div>

          <div class="tab-contents" v-show="activeTab === 'skills'" id="skills">
            <ul>
              <li id="skillsText" v-html="texts.skillsText"></li>
              <li id="expText" v-html="texts.expText"></li>
              <li id="eduText" v-html="texts.eduText"></li>
              <!-- Using v-html to display content -->
            </ul>
          </div>

          <!-- Experience Tab -->
          <div class="tab-contents" v-show="activeTab === 'experience'" id="experience">
            <ul>
              <li id="eduText" v-html="texts.xp23"></li>
              <li id="eduText" v-html="texts.xp19"></li>
              <li id="eduText" v-html="texts.xp18"></li>
              <li id="eduText" v-html="texts.xp13"></li>
            </ul>
          </div>

          <!-- Education Tab -->
          <div class="tab-contents" v-show="activeTab === 'education'" id="education">
            <ul>
              <li id="eduText" v-html="texts.edu21"></li>
              <li id="eduText" v-html="texts.edu17"></li>
              <li id="eduText" v-html="texts.edu07"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'skills', // Default active tab
      texts: {
        aboutTitle: 'About Me',
        aboutDesc:
          "Hello, I'm Benjamin, i study Multimedia Design in Denmark and I have ambitious plans to pursue a web development course ontop. My work is characterized by a strong ethic, and I take pride in approaching tasks with thoroughness and dedication. I have been engaged in employment since the age of 13, and I even took a full year off between high school and college to gain valuable full-time work experience. Please don't hesitate to reach out to me using the contact application I've provided at the bottom of this page. Kind regards, Benjamin.",
        skillHeader: 'Skills',
        expHeader: 'Experience',
        eduHeader: 'Education',
        skillsText:
          '<span>Back-End Development</span><br>I possess proficiency in Java, SQL and C#, and I have recently commenced utilizing Python as well.',
        expText:
          '<span>Front-End Development</span><br>I am proficient in coding with CSS and FXML, and HTML as well as JavaScript/TypeScript. Additionally, I engage in design and UX principles.',
        eduText:
          '<span>Adobe</span><br>I have been working with Adobe programs such as Photoshop, AfterEffects, Illustrator, Premiere etc. and hold a solid grasp of its contents.',
        xp23: '<span>2023 - </span><br>Employed part-time within a warehouse operation...',
        xp19: '<span>2019 - 2022</span><br>Employed full-time as a Sales Assistant...',
        xp18: '<span>2018 - 2019</span><br>Sales Assistant and Closing Manager at a supermarket...',
        xp13: '<span>2013 - 2018</span><br>Various roles at a restaurant, babysitter, logistics firm...',
        edu21: '<span>2024 - </span><br>Multimedia design degree at EASV in Esbjerg, Denmark.',
        edu17:
          '<span>2017 - 2020</span><br>Gymnasium degree, with The Higher Technical Examination Programme(HTX)...',
        edu07: '<span>2008-2017</span><br>Primary School.',
      },
    }
  },
  methods: {
    setTab(tabName) {
      console.log(tabName)
      this.activeTab = tabName
      console.log(this.texts.skillsText)
    },
  },
}
</script>
