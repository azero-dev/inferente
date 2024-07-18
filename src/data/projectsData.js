import phone from '../assets/Phone.webp'

const projectsData = [
  {
    id: 1,
    title: "Lovedogs London LTD",
    description: "Website for the company LoveDogs London LTD, built in 2022. For this website I used Gatsby, the most interesting thing could be that I built an image viewer from scratch without using packages. Although the design of the website is not to my liking, it's the best I could do after a lot of advice to the client. That eternal battle...",
    img: phone,
    imgAlt: "Lovedogs London LTD example",
    demoURL: "https://lovedogs.london/",
    sourceURL: "https://github.com/azero-dev/lovedogslondon",
  },
  {
    id: 2,
    title: "Word quiz",
    description: "A simple word quiz game that uses a dictionary API to retrieve words. The user must guess one of its synonyms or antonyms and complete a round of 10 words. The game is built with React.",
    img: phone,
    imgAlt: "Word quiz example",
    demoURL: "https://word-quiz-blue.vercel.app/",
    sourceURL: "https://github.com/azero-dev/word-quiz",
  },
  {
    id: 3,
    title: "Web scraper",
    description: "Web scraper to take screenshots of a web page or get the links it contains. Designed using the model-view-controller pattern. To test it, simply add the URL of the web page you want to get the data from (in http://www.example.com format) and select whether you want to get a screenshot or get the links. You can use the web page located in the ./web directory to test the API.",
    img: phone,
    imgAlt: "Web scraper example",
    demoURL: "",
    sourceURL: "https://github.com/azero-dev/web-scraper",
  },
  {
    id: 4,
    title: "FacuSounds",
    description: "Unofficial website I built for the spanish comedian Facu Diaz, where you can play the sounds of his shows. This website was born from an idea that was thrown in one of his monologues, and it's built in a comedy tone due to the nature of the project. Although the design is catastrophic, the interesting thing is the use of sound files under the paradigm of Gatsby, which forces the use of GraphQL.",
    img: phone,
    imgAlt: "FacuSounds example",
    demoURL: "https://bditm.es/",
    sourceURL: "https://github.com/azero-dev/FacuSounds/tree/main/facusounds",
  },
  {
    id: 5,
    title: "Corrales Espinosa",
    description: "A novel family-run winery. José, its owner, devised his own particular method of winemaking. It seems that he has found the key, as he needs to cope with a great demand for his new wine coming from all over the world. Website created in the year 2021 using Wordpress to make it easier for the user to manage. The design of this website was made by Eva Barchino.",
    img: phone,
    imgAlt: "Corrales Espinosa Vinos example",
    demoURL: "https://corralesespinosa.com/",
    sourceURL: "",
  },
]

export default projectsData