<script setup>
import Header from './components/header.vue'
import navar from './components/navar.vue'
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import Navar from './components/navar.vue'
</script>

<template>
  <Header :texts="texts" :headerTitle="headerTitle" :headerDesc="headerDesc" />
  <RouterView />
</template>

<script>
export default {
  name: 'App',
  components: {
    Header,
    Navar,
  },

  data() {
    return {
      headerTitle: 'hoo',
      headerDesc: 'boo',
      headerAbout: 'About',
      currentLang: 'en',
      isExpanded: false,
      overriddenDesc: null,
      overriddenTitle: null,
      langs: {
        en: {
          headerHome: 'Home',
          headerAbout: 'About',
          headerPortfolio: 'Portfolio',
          headerProj: 'Projects',
          headerContact: 'Contact',

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
          aboutTitle: 'About Me',
          aboutDesc:
            "Hello, I'm Benjamin, i study Multimedia Design in Denmark and I have ambitious plans to pursue a web development course ontop. My work is characterized by a strong ethic, and I take pride in approaching tasks with thoroughness and dedication. I have been engaged in employment since the age of 13, and I even took a full year off between high school and college to gain valuable full-time work experience. Please don't hesitate to reach out to me using the contact application I've provided at the bottom of this page. Kind regards, Benjamin.",
          skillHeader: 'Skills',
          expHeader: 'Experience',
          eduHeader: 'Education',
          skillsText:
            '<span>Back-End Development</span><br>I possess proficiency in Java, SQL and C#, and I have recently commenced utilizing Python as well.',
          expText:
            '<span>Front-End Development</span><br>I am proficient in coding with CSS and FXML, and HTML as well as javascript/typescript. Additionally, I engage in design and UX principles',
          eduText:
            '<span>Adobe</span><br>I have been working with Adobe programs such as photoshop, aftereffects, illustrator, premiere etc. and hold a solid grasp of its contents',
          xp23: '<span>2023 - </span><br>Employed part-time within a warehouse operation that encompasses order preparation and delivery. I assume occasional responsibilities for order management and staff supervision. At this time i was also studying for a computer science degree, however as we got to go through a year of fullstack work i discovered my passion lied within design and frontend work.',
          xp19: '<span>2019 - 2022</span><br>Was employed full-time as a Sales Assistant at a supermarket, where my responsibilities included customer care, warehouse work, and various other tasks.',
          xp18: "<span>2018 - 2019</span><br>I held the position of Sales Assistant and Closing Manager at a supermarket. My role encompassed overseeing the supermarket's operations, managing the staff,<br>and ensuring the smooth closing of the store at the end of each day, in addition to performing daily job tasks.",
          xp13: "<span>2013 - 2018</span><br>Prior to 2019, I gained experience working with various employers, including roles at a restaurant, as a babysitter, and at a logistics firm. However, I recognize that these experiences may not be relevant, which is why they won't be explained in detail.",
          edu21: '<span>2024 - </span><br>Multimedia design degree at EASV in Esbjerg Denmark.',
          edu17:
            '<span>2017 - 2020</span><br>Gymnasium degree, with The Higher Technical Examination Programme(HTX) being my chosen variant.',
          edu07: '<span>2008-2017</span><br>Primary School.',
          portTitle: 'My Portfolio',
          portJava:
            'I have plenty experience working with Java, FXML and SQL. I have successfully completed numerous projects, several of which are available for viewing through the following link.',
          portHTML:
            "I've been coding websites using HTML, CSS, JavaScript/typescript, and C#. As a result, I have a number of projects at this time. You can view some of these projects by clicking on the link below.",
          port3D:
            'In my ambition to be a website developer, ive aquired skills in multiple of Adobes programs, such as Illustrator, Photoshop and After Effects. To this end ive completed multiple images,logos and videos for future reference and knowledge',
          portBtn: 'Learn more',
          proTitle: 'Ongoing And Future Projects',
          netflixTitle: 'Online Netflix Clone',
          netflixDesc:
            'A chatting website aimed at improving my skills with API and sending data. It is similar to many chatting sites with the exception of not using a database for anything but the users. Futhermore it is also to improve my skills on using jS to manipulate html components as i want the site to be highly customizeable.',
          mapTitle: 'Chatsy',
          mapDesc:
            "This strategic choice is driven by my desire to attain a high level of proficiency in effectively utilizing API keys and mastering the intricacies of their operation. Such expertise is increasingly valuable in today's digital landscape and aligns with my commitment to delivering robust and innovative web solutions.",
          horTitle: 'Client Work',
          horDesc:
            'Ive recently begun working freelance for clients. currently im working on a website for a start-up photographer. Mostly a simple but expensive website with a lot of attention to design. Its my first proper professional work, with communication and meetings with clients.',
          proBtn: 'See more',
          conTitle: 'Contact',
          conBtn: 'Submit',
        },
        da: {
          headerHome: 'Hjem',
          headerAbout: 'Om mig',
          headerPortfolio: 'Portefølje',
          headerProj: 'Projekter',
          headerContact: 'Kontakt',
          headerTitle: 'Multimedia Designer',
          headerDesc:
            'Hej, jeg hedder <span>Benjamin</span> og jeg<br>er i gang med at tage en grad i Multimedie Design,<br> i Danmark. Dette er mit personlige portefølje.',
          headerBottomTitle: 'Design, Code, Detail',
          headerBottomText:
            'Min mission, når jeg designer og koder<br>, er at være unik og udfordre normerne.',
          headerBottomTextMid: 'Udforsk mere',
          glassTitle: 'MINE SKILLS',
          glassSubtitle: 'Design. Code. Lever.',
          glassText:
            'UX/UI Design · Frontend Dev · Branding Photoshop · Illustrator · Figma · React Node.js · SQL · Fullstack Projects',
          aboutTitle: 'Om Mig',
          aboutDesc:
            'Hej, jeg hedder Benjamin, og jeg studerer Multimediedesign i Danmark. Jeg har ambitiøse planer om at tage et webudviklingskursus som supplement. Mit arbejde kendetegnes af en stærk arbejdsmoral, og jeg er stolt af at tilgå opgaver med grundighed og dedikation. Jeg har været i arbejde siden jeg var 13 år, og jeg tog endda to år fri mellem gymnasiet og universitetet for at opnå værdifuld erfaring med fuldtidsarbejde. Tøv ikke med at kontakte mig via kontaktformularen, som jeg har inkluderet nederst på denne side. Med venlig hilsen, Benjamin.',
          skillHeader: 'Skills',
          expHeader: 'Erfaring',
          eduHeader: 'Uddannelse',
          skillsText:
            '<span>Back-End Development</span><br>Jeg besidder kompetencer inden for Java og SQL, og for nylig er jeg begyndt at anvende Python og C# i mine professionelle bestræbelser.',
          expText:
            '<span>Front-End Development</span><br>Jeg er dygtig til at kode med CSS og FXML, samt HTML og JavaScript/TypeScript. Derudover arbejder jeg med design og UX-principper.',
          eduText:
            '<span>Adobe</span><br>Jeg har arbejdet med Adobe-programmer som Photoshop, After Effects, Illustrator, Premiere osv., og jeg har et solidt kendskab til deres indhold.',
          xp23: '<span>2023 - </span><br>Jeg har arbejdet deltid i en lagerdrift, der omfatter ordreforberedelse og levering. Jeg påtager mig lejlighedsvis ansvar for ordrehåndtering og personaleledelse. På samme tid studerede jeg til en datalogiuddannelse, men da vi gennemgik et år med fullstack-arbejde, opdagede jeg, at min passion lå inden for design og frontend-arbejde.',
          xp19: '<span>2019 - 2022</span><br>Var ansat på fuldtid som Salgsassistent i et supermarked, hvor mine ansvarsområder omfattede kundeservice, lagerarbejde og forskellige andre opgaver.',
          xp18: '<span>2018 - 2019</span><br>Jeg havde stillingen som Salgsassistent og Lukningsansvarlig i et supermarked. Min rolle omfattede tilsyn med supermarkedets drift, personaleledelse samt sikring af problemfri lukning af butikken ved hver dags afslutning, udover udførelse af daglige arbejdsopgaver.',
          xp13: '<span>2013 - 2018</span><br>Før 2018 opnåede jeg erfaring ved at arbejde for forskellige arbejdsgivere, herunder i roller på en restaurant, som babysitter og kontorarbejde i en logistikvirksomhed. Jeg erkender dog, at disse erfaringer muligvis ikke er relevante, hvilket er grunden til at de ikke vil blive uddybet nærmere.',
          edu21: '<span>2024 - </span><br>Multimedie Design grad ved EASV i Esbjerg, Danamrk',
          edu17:
            '<span>2017 - 2020</span><br>Gymnasiel uddannelse ved højere teknisk eksamen(HTX).',
          edu07: '<span>2008-2017</span><br> Folkeskole',
          portTitle: 'Mit Portefølje',
          portJava:
            'Jeg har masser af erfaring med at arbejde med Java, FXML og SQL. Jeg har med succes gennemført adskillige projekter, hvoraf flere er tilgængelige for visning via følgende link.',
          portHTML:
            'Jeg har kodet hjemmesider ved hjælp af HTML, CSS, JavaScript/TypeScript og C#. Som resultat har jeg flere projekter på nuværende tidspunkt. Du kan se nogle af disse projekter ved at klikke på linket nedenfor.',
          port3D:
            'I min ambition om at blive webudvikler har jeg opnået færdigheder i flere af Adobes programmer, såsom Illustrator, Photoshop og After Effects. I den forbindelse har jeg lavet adskillige billeder, logoer og videoer som fremtidig reference og viden.',
          portBtn: 'Lær Mere',
          proTitle: 'Løbende og fremtidige projekter',
          netflixTitle: 'Online Netflix Klon',
          netflixDesc:
            'Dette projekt har primært til formål at forbedre mine færdigheder i HTML og CSS med et specifikt fokus på brugergrænsefladedesign. Derudover er et centralt mål med dette projekt at fremme min dygtighed i at etablere effektiv kommunikation mellem hjemmesiden og dens databasebackend, en kritisk færdighed i moderne webudvikling.',
          mapTitle: 'Chatsy',
          mapDesc:
            "Et chatwebsite, der har til formål at forbedre mine færdigheder med API'er og dataoverførsel. Det ligner mange chat-sites, med undtagelse af, at det kun bruger en database til brugerne. Derudover er det også for at forbedre mine færdigheder i at bruge JavaScript til at manipulere HTML-komponenter, da jeg ønsker, at siden skal være meget tilpasningsbar.",
          horTitle: 'Klient Arbejde',
          horDesc:
            'Jeg er for nylig begyndt at arbejde som freelancer for kunder. Jeg arbejder i øjeblikket på en hjemmeside for en start-up fotograf. Det er primært en simpel, men dyr hjemmeside med stort fokus på design. Det er mit første rigtige professionelle arbejde, hvor jeg er i løbende kommunikation og møder med kunder.',
          proBtn: 'Se mere',
          conTitle: 'kontakt',
          conBtn: 'Submit',
        },
      },
    }
  },

  computed: {
    texts() {
      const langContent = this.langs[this.currentLang]
      console.log(langContent)
      return {
        ...langContent,
        headerDesc: this.overriddenDesc || langContent.headerDesc,
        headerTitle: this.overriddenTitle || langContent.headerTitle,
      }
    },
  },
  methods: {
    setLanguage(lang) {
      this.currentLang = lang
    },
    handleSubmit() {
      // Reset all errors
      this.errors = {
        name: !this.form.name.trim() || !this.form.name.includes(' '),
        email: !this.isValidEmail(this.form.email),
        message: !this.form.message.trim(),
      }

      const hasErrors = Object.values(this.errors).some(Boolean)
      if (hasErrors) return
      console.log(this.form)
      // Placeholder: show alert or send data somewhere
      alert('Form submitted successfully!')
      // Reset form
      this.form = { name: '', email: '', message: '' }
    },
    isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    },
  },
  mounted() {
    this.$watch(
      () => this.$route, // watch for any route change
      (newRoute) => {
        // 👇 read the "meta" info from the current route and update local data
        this.headerTitle = newRoute.meta.headerTitle || ''
        this.headerDesc = newRoute.meta.headerDesc || ''
        this.headerAbout = newRoute.meta.headerAbout || ''
      },
      { immediate: true }, // run this right away on page load
    )
    setTimeout(() => {
      this.isBlurred = true // Start blur at 5s
    }, 5000)
    setTimeout(() => {
      this.isBlurred = false // Remove blur much later
    }, 6000) // e.g., remove blur after 10 seconds
    setTimeout(() => {
      this.isExpanded = true // Change text at 6s (while still blurred)
    }, 6000)
    const delay = window.innerWidth < 1470 ? 4000 : 3800

    setTimeout(() => {
      this.overriddenTitle = 'BENJAMIN<br>STECKMETZ'
      this.overriddenDesc = `Hi, I'm <span>Benjamin</span> A Multimedia Design student based in <br>Denmark, turning ideas into digital work. <br>This is where I share my best projects and progress.`
    }, delay)
  },
  provide() {
    return {
      texts: {
        headerDesc: this.headerDesc,
        currentHeaderDesc: this.headerDesc,
        headerAbout: this.headerAbout,
      },
    }
  },
}
</script>
