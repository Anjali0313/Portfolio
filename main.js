import portfolioData from './modules/data.js';
function renderContainer(item) {
  const app = document.querySelector('#app');
  app.innerHTML = `<div class="sidebar">
  <div></div>
  <div><a href="#about" >About</a></div>
  <div ><a href="#Skills">My Skills</a></div>
   <div ><a href="#Qualification">Qualification</a></div>
  <div>Resume</div>
  <div>Contact</div>
  </div>
  <div class="main">
  ${renderAbout(item)}
   ${renderMyPortfolio(item)}
   ${renderSkills(item)}
 ${ renderQualifications(item)}
  </div>`;
}
renderContainer(portfolioData)

function renderAbout(item){
  return`<div id="about">
  <p>&lt;html&gt;</p>
  <p>&lt;body&gt;</p>
  <br>
  <p>&lt;h1&gt;</p>
  <h1>Hi,<br>
  I'M <span>${item.name}</span><br>
  ${item.title} </h1>
  <p>&lt;/h1&gt;</p>
  <p class="p">&lt;p&gt;</p>
  <p class="p">${item.title}</p>
  <p class="p">&lt;/p&gt;</p>
  <button>Contact me</button>
  </div>`;
};
function renderMyPortfolio(item){
  return`  <div id="myportfolio">
  <p>&lt;h2&gt;</p>
  <h1>My Portfolio</h1>
  <p>&lt;/h2&gt;</p>
   <p class="p">&lt;p&gt;</p>
   <h3 class="p">${item.Theory}</h3>
  <p class="p">&lt;/p&gt;</p>
  </div>`;
}
function renderSkills(item){
  return` <div id="Skills">
  <p>&lt;h2&gt;</p>
  <h1>Skills</h1>
  <p>&lt;/h2&gt;</p>
   <p class="p">&lt;p&gt;</p>
   <div class="skills">
          ${item.Skills.map(skill => `
            <div class="skill"><img src="${skill}" alt="skill icon" /></div>
          `).join('')}
        </div>
         <p class="p">&lt;/p&gt;</p>
   </div>`;
}
function renderQualifications(item){
return`  <div id="Qualification">
  <p>&lt;h2&gt;</p>
  <h1>Qualification</h1>
  <p>&lt;/h2&gt;</p> 
   <p class="p">&lt;p&gt;</p>
    <div class="qualification-boxes">
    ${item.qualifications.map(q => `
      <div class="qualification-card">
        <span class="short-title">${getShortForm(q.title)}</span>
        <div class="details">
        <p> ${q.title}</p>
          <p>${q.institution}</p>
          <p>${q.year}</p>
        </div>
      </div>
    `).join('')}
    </div>
     <p class="p">&lt;/p&gt;</p>
  </div>`;
}
function getShortForm(title) {
  if (title.includes("MCA")) return "MCA";
  if (title.includes("B.Sc")) return "B.Sc";
  if (title.includes("12th")) return "12th";
  return title;
}