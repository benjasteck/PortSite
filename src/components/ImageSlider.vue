<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import BurgerUI1 from '@/assets/images/htmlcard1.PNG'
import ChatsyImg from '@/assets/images/htmlcard2.PNG'
import TransImg from '@/assets/images/htmlcard3.PNG'
import ClientImg from '@/assets/images/Photography.PNG'
import QuizImg from '@/assets/images/html4.PNG'
import PlasticImg from '@/assets/images/plasticCard.jpg'
import PlasticArt from '@/assets/images/plasticArt.jpg'
import Wackd1 from '@/assets/images/wackdLog.jpg'
import Wackd2 from '@/assets/images/Burgerchef.jpg'
import Wackd3 from '@/assets/images/wackdUser.jpg'
import Wackd4 from '@/assets/images/urgerAdmin1.jpg'
import Wackd5 from '@/assets/images/burgerAdmin2.jpg'
import Wackd6 from '@/assets/images/burgerAdmin3.PNG'
import Wackd7 from '@/assets/images/burgerAdmin4.jpg'
import Wackd8 from '@/assets/images/wackdCard.jpg'
import Ai1 from '@/assets/images/ai1.jpg'
import Ai2 from '@/assets/images/ai2.jpg'


const imageModules = import.meta.glob('@/assets/images/*.{png,jpg,jpeg,PNG}', { eager: true });

const imageMap = {};
for (const path in imageModules) {
  const fileName = path.split('/').pop(); // e.g., "htmlcard2.PNG"
  imageMap[fileName] = imageModules[path].default;
}

const imageTrack = ref(null)

const expand = (src) => {
  // Do your expand logic here
  console.log('Expand:', src)
}

const showNetflix = () => {
    const contents = document.querySelectorAll('.content');
        contents.forEach(content => {
            content.style.transform = "translateY(-100%)";
            content.style.opacity = "0";
            content.style.height = "0";
            content.style.transition = "none";
        });




        document.getElementById("netflixContent").style.transform="translateY(0px)";
        document.getElementById("netflixContent").style.opacity="100%"
        document.getElementById("netflixContent").style.height="100%";
        document.getElementById("content").style.height="100%";
        document.getElementById("netflixContent").style.transition = "transform 1.5s, height 1.5s, opacity 6s";
}
function showTicket(){
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => {
            content.style.transform = "translateY(-100%)";
            content.style.opacity = "0";
            content.style.height = "0";
            content.style.transition = "none";
        });



        document.getElementById("ticketContent").style.transform="translateY(0px)";
        document.getElementById("ticketContent").style.opacity="100%"
        document.getElementById("ticketContent").style.height="100%";
        document.getElementById("content").style.height="100%";
        document.getElementById("ticketContent").style.transition = "transform 1.5s, height 1.5s, opacity 6s";


    }
    function showCat() {

        const contents = document.querySelectorAll('.content');
        contents.forEach(content => {
            content.style.transform = "translateY(-100%)";
            content.style.opacity = "0";
            content.style.height = "0";
            content.style.transition = "none";
        });
        document.getElementById("catContent").style.transform="translateY(0px)";
        document.getElementById("catContent").style.opacity="100%"
        document.getElementById("catContent").style.height="100%";
        document.getElementById("content").style.height="100%";
        document.getElementById("catContent").style.transition = "transform 1.5s, height 1.5s, opacity 6s";
    }

        function showItunes() {
            const contents = document.querySelectorAll('.content');
            contents.forEach(content => {
                content.style.transform = "translateY(-100%)";
                content.style.opacity = "0";
                content.style.height = "0";
                content.style.transition = "none";
            });
            document.getElementById("tunesContent").style.transform="translateY(0px)";
            document.getElementById("tunesContent").style.opacity="100%"
            document.getElementById("tunesContent").style.height="100%";
            document.getElementById("content").style.height="100%";
            document.getElementById("tunesContent").style.transition = "transform 1.5s, height 1.5s, opacity 6s";
        }

    function showAtt() {
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => {
            content.style.transform = "translateY(-100%)";
            content.style.opacity = "0";
            content.style.height = "0";
            content.style.transition = "none";
        });
        document.getElementById("attContent").style.transform="translateY(0px)";
        document.getElementById("attContent").style.opacity="100%"
        document.getElementById("attContent").style.height="100%";
        document.getElementById("content").style.height="100%";
        document.getElementById("attContent").style.transition = "transform 1.5s, height 1.5s, opacity 6s";
    }

    function showAi() {
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => {
            content.style.transform = "translateY(-100%)";
            content.style.opacity = "0";
            content.style.height = "0";
            content.style.transition = "none";
        });
        document.getElementById("aiContent").style.transform="translateY(0px)";
        document.getElementById("aiContent").style.opacity="100%"
        document.getElementById("aiContent").style.height="100%";
        document.getElementById("content").style.height="100%";
        document.getElementById("aiContent").style.transition = "transform 1.5s, height 1.5s, opacity 6s";
    }
