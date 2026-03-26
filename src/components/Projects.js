import React from 'react'
import './projects.css';

export default function Projects() {
  return (
    <div>
      <div class='projects'>
        <h2><a href="https://www.jobfind24.shop" target="_blank" rel="noreferrer">JOBFIND24</a></h2><hr class='hrr1'/><hr class='hrr1'/>
        <div>
          <p> <b>Description : </b> Jobfind24 is a comprehensive full-stack web platform designed to simplify the process of finding government jobs, exam results, admit cards, and answer keys for users across India.</p>
          <ul>
            
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
        </div><br></br>
        <h2><a href="https://codeingmagic108.github.io/portfolieo1/#/" target="_blank" rel="noreferrer">Portfolio Website</a></h2><hr class='hrr1'/><hr class='hrr1'/>
        <div>
          <p><b>Tech Stack:</b> React.js, React Router, CSS, HTML, JavaScript.</p>
          <p><b>Description:</b>This is a fully responsive personal portfolio website built using React.js. The site showcases my professional profile, resume, projects, and contact information in a clean and modern layout.</p>
          <ul>
            <li> <b>Multi-Page Navigation:</b> Uses React Router for seamless navigation between Home, Resume, Projects, Contact, Privacy Policy, and Accessibility Statement pages.</li>
            <li><b>Responsive Design:</b> The layout adapts to all screen sizes, ensuring a great user experience on both desktop and mobile devices.</li>
            <li><b>Modular Components:</b> Each section (Navbar, Footer, Home, Resume, Projects, Contacts, etc.) is implemented as a reusable React component for maintainability and scalability.</li>
            <li><b>Downloadable Resume:</b> Users can view and download my resume directly from the website.</li>
            <li><b>Contact Form:</b> A simple contact form allows visitors to reach out easily.</li>
            <li><b>Accessibility & Privacy:</b> Includes dedicated pages for privacy policy and accessibility statement.</li>
            <li><b>Deployment:</b> The website is deployed on GitHub Pages for easy access and sharing.</li>
          </ul>
        </div><br></br>
        <h2><a href="https://todo-list-project-sage.vercel.app" target="_blank" rel="noreferrer">To-Do Website</a></h2><hr class='hrr1'/><hr class='hrr1'/>
        <div>
          <p><b>Tech Stack:</b> HTML5, CSS3, JavaScript.</p>
          <p><b>Description:</b>A minimalist todo list web application built using pure HTML, CSS, and vanilla JavaScript. The app allows users to add, edit, complete, and delete tasks with a clean and intuitive interface. All todos are saved in the browser’s localStorage, so your list stays even after refreshing the page.</p>
          <p><b>Key Features:</b></p>
          <ul>
            <li>Add new tasks with a single click or by pressing Enter.</li>
            <li>Mark tasks as completed with a checkbox (strike-through effect).</li>
            <li>Edit tasks by double-clicking on them.</li>
            <li>Delete tasks instantly.</li>
            <li>Persistent storage using localStorage—no backend required.</li>
            <li>Responsive and user-friendly design.</li>

          </ul>
          <div style={{marginTop: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
            <a href="https://todo-list-project-sage.vercel.app/" target="_blank" rel="noreferrer">
              <button style={{padding: '8px 18px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Visit Project</button>
            </a>
            <a
              href={
                window.location.hostname === "localhost"
                  ? "https://todo-list-project-sage.vercel.app/"
                  : "/https://todo-list-project-sage.vercel.app/"
              }
              download
              rel="noreferrer"
            >
              <button style={{padding: '8px 18px', background: '#ffc107', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Download Synopsis</button>
            </a>
            <a href="https://todo-list-project-sage.vercel.app/" rel="noreferrer">
              <button style={{padding: '8px 18px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>View Synopsis</button>
            </a>
          </div>
          
        </div><br></br>

        <h2><a href="https://calculator-viwj.vercel.app/" target="_blank" rel="noreferrer">Simple Calculator</a></h2><hr class='hrr1'/><hr class='hrr1'/>
        <div>
          <p><b>Tech Stack:</b> HTML5, CSS3, JavaScript.</p>
          <p><b>Description:</b>A basic calculator web app that allows users to perform arithmetic operations like addition, subtraction, multiplication, division, percentage, and more. The interface is styled for a modern look and is fully interactive.</p>
          <p><b>Key Features:</b></p>
          <ul>
            <li>Clickable buttons for digits, operators, and actions (AC, DEL, =)</li>
            <li>Input field displays the current expression/result</li>
            <li>Supports multi-digit and decimal calculations</li>
            <li>"AC" clears all input, "DEL" removes the last character, "=" evaluates the expression</li>
            <li>Responsive and visually appealing design using custom CSS</li>
            <li>Responsive and user-friendly design.</li>

          </ul>
          <div style={{marginTop: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
            <a href="https://calculator-viwj.vercel.app/" target="_blank" rel="noreferrer">
              <button style={{padding: '8px 18px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Visit Project</button>
            </a>
            <a
              href={
                window.location.hostname === "localhost"
                  ? "https://calculator-viwj.vercel.app/"
                  : "/https://calculator-viwj.vercel.app/"
              }
              download
              rel="noreferrer"
            >
              <button style={{padding: '8px 18px', background: '#ffc107', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Download Synopsis</button>
            </a>
            <a href="https://calculator-viwj.vercel.app/" rel="noreferrer">
              <button style={{padding: '8px 18px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>View Synopsis</button>
            </a>
          </div>
          
        </div><br></br>



       <h2><a href="https://labrary-management-system-jamh.vercel.app/" target="_blank" rel="noreferrer">Library Management System</a></h2><hr class='hrr1'/><hr class='hrr1'/>
        <div>
          <p><b>Tech Stack: </b> HTML, CSS (Bootstrap), JavaScript (jQuery), Owl Carousel</p>
          <p><b>Description:</b> A comprehensive web-based system designed to automate and streamline the management of computer labs in educational institutions. The platform supports multiple user roles including administrators, instructors, technical staff, and students, providing each with tailored features and dashboards.</p>
          <p><b>Key Features:</b></p>
          <ul>
              <li>Lab Scheduling & Management: View lab details, schedules, and student allocations.</li>
              <li>E-Learning: Access to digital learning resources and guides (e.g., MS Word, MS Excel).</li>
              <li>Complaint Handling: Online complaint submission and tracking for lab issues.</li>
              <li>Assignment Management: Assignment upload, tracking, and management for students and instructors.</li>
              <li>Admin Dashboard: Manage announcements, assignments, complaints, courses, labs, profiles, and users.</li>
              <li>Instructor Showcase: Display of instructor profiles with images.</li>
              <li>Newsletter Subscription: Users can subscribe for updates and announcements.</li>
              <li>Responsive UI: Built with Bootstrap for mobile and desktop compatibility.</li>
              <li>Interactive Visuals: Carousels for banners, labs, courses, and instructors.</li>

          </ul>

          <div style={{marginTop: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
            <a href="https://labrary-management-system-jamh.vercel.app/" target="_blank" rel="noreferrer">
              <button style={{padding: '8px 18px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Visit Project</button>
            </a>
            <a
              href={
                window.location.hostname === "localhost"
                  ? "https://labrary-management-system-jamh.vercel.app/"
                  : "/https://labrary-management-system-jamh.vercel.app/"
              }
              download
              rel="noreferrer"
            >
              <button style={{padding: '8px 18px', background: '#ffc107', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Download Synopsis</button>
            </a>
            <a href="https://labrary-management-system-jamh.vercel.app/" rel="noreferrer">
              <button style={{padding: '8px 18px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>View Synopsis</button>
            </a>
          </div><br></br>




        </div>
      </div>
    </div>
  )
}
