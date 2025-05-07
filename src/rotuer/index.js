import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/homeview.vue'
import CSharpView from '@/views/CSharpView.vue'
import JavaView from '@/views/JavaView.vue'
import AdobeView from '@/views/AdobeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        headerTitle: 'BENJAMIN<br>STECKMETZ',
        headerDesc:
          "Hi, hello I'm Benjamin A Multimedia Design student<br> based in Denmark, turning ideas into digital work.<br> This is where I share my best projects and progress.",
        headerAbout: 'About',
      },
    },
    {
      path: '/csharp',
      name: 'CSharp',
      component: CSharpView,
      meta: {
        headerTitle: 'C#/HTML',
        headerDesc:
          "The subjext i love the most, webdeveloping, IE: <br>C#, HTML, CSS and Javascript/Typescript<br>I've completed different websites, Some in school<br> and others in my personal/proffesional endeavors",
        headerAbout: '',
      },
    },
    {
      path: '/java',
      name: 'Java',
      component: JavaView,
      meta: {
        headerTitle: 'Java/FXML',
        headerDesc:
          "My first language was Java. I've <br>completed various projects, <br>including a Netflix clone and a Tic-Tac-Toe AI.",
        headerAbout: '',
      },
    },
    {
      path: '/adobe',
      name: 'Adobe',
      component: AdobeView,
      meta: {
        headerTitle: 'Adobe Programs',
        headerDesc:
          "In my ambition to become a web designer and developer, <br>i've learned to use programs such as Illustrator,<br>PhotoShop and After Effects. These are invaluable<br> as they unlock a lot of options for me and my work.",
        headerAbout: '',
      },
    },
  ],
})

export default router
