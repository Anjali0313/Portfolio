function renderContainer(){
  const app = document.querySelector('#app');
  app.innerHTML =`<div class="sidebar">
  <div></div>
  <div>About</div>
  <div>My Skills</div>
  <div>Resume</div>
  <div>Contact</div>
  </div>
  <div class="main">
  <div class="about">
  <p>&lt;html&gt;</p>
  <p>&lt;body&gt;</p>
  <br>
  <p>&lt;h1&gt;</p>
  <h1>Hi,<br>
  I'M  Anjali<br>
  Front-End developer </h1>
  <p>&lt;/h1&gt;</p>
  <p>&lt;p&gt;<br>Front End Developer / wordpress<br>&lt;p&gt;</p>
  <button>Contact me</button>
  </div>
  <div class"Mypotfolio">
  <p>&lt;h2&gt;</p>
  <h1>My Portfolio</h1>
  <p>&lt;/h2&gt;</p>
  </div>
  </div>`
}
renderContainer()