import { eNewsstandImg, bhutanotel, carDealershipImg, churchImg, nobleImg, heroImg, hussarImg, petShelterImg, photographyImg, pwdMaker} from '../../media/index';

const portfData =  [
  {
    id: 1,
    cardClass: "e-newsstand-card",
    image: eNewsstandImg,
    title: "e-newsstand",
    language: "React, Redux, node.js",
    icons: ["fab fa-react", "fas fa-database"],
    completed: "in dev",
    live_page: "https://e-newsstand.herokuapp.com/",
    github_page: "https://github.com/klauza/e-newsstand",
    description: "E-commerce project with paying engine, state/url query search and filtering"
  },
  {
    id: 2,
    cardClass: "bhutanotel-card",
    image: bhutanotel,
    title: "Bhutanotel",
    language: "React, Redux, styled-components",
    icons: ["fab fa-react"],
    completed: "see page",
    live_page: "https://bhutanotel.netlify.com/",
    github_page: "https://github.com/klauza/bhutanotel",
    description: "Hotel page concept with booking option"
  },
  {
    id: 3,
    cardClass: "noble-leaders-card",
    image: nobleImg,
    title: "Game hub",
    language: "React, Redux, MongoDB",
    icons: ["fab fa-react", "fas fa-database"],
    completed: "see page",
    live_page: "https://noble-leaders.herokuapp.com/",
    github_page: "https://github.com/klauza/noble-leaders",
    description: "A gaming platform where you gain points for playing"
  },
  {
    id: 4,
    cardClass: "regex-card",
    image: pwdMaker,
    title: "password-maker",
    language: "JS, regexp",
    icons: ["fab fa-js-square"],
    completed: "see page",
    live_page: "https://pwd-maker-klauza.netlify.com/",
    github_page: "https://github.com/klauza/password-maker",
    description: "Generates regular expression password from the chosen settings"
  },
  // {
  //   id: 5,
  //   cardClass: "chest-card",
  //   image: chestImg,
  //   title: "coffer",
  //   language: "JS state pattern, History API",
  //   icons: ["fab fa-js-square"],
  //   completed: "see page",
  //   live_page: "https://coffer-klauza.netlify.com",
  //   github_page: "https://github.com/klauza/coffer",
  //   description: "This project is a container of any smaller idea. Was made to study JS state"
  // }
  // {
  //   id: 6,
  //   cardClass: "actor-card",
  //   image: actorGameImg,
  //   title: "Actor discovery",
  //   language: "JS revealing pattern, fetch API, local storage",
  //   icons: ["fab fa-js-square", "fas fa-database"],
  //   completed: "see page",
  //   live_page: "https://actor-discovery-klauza.netlify.com/",
  //   github_page: "https://github.com/klauza/actorDiscovery",
  //   description: "Actor quiz game"
  // },
  // {
  //   id: 7,
  //   cardClass: "guess-card",
  //   image: guessNumImg,
  //   title: "guessNumber",
  //   language: "JS Classes, local storage, Regex",
  //   icons: ["fab fa-js-square", "fas fa-database"],
  //   completed: "see page",
  //   live_page: "https://guess-a-number-klauza.netlify.com/",
  //   github_page: "https://github.com/klauza/guessNumberGame",
  //   description: "Simply guess a number game. I believe there is no need to explain what to do"
  // },
  {
    id: 8,
    cardClass: "hero-card",
    image: heroImg,
    title: "heroproject",
    language: "React, Redux, Firebase",
    icons: ["fab fa-react", "fas fa-database"],
    completed: "see page",
    live_page: "https://hero-project-klauza.firebaseapp.com/signin",
    github_page: "https://github.com/klauza/heroproject",
    description: "Login system; Firebase. 2d hero creator. Possible to see others people work too"
  },
  {
    id: 9,
    cardClass: "photography-card",
    image: photographyImg,
    title: "photography",
    language: "HTML, Sass, jQuery",
    icons: ["fab fa-html5", "fab fa-sass", "fab fa-js-square"],
    completed: "see page",
    live_page: "https://photography-klauza.netlify.com/",
    github_page: "https://github.com/klauza/photography",
    description: "Hobbystic photography SPA with some jQuery DOM manipulation"
  },
  {
    id: 10,
    cardClass: "shelter-card",
    image: petShelterImg,
    title: "pet shelter",
    language: "HTML, Sass",
    icons: ["fab fa-html5", "fab fa-sass"],
    completed: "see page",
    live_page: "https://shelter-klauza.netlify.com/",
    github_page: "https://github.com/klauza/Shelter",
    description: "Sass based SPA for people who are keen to be taking care of animals. Made with CSS GRID tool"
  },
  {
    id: 11,
    cardClass: "hussars-card",
    image: hussarImg,
    title: "hussars",
    language: "HTML, Sass, jQuery",
    icons: ["fab fa-html5", "fab fa-sass"],
    completed: "see page",
    live_page: "https://hussars-klauza.netlify.com/",
    github_page: "https://github.com/klauza/hussars",
    description: "Horse cavalry at the turn of XVI century. One page website with colorful sections"
  }
]
export {portfData}

/*
const portfDataTwo = [
  {
    id: 9,
    cardClass: "photography-card",
    image: photographyImg,
    title: "photography",
    language: "HTML, Sass, jQuery",
    icons: ["fab fa-html5", "fab fa-sass", "fab fa-js-square"],
    completed: "see page",
    live_page: "https://photography-klauza.netlify.com/",
    github_page: "https://github.com/klauza/photography",
    description: "Hobbystic photography SPA with some jQuery DOM manipulation"
  },
  {
    id: 10,
    cardClass: "shelter-card",
    image: petShelterImg,
    title: "pet shelter",
    language: "HTML, Sass",
    icons: ["fab fa-html5", "fab fa-sass"],
    completed: "see page",
    live_page: "https://shelter-klauza.netlify.com/",
    github_page: "https://github.com/klauza/Shelter",
    description: "Sass based SPA for people who are keen to be taking care of animals. Made with CSS GRID tool"
  },
  {
    id: 11,
    cardClass: "hussars-card",
    image: hussarImg,
    title: "hussars",
    language: "HTML, Sass, jQuery",
    icons: ["fab fa-html5", "fab fa-sass"],
    completed: "see page",
    live_page: "https://hussars-klauza.netlify.com/",
    github_page: "https://github.com/klauza/hussars",
    description: "Horse cavalry at the turn of XVI century. One page website with colorful sections"
  },
  // {
  //   id: 4,
  //   cardClass: "church-card",
  //   image: churchImg,
  //   title: "Parish church",
  //   language: "Wordpress",
  //   icons: ["fab fa-wordpress"],
  //   completed: "see page",
  //   live_page: "https://google.com",
  //   github_page: "https://google.com",
  //   description: "Wordpress based page made for a parish church for non commercial purpose"
  // },
  {
    id: 5,
    cardClass: "car-dealer-card",
    image: carDealershipImg,
    title: "car dealership",
    language: "Wordpress",
    icons: ["fab fa-wordpress"],
    completed: "see page",
    live_page: "https://klauza-car-dealer.000webhostapp.com/",
    github_page: "https://github.com/klauza/carDealer",
    description: "A modest page for a car workshop to list available cars or just to contact a seller"
  }
]

export {portfDataTwo}
*/