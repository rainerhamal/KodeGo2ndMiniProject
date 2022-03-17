let projects = [
    {
        name: "project one",
        tags: "#javascript, #fullstack, #ui/ux, #backend",
        image: "ep.jpg",
    },
    {
        name: "project two",
        tags: "#javascript, #fullstack",
        image: "ep.jpg",
    },
    {
        name: "project three",
        tags: "#javascript, #fullstack",
        image: "ep.jpg",
    },
    {
        name: "project four",
        tags: "#javascript, #fullstack",
        image: "ep.jpg",
    },
    {
        name: "project five",
        tags: "#javascript, #fullstack",
        image: "ep.jpg",
    },
    {
        name: "project six",
        tags: "#javascript, #fullstack",
        image: "ep.jpg",
    },
   
]
let projects2 = [
    {
        name: "project one",
        tags: "#javascript, #fullstack, #ui/ux, #backend",
        image: "ep.jpg",
    },
    {
        name: "project two",
        tags: "#javascript, #fullstack",
        image: "ep.jpg",
    },
    {
        name: "project three",
        tags: "#javascript, #fullstack",
        image: "ep.jpg",
    },
    {
        name: "project four",
        tags: "#javascript, #fullstack",
        image: "ep.jpg",
    },
    {
        name: "project five",
        tags: "#javascript, #fullstack",
        image: "ep.jpg",
    },
    {
        name: "project six",
        tags: "#javascript, #fullstack",
        image: "ep.jpg",
    },
   
]



const projectContainer = document.querySelector('.mycontainourteam');

projects.forEach(project => {
    projectContainer.innerHTML += `
    <div class="block">
    <div class="wrapper">
    <div class="lid one"></div>
    <div class="lid two"></div>
    <div class="envelope"></div>
    <div class="letter">
      <p>${project.name}</p>
    </div>
  </div>
  </block>
    `;
})
const projectContainer2 = document.querySelector('.mycontainourteam2');

projects2.forEach(project => {
    projectContainer2.innerHTML += `
    <div class="block">
    <div class="wrapper">
    <div class="lid one"></div>
    <div class="lid two"></div>
    <div class="envelope"></div>
    <div class="letter">
      <p>${project.name}</p>
    </div>
  </div>
  </block>
    `;
})



