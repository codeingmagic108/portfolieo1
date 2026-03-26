import React from 'react'
import './resume.css';

export default function Resume() {
  return (
    <div >

      <div class="resume">
        <h1 class='resume-title'>DHEERAJ KUMAR</h1>
        <ul class='contact-info'>
          <li><number>+91 7070109201</number></li>
          <li><i class="fa-brands fa-github"></i><a href="https://github.com/codeingmagic108" target="_blank" rel="noreferrer" >GitHub</a></li>
          <li><i class="fa-brands fa-linkedin  circle12"></i><a href="https://www.linkedin.com/in/codeing-magic-380038252/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrO07WhaoRrqUUHwboBMb3A%3D%3D" target="_blank" rel="noreferrer" >LinkedIn</a></li>
          <li><i class="fa-solid fa-envelope"></i><email>dheerajkumarcpr94@gmail.com</email></li>
        </ul>
        <h2>CAREER OBJECTIVE</h2>
        <hr class='hrr1'/>
        <p>I am an enthusiastic and dedicated aspiring Full Stack Software Engineer seeking to begin my career 
              in an environment where I can effectively apply my frontend and backend development skills. My goal 
               is to build scalable, secure, and user-friendly web applications that solve real-world problems while 
                 continuously learning and contributing meaningfully to the growth of the organization.</p>
        
        <h2>SKILLS</h2>
        <hr class='hrr1'/>
        <div class='skills'>
        <span class='heading'>Language & Frameworks:</span><span class='non-heading'>JavaScript, Java, HTML, CSS, React.js, Node.js,Express.js, C, C++, Basic Python</span><br class='hrr1'/>
        {/* <span class='heading'>Frameworks/Libraries:</span><span class='non-heading'>React.js, Node.js</span><br class='hrr1'/> */}
        <span class='heading'>Data Base:</span><span class='non-heading'>My Sql, MongoDB <span>|<br class='hrr1'/></span></span>
        <span class='heading'>Tools:</span><span class='non-heading'>Git, GitHub, Visual Studio Code, AWS, Digital Ocean</span>
        </div>
        
        <h2>PROJECTS</h2>
        <hr class='hrr1'/>
        <div class='project-list'>
        <span class='heading'><u><i>Project Title:- </i></u> Jobfind24 |<a href="https://www.jobfind24.shop" target="_blank" rel="noreferrer"> Visit Website</a> </span><br class='hrr1'/>
        <span class='heading'>Tech Stack:</span><span class='non-heading'>React.js, Node.js, Express.js, MongoDB, REST API, JWT Auth.</span><br class='hrr1'/>
        <span class='heading'>Description:</span><span class='non-heading'>  Developed a full-stack web application that aggregates and organizes government job notifications, exam results, admit cards, and answer keys. The platform features real-time updates, advanced search and filtering, user authentication, admin dashboard, and a responsive UI with dark/light mode. </span><br class='hrr1'/>
        <span class='heading'><u><i>Project Title:- </i></u>Portfolio Website  |  <a href="https://codeingmagic108.github.io/portfolieo1/#/" target="_blank" rel="noreferrer"> Visit Website</a> </span><br class='hrr1'/>
        <span class='heading'>Tech Stack:</span><span class='non-heading'>HTML, CSS, JavaScript. </span><br class='hrr1'/>
        <span class='heading'>Description:</span><span class='non-heading'>Developed a modern, responsive portfolio website using React.js, showcasing personal projects, skills, and experience. Implemented reusable components, integrated a downloadable resume, and ensured cross-device compatibility with clean UI/UX design. Leveraged best practices in React development for maintainability and performance. </span><br class='hrr1'/>
        
        </div>

        <h2>EDUCATION</h2>
        <hr class='hrr1'/>
        <div class='education-list'>
        <p>Pursuing B.tech in computer science & Engineering from St.Andrews of Technology & Management,Grugram Haryana(MDU)  ----------2022-2026</p>
        <br></br>
        <p><education>Intermediate -BSEB, Rajendra College Chhapra,Saran.</education></p>
        
        </div>
        <h2>WORK EXPERIENCE</h2>
        <hr class='hrr1'/>
        <span class='heading'>Full Stack Web Developer</span>
        <ul class='work-experience'>
          <li><span class='non-heading'>Developed full-stack web application Jobfind24 using React.js, Node.js, Express.js, and MongoDB. </span> </li>
          <li><span class='non-heading'>Implemented JWT authentication, REST APIs, and responsive UI design. </span></li>
          <li><span class='non-heading'>Deployed the project on a live domain and managed code using GitHub.  </span></li>
        </ul>

        <span class='heading'>Frontend Web Developer</span>
        <ul class='work-experience'>
          <li><span class='non-heading'>Built a responsive portfolio website using HTML, CSS, JavaScript, and React.js.  </span> </li>
          <li><span class='non-heading'>Developed mini projects including To-Do Website and Library Management System.</span></li>
          <li><span class='non-heading'>Focused on clean UI design, responsiveness, and performance optimization.  </span></li>
        </ul>
        
      </div>
      {/* <Footer class='hrr1'/> */}
    </div>
  )
}
