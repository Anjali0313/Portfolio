import portfolioData from './modules/data.js';
function renderContainer(item) {
  const app = document.querySelector('#app');
  app.innerHTML = `<div class="sidebar">
  <div><img src="${item.logo}" style="width: 125px; height:210px;"></div>
  <div><a href="#aboutme" >About</a></div>
  <div ><a href="#Skills">My Skills</a></div>
  <div ><a href="#projects">Projects</a></div>
  <div><a href ="#aboutme">Resume</a></div>
  <div><a href ="#contact">Contact</a></div>
  </div>
  <div class="main">
  <p class="html">&lt;html&gt;</p>
  <p class="body">&lt;body&gt;</p>
 <div id="about"></div> 
 <div id="aboutme"></div>
  <div id="myportfolio"></div>
  <div id="Skills"></div>
 <div id="Qualification"></div>
  <p class="form">&lt;form&gt;</p>
 <div id="contact"> </div>
  <p class="form">&lt;/form&gt;</p>
  <p class="body">&lt;body&gt;</p>
  <p class="html">&lt;html&gt;</p>
  </div>`;
}


function renderAbout(item){
  const about= document.querySelector("#about")
 about.innerHTML =`
  <p>&lt;h1&gt;</p>
  <h1>Hi,<br>
  I'M <span>${item.name}</span><br>
  ${item.title} </h1>
  <p>&lt;/h1&gt;</p>
  <p class="p">&lt;p&gt;</p>
  <p class="p">${item.title}</p>
  <p class="p">&lt;/p&gt;</p>
  <button><a href ="#contact">Contact Me</a></button>
  `;
};

function renderMyPortfolio(item){
  const myportfolio =document.querySelector("#myportfolio")
    myportfolio.innerHTML =`
  <p>&lt;h2&gt;</p>
  <h1>My Portfolio</h1>
  <p>&lt;/h2&gt;</p>
   <p class="p">&lt;p&gt;</p>
   <h3 class="h3">${item.Theory}</h3>
  <p class="p">&lt;/p&gt;</p>
  <p>&lt;section&gt;</p>
  <div id="projects">${item.projectImg.map(img =>
   `<div class="images">
  <h3>${img.name}</h3>
  <a href="${img.urlss}" target="_blank">
        <img class="image" src="${img.url}" />
        </a>
   <p>${img.language}</p>
   </div>`
  ).join("")}</div>
   <p>&lt;/section&gt;</p>
  `;
}
function renderAboutMe(item){
  const aboutme = document.querySelector("#aboutme")
  aboutme.innerHTML =`
    <p>&lt;h2&gt;</p>
   <h1>About Me</h1>
   <p>&lt;/h2&gt;</p>
   <p class="p">&lt;p&gt;</p>
   <h3 class="h3">${item.Aboutme}</h3>
   <p class="p">&lt;/p&gt;</p>
    <a href="${item.resume}" target="_blank">
   <button id="resume">Download Resume</button>
     </a>  
  `
}
function renderSkills(item){
  const skills = document.querySelector("#Skills")
  skills.innerHTML =`
  <p>&lt;h2&gt;</p>
  <h1>Skills</h1>
  <p>&lt;/h2&gt;</p>
   <p class="p">&lt;p&gt;</p>
   <div class="skills">
          ${item.Skills.map(skill => `
            <div class="skill"><img class="img" src="${skill}" alt="skill icon" /></div>
          `).join('')}
        </div>
         <p class="p">&lt;/p&gt;</p>
   </div>`;
}

function renderContact(item){
  const contact = document.querySelector("#contact")
  contact.innerHTML=`<div>
  ${item.link.map(link => `
      <a href="${link.urls}" target="_blank">
        <img class="icon" src="${link.img}" />
      </a>
    `).join('')}
    </div>
    <div>
    <p>Contect Form</p>
  <form class="contact" action="https://formsubmit.co/------@gmail.com" method="POST">
            <input type="hidden" name="_honey" style="display:none">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_subject" value="New submission from portfolio!">
            <input type="hidden" name="_template" value="table">
            <label for="name" class="label1">Name</label><br>
            <input type="text" name="text" id="text" required /><br>
            <label for="name" class="label1">Email</label><br>
            <input type="email" name="Email" id="email" required /><br>
  
            <label for="message" class="label3"> Message </label><br>
            <textarea name="message" id="message" cols="25" rows="10" required></textarea><br>
  
            <button type="submit">
              <i class="fas fa-paper-plane"></i> &nbsp; Send Message
            </button>
          </form>
</div>
  `
}

function init(portfolioData){
  renderContainer(portfolioData);
  renderAbout(portfolioData);
  renderMyPortfolio(portfolioData);
  renderAboutMe(portfolioData);
  renderSkills(portfolioData);
  renderContact(portfolioData)
}
init(portfolioData);