let isDragged = false

onMounted(() => {
    window.scrollTo(0, 0);
    
  let isDragged = false

  const track = imageTrack.value
  track.dataset.mouseDownAt = "0"
  track.dataset.prevPercentage = "0"

  const onMouseDown = (e) => {
    track.dataset.mouseDownAt = e.clientX
  }

  const onMouseMove = (e) => {
    if (track.dataset.mouseDownAt === "0") return

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX
    const maxDelta = window.innerWidth / 2
    const percentage = (mouseDelta / maxDelta) * -100
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -68)

    track.dataset.percentage = nextPercentage
    if (window.innerWidth > 1224){
    if (Math.abs(mouseDelta) >= 1) {
      isDragged = true
    }
    
    track.animate(
      { transform: `translate(${nextPercentage}%, 0%)` },
      { duration: 1200, fill: 'forwards' }
    )

    for (const image of track.getElementsByClassName('image')) {
      image.animate(
        { objectPosition: `${100 + nextPercentage}% center` },
        { duration: 1200, fill: 'forwards' }
      )
    }
  }
}
  const onMouseUp = () => {
    if (isDragged) {
      track.dataset.prevPercentage = track.dataset.percentage
    }
    track.dataset.mouseDownAt = "0"
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
<div class="imageContainer" id="services2">
    <h1 class="subtitle" id="contentTitle"> Past Projects</h1>
<div id="image-track" ref="imageTrack" data-mouse-down-at="0" data-prev-percentage="0">

    <div class="kort" id="kort1">

    <img class="image" :src="BurgerUI1" draggable="false" onclick="expand(this.src)">
        <div class="kortLayer" id="kortLayer1">
            <h2 class="cardTitle" id="card1Title">Mcdonalds Order System</h2>
            <p class="cardBody" id="card1Body">A website made as a project inspired by mcdonalds, which imitates the ordering system of mcdonalds or other similar businesses. The system contains subjects like, frontend, API calls,
                backend, database and cyber security.
            </p>
            <a href="#content" class="btn3" @click="showNetflix()"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg></a>
        </div>
    </div>
    <div class="kort">
    <img class="image" :src="ChatsyImg" draggable="false" onclick="expand(this.src)">
        <div class="kortLayer">
            <h2 class="cardTitle" id="card2Title">Online Chatting Site</h2>
            <p class="cardBody" id="card2Body">We designed a messenger like website, Chatsy. It imitates the most used online chatting systems, with profile pictures and saved messages in a database, api calls and encryption of messages etc. </p>
            <a href="#content" class="btn3" @click="showTicket()"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg></a>
        </div>
    </div>
        <div class="kort">
    <img class="image" :src="TransImg" draggable="false" onclick="expand(this.src)">
            <div class="kortLayer">
                <h2 class="cardTitle" id="card3Title">Image To Translated Text</h2>
                <p class="cardBody" id="card3Body">A small website, capable of translating text in an uploaded image to any language and output a translated text. This was achieved by using 2 AI services, image analysis and translations.</p>
                <a href="#content" class="btn3" @click="showCat()"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg></a>
            </div>
        </div>
            <div class="kort">
    <img class="image" :src="ClientImg" draggable="false" onclick="expand(this.src)">
                <div class="kortLayer">
                    <h2 class="cardTitle" id="card4Title">Start Up Photographer Site</h2>
                    <p class="cardBody" id="card4Body">A basic website for a new photographer, showcasing his work, prices, methods etc. We held meetings, sprints and the costumer explained his wants and needs.
            
                    </p>
                    <a href="#content" class="btn3" @click="showItunes()"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg></a>
                </div>
            </div>
                <div class="kort">
    <img class="image" :src="QuizImg" draggable="false" onclick="expand(this.src)">
                    <div class="kortLayer">
                        <h2 class="cardTitle" id="card5Title">Feedback With Database</h2>
                        <p class="cardBody" id="card5Body">A simple feedback website, used to get employees opnions and suggestions. It was connected straight to the costumers account via google sheets in his drive</p>
                        <a href="#content" class="btn3" @click="showAtt()"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg></a>
                    </div>
                </div>
                    <div class="kort">
    <img class="image" :src="PlasticImg" draggable="false" onclick="expand(this.src)">
                        <div class="kortLayer">
                            <h2 class="cardTitle" id="card6Title">Microplastic Campain</h2>
                            <p class="cardBody" id="card6Body">As our first semester exam project we created a site advocading for the anti plastic treaty and urging users to sign it. There were no database as focus was fully on design </p>
                            <a href="#content" class="btn3" @click="showAi()"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg></a>
                        </div>
                    </div>
                        

</div>
</div>
<div id="content">
    <div class="content" id="netflixContent">
    <div class="contentContainer">
        <h1 class="subtitleContent" id="netflixTitle">  Mcdonalds Order System</h1>
        <div class="row1">
            <div class="content-col-1 hidden" v-observe-show>
                <p class="aboutDesc" id="aboutDesc">Being one of my major projects, containing complex subjects including cybersecurity, API calls etc. its one of my more important projects. The site is made up of its frontend, made using Angular which ofcourse encompasses CSS, HTML and typescript. The backend were made with C# and lastly using postgres SQL as a database, in addition to extra tools such as Postman. 
                    <br><br>
                    The site had 3 roles, costumer, chef and admin. As can be seen on the left the employees would first have to log in at the start of the day. on the main screens they would log into a user acount, the chefs a chef acount etc.
                    <br><br>
                    When logging in, the site makes use of hashing and salting. that is, the password lies encrypted in the database so it cant be easily stolen, and as the user logs in, that value gets encrypted and compared to the database. furthermore the site made use of JSON Web Tokens(JWT) to securily transfer this data, and additionaly cookies to limit the time before a user had to log back in. 
                    <br><br>
                    And lastly the site was optimised to protect against the most common attacks such a sql injections etc. Making this site secure and safe to use.
                </p>
            </div>
            <div class="content-col-2 hidden2" v-observe-show>
                <img class="contentimg" :src="Wackd1">
            </div>
    </div>
        <div class="row3">
            <div class="imgRow">
                <img :src="Wackd2" alt="">
                <img :src="Wackd3" alt="">
                <img :src="Wackd4" alt="">
                <img :src="Wackd5" alt="">
                <img :src="Wackd6" alt="">
                <img :src="Wackd7" alt="">
                <img :src="Wackd2" alt="">
                <img :src="Wackd3" alt="">
                <img :src="Wackd4" alt="">
                <img :src="Wackd5" alt="">
                <img :src="Wackd6" alt="">
                <img :src="Wackd7" alt="">
                
            </div>
           
        </div>
        <div class="row1">
             <div class="content2-col-1 hidden" v-observe-show>
                <img class="contentimg" :src="Wackd8">
            </div>
            <div class="content2-col-2 hidden2" v-observe-show>
                 <p class="aboutDesc" id="aboutDesc2">As seen above and to the left, the user would be able to pick and choose between many orders all categorized and easy to find. The user then picks what they want, and costumize it after which the order gets added to the reciept. When the user then presses pay they get taken to the payment screen as seen on the left.
                    <br><br>
                    Obviously the site is not connected to any banks however it was instead used to show some understaning of protection against SQL injection as can be seen. When the user hen presses submit, an API is called and that order is then saved in the database.
                    <br><br>
                    Following this, the order is now retrieved by the chef and the admin, who use the data. In the admins case for statistics and in the chefs instance for displaying orders. This can be seen in several of the images above. 
                    <br><br>
                    The chef gets an order which they can complete and the admin gets the data sorted into a chart. They can also view all receips and all users/employees. change their password etc.


                 </p>
                <div class="social-icons">
                    <h2>Code: <a href=""><svg xmlns="http://www.w3.org/2000/svg" height="27" width="25" viewBox="0 0 496 512"><path fill="#262635" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a></h2>
                </div>
            </div>
           
        </div>
    </div>
</div>

    <div class="content" id="ticketContent">
        <div class="contentContainer">
            <h1 class="subtitleContent" id="ticketTitle">  Chatsy</h1>
            <div class="row1">
                <div class="content-col-1 hidden" v-observe-show>
                    <p class="aboutDesc" id="aboutDesc3">For a larger personal project, I decided to explore the development of an online chat platform, utilizing C# for the back-end infrastructure. The primary focus of this platform is customization, allowing users to personalize their experience by adjusting features such as colors, backgrounds, and other visual elements. The goal is to offer an engaging and fun user interface that caters to individual preferences, making the platform enjoyable and user-friendly.
                            <br><br>
                        As demonstrated in the accompanying images, one of the key design objectives is to maintain a light and playful atmosphere while integrating unique features. For example, the platform would adapt the background based on the user's local time, creating a dynamic and immersive experience. Additionally, to prioritize user privacy and data security, the platform would not retain most information, except for essential user data. Similar to platforms like Snapchat, chat messages would be temporary and not stored for extended periods.
                        <br><br>
                        Eventually, there will ofcourse be implemented essential parts like security and the like. As this project is not finished its still up for deciscion.
                    </p>
                </div>
                <div class="content-col-2 hidden2" v-observe-show>
                    <img class="contentimg" :src="ChatsyImg">
                </div>
            </div>
            <div class="row1">
                <div class="content2-col-1 hidden" v-observe-show>
                    <img class="contentimg" :src="ChatsyImg">
                </div>
                <div class="content2-col-2 hidden2" v-observe-show>

                    <p class="aboutDesc" id="aboutDesc4">This project is still in development, and progress is being made during my personal time. I am excited about the potential to create a platform that blends customization, privacy, and fun, and I look forward to further refining and enhancing the user experience.</p>
                    <div class="social-icons">
                        <h2>Code: <svg xmlns="http://www.w3.org/2000/svg" height="27" width="25" viewBox="0 0 496 512"><path fill="#262635" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="content" id="catContent">
        <div class="contentContainer">
            <h1 class="subtitleContent" id="catTitle">  Image Translator</h1>
            <div class="row1">
                <div class="content-col-2 hidden" v-observe-show>
                    <img class="contentimg" :src="Ai1">
                </div>
                <div class="content-col-2 hidden2" v-observe-show>
                    <img class="contentimg":src="Ai2">
                </div>
                <p class="aboutDesc hidden"  v-observe-show id="aboutDescbig2">As part of a recent project, we leveraged Azure's AI services to develop a web platform capable of processing image files or screenshots. The platform's primary function is to analyze the text contents within the images and provide translations. Users could upload an image, and the site would send the image base64 data for analysis. The extracted text was then passed to a translation AI, enabling users to receive a translated version of the content in any language of their choice.
                    <br><br>
                    The system was designed to operate entirely through API calls to and from Azure, with no reliance on a traditional database. This architecture allowed the platform to perform the necessary operations without storing any persistent data, ensuring both efficiency and privacy. The integration of Azure's AI services enabled us to provide seamless and real-time text analysis and translation for a smooth user experience.
                </p>
            </div>
            <div class="row1">
                <div class="content-col-1 hidden" v-observe-show>
                    <p class="aboutDesc" id="aboutDesc5">On the frontend side of the project, we utilized React as the framework, with TypeScript for the development. While the design was not the main focus of this particular project, React enabled us to work efficiently and in an organized manner. The use of React allowed for rapid development and easy maintenance of the application.
                        <br><br>
                        The frontend was designed to be intuitive, allowing users to crop and zoom images seamlessly. This simplicity in design, coupled with React's capabilities, ensured that the user experience remained fast, straightforward, and accessible. The decision to use TypeScript further enhanced the development process by adding type safety and reducing potential errors, ultimately contributing to a more stable and maintainable codebase.
                    </p>
                    <div class="social-icons" >
                        <h2>Code: <svg xmlns="http://www.w3.org/2000/svg" height="27" width="25" viewBox="0 0 496 512"><path fill="#262635" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></h2>
                    </div>
                </div>
                
                <div class="content-col-2">
                    
                </div>
            </div>
        </div>
    </div>

    <div class="content" id="tunesContent">
        <div class="contentContainer">
            <h1 class="subtitleContent" id="tunesTitle">  Photographer Site</h1>
            <div class="row1">
                <div class="content2-col-1 hidden" v-observe-show>
                    <img class="contentimg" :src="ClientImg">
                </div>
                <div class="content2-col-2 hidden2" v-observe-show>
                    <p class="aboutDesc" id="aboutDesc7">This website was developed for a client, marking one of my first semi-serious professional projects. The platform was created for a photographer based in London who required a website to showcase contact information, a portfolio, and other relevant details. While the version shown here is a demo, it effectively demonstrates the final product.
                        <br><br>
                        The project was shaped by an iterative process of sprints and regular meetings with the client to ensure the design, color scheme, and overall functionality met their specific needs. To achieve the desired outcome, we conducted customer surveys, created detailed style guides, and incorporated feedback throughout. The result is an elegant yet grounded design, reflecting the professional standards expected of a photographer's online presence while maintaining a sophisticated yet accessible feel.
                        <br><br>
                        On the technical side, I focused on front-end development, ensuring that the website was responsive, user-friendly, and compatible across various devices and browsers. The project allowed me to refine my skills. One of the main challenges was balancing the client's vision with a functional, high-quality website that was easy to navigate. However, with strong collaboration and continuous feedback, we successfully overcame these obstacles, delivering a final product that met both aesthetic and technical standards.
                        <br><br>
                        This project not only helped me further develop my technical and design skills but also improved my client communication and project management abilities. It was a great learning experience that prepared me for future, more complex projects.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="content" id="attContent">
        <div class="contentContainer">
            <h1 class="subtitleContent" id="attTitle">  Quiz Site</h1>
            <div class="row1">
                <div class="content-col-1 hidden" v-observe-show>
                    <p class="aboutDesc" id="aboutDesc8">I developed a simple feedback system for my place of work, designed to streamline communication between employees and management. The core functionality of the system was to capture feedback and send it directly to my boss for review. To facilitate this, the system was integrated with his Google Sheets account, ensuring that the feedback was automatically recorded in a structured format for easy access and analysis. This setup mirrors the contact system implemented on this website, where the user input is sent directly to me in a similar efficient manner.
                        <br><br>
                        This project was a quick yet valuable opportunity to implement a functional solution with minimal complexity, and it demonstrated how effective simple integrations can be for internal communication.</p>
                </div>
                <div class="content-col-2 hidden2" v-observe-show>
                    <img class="contentimg" :src="QuizImg">
                </div>
            </div>
            
        </div>
    </div>
    <div class="content" id="aiContent">
        <div class="contentContainer">
            <h1 class="subtitleContent" id="aiTitle">  Microplastic Campain</h1>
            <div class="row1">
                <div class="content2-col-1 hidden" v-observe-show>
                    <img class="contentimg" :src="PlasticImg">
                </div>
                <div class="content2-col-2 hidden2" v-observe-show>
                    <p class="aboutDesc" id="aboutDesc9">For our first semester exam project, we were tasked with designing a website for an anti-plastic organization, with the goal of advocating for the cessation of plastic use through a global treaty. This project involved a comprehensive approach, starting with the analysis of the target audience, mapping customer journeys, and creating wireframes. We also developed marketing materials to support the cause and ensure the message resonated effectively with the audience.
                        <br><br>
                        The project was purely design-oriented, with no back-end development involved. I focused on creating an engaging, visually compelling user interface using HTML, CSS, and JavaScript. The emphasis was on delivering a seamless, user-friendly experience that communicated the urgency of the issue while maintaining a clean and impactful design.
                        <br><br>
                        This project provided valuable insight into the importance of user-centric design and how to craft a website that not only educates but also motivates action.
                        <br><br>
                        The website was designed with a user-friendly layout, starting with a clear and direct call to action in the header, ensuring that visitors immediately understand the site’s purpose. This header was strategically placed to capture attention right away, guiding users toward taking action. Next to the header, a slider was incorporated, showcasing articles related to the cause, allowing for dynamic content presentation.
                        <br><br>
                        Further down the page, additional articles were displayed, using vibrant colors, soft corners, and a welcoming aesthetic. This design approach was intentional, reflecting the values of the organization and catering to the target audience’s preferences. The visual elements were carefully chosen to create an inviting and positive atmosphere, aligning with the overall goal of motivating visitors to engage with the message in an approachable manner.
                    </p>
                </div>
            </div>
            <div class="row1">
                <div class="content2-col-2 hidden" v-observe-show>
                    <p class="aboutDesc" id="aboutDesc7">The articles featured on the site primarily served an informative purpose; however, their tone was carefully balanced to be both welcoming and assertive. The messaging was crafted to say, in effect, "Let's fix this together... but if action isn't taken, these consequences could affect you as well." This approach was intentional, designed to appeal to the target audience by first inviting them into the cause with a positive and cooperative tone.
                        <br><br>
                        At the same time, for visitors who may not initially recognize the severity of the issue, the content adopted a more serious tone to underline the real-world consequences of inaction. This dual approach ensured the message was accessible to a broad audience while still conveying the urgency of the problem. The article shown to the right is a strong example of this strategy, where the balance between encouragement and warning is clearly reflected.

                        <div class="social-icons">
                            <h2>Code: <a href=""><svg xmlns="http://www.w3.org/2000/svg" height="27" width="25" viewBox="0 0 496 512"><path fill="#262635" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a></h2>
                        </div>
                    </p>
                </div>
                <div class="content2-col-1 hidden2" v-observe-show>
                    <img class="contentimg" :src="PlasticArt">
                </div>
                
            </div>
        </div>
    </div>
    <div class="content" id="imgContent">
        <div class="contentContainer">
            <h1 class="subtitleContent" id="imgTitle">  Image-Slider</h1>
            <div class="row1">
                <div class="content2-col-1">
                    <img class="contentimg" :src="imageMap['images/card61.png']">
                </div>
                <div class="content2-col-2">
                    <p class="aboutDesc" id="aboutDesc10">Simple image slider. This was my very first project, however as its so simple this is just a temporary entry.</p>
                    <div class="social-icons">
                        <h2>Code: <a href=""><i class="fa-brands fa-github"></i></a></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

</script>