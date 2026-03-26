import React from 'react'
import './projects.css'

export default function Projects() {
  return (
    <div>
      <div class='projects'>
        <h2><a href="https://www.jobfind24.shop" target="_blank" rel="noreferrer">JOBFIND24</a></h2><hr class='hrr1'/><hr class='hrr1'/>
        <div>
          <ul>
            <li> <b>Jobfind24</b> is a comprehensive full-stack web platform designed to simplify the process of finding government jobs, exam results, admit cards, and answer keys for users across India.</li>
            <li> The application delivers <b>real-time updates</b> and notifications, ensuring users never miss important opportunities or deadlines.</li>
            <li> <b>Advanced search and filtering</b> options allow users to quickly locate relevant job postings and exam information tailored to their qualifications and interests.</li>
            <li> <b>Secure user authentication</b> (JWT) and a dedicated <b>admin dashboard</b> enable personalized experiences and efficient content management.</li>
            <li> The <b>responsive UI</b> supports both dark and light modes, providing an accessible and visually appealing experience on all devices.</li>
            <li> <b>Tech Stack:</b> React.js (frontend), Node.js & Express.js (backend), MongoDB (database), REST APIs, JWT authentication.</li>
            <li> <b>Impact:</b> Helped thousands of users stay updated with the latest government job opportunities and exam results, streamlining the job search process and reducing information overload.</li>
            <li> <b>Deployment:</b> Hosted on a live domain with robust version control and CI/CD practices using GitHub.</li>
          </ul>
          <div style={{marginTop: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
            <a href="https://www.jobfind24.shop" target="_blank" rel="noreferrer">
              <button style={{padding: '8px 18px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Visit Project</button>
            </a>
            <a
              href={
                window.location.hostname === "localhost"
                  ? "/synopsys_jobfind24COMPLETE-widthout-apendix.pdf"
                  : "/portfolieo1/synopsys_jobfind24COMPLETE-widthout-apendix.pdf"
              }
              download
              rel="noreferrer"
            >
              <button style={{padding: '8px 18px', background: '#ffc107', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Download Synopsis</button>
            </a>
            <a href="/synopsys_jobfind24COMPLETE-widthout-apendix.pdf" rel="noreferrer">
              <button style={{padding: '8px 18px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>View Synopsis</button>
            </a>
          </div>
        </div>
        <h2><a href="https://codeingmagic108.github.io/portfolieo1/#/" target="_blank" rel="noreferrer">Portfolio Website</a></h2><hr class='hrr1'/><hr class='hrr1'/>
        <div>
          <ul>
            <li> Developed a responsive personal portfolio using React.js, HTML5, CSS3, and JavaScript.</li>
            <li> Showcased professional details including resume, projects, and contact form with clean UI/UX design.</li>
            <li> Implemented dynamic routing and reusable components for scalability.</li>
            <li> Deployed the project on GitHub Pages ensuring accessibility with a live URL.</li>
            <li> Integrated contact form and social media links to enhance professional networking.</li>
          </ul>
        </div>
        <h2><a href="https://codeingmagic108.github.io/todo-list-project/" target="_blank" rel="noreferrer">To-Do Website</a></h2><hr class='hrr1'/><hr class='hrr1'/>
        <div>
          <ul>
            <li> Developed a responsive To-Do application using React.js, HTML5, CSS3, and JavaScript.</li>
            <li> Implemented task management features like adding, editing, deleting, and marking tasks as complete.</li>
            <li> Designed a clean and intuitive UI with local storage persistence for task data.</li>
          </ul>
        </div>
       <h2><a href="https://codeingmagic108.github.io/library-management-system/" target="_blank" rel="noreferrer">Library Management System</a></h2><hr class='hrr1'/><hr class='hrr1'/>
        <div>
          <ul>
            <li> Developed a responsive Library Management System using React.js, HTML5, CSS3, and JavaScript.</li>
            <li> Implemented features like adding, editing, deleting, and searching books in the library.</li>
            <li> Designed a clean and intuitive UI with local storage persistence for book data.</li>
            <li> Members ka data store karna (name, ID, contact details)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
