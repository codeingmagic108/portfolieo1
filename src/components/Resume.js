import React from 'react'
import resume from './resume.css';

export default function Resume() {
  return (
    <div >

      <div class="resume">
        <h1 class='resume-title'>Dheeraj Kumar</h1>
        <ul class='contact-info'>
          <li><number>+91 7070109201</number></li>
          <li><i class="fa-brands fa-github"></i><a href="https://github.com/codeingmagic108" target="_blank" >GitHub</a></li>
          <li><i class="fa-brands fa-linkedin  circle12"></i><a href="https://www.linkedin.com/in/codeing-magic-380038252/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrO07WhaoRrqUUHwboBMb3A%3D%3D" target="_blank" >LinkedIn</a></li>
          <li><i class="fa-solid fa-envelope"></i><email>dheerajkumarcpr94@gmail.com</email></li>
        </ul>
        <h2>Career Objective</h2>
        <hr class='hrr1'/>
        <p>Motivated and details-oriented B.tech Computer Science student with strong foundation in programming and problem-solving. Seeking an internship opportunity to apply skills in real-world  projects and grow as a software developer.</p>
        
        <h2>Technical Skills</h2>
        <hr class='hrr1'/>
        <div class='skills'>
        <span class='heading'>Programming Languages:</span><span class='non-heading'>C, C++, Java, JavaScript, HTML, CSS, React, Basic Python</span><br class='hrr1'/>
        <span class='heading'>Frameworks/Libraries:</span><span class='non-heading'>React.js, Node.js</span><br class='hrr1'/>
        <span class='heading'>Data Base:</span><span class='non-heading'>My Sql <span>|<br class='hrr1'/></span></span><span class='heading'>Tools:</span><span class='non-heading'>Git, GitHub, Visual Studio Code, AWS, Digital Ocean</span>
        </div>
        <h2>Projects</h2>
        <hr class='hrr1'/>
        <div class='project-list'>
        <ul>
          <li><project>Project 1</project>: Description of project 1</li>
          <li><project>Project 2</project>: Description of project 2</li>
          <li><project>Project 3</project>: Description of project 3</li>
        </ul>
        </div>
        <h2>Internships</h2>
        <hr class='hrr1'/>
        <div class='internship-list'>
        <p><internship>Internship 1</internship>: Description of internship 1</p>
        </div>
        <h2>Education</h2>
        <hr class='hrr1'/>
        <div class='education-list'>
        <p>Pursuing B.tech in computer science & Engineering from St.Andrews of Technology & Management,Grugram Haryana (2022-2026)</p>
        <br></br>
        <p><education>Class 12<sup>th</sup>-BSEB, Rajendra College Chhapra,Saran - 70% (2020)</education></p>
        <br></br>
        <p><education>Class 10<sup>th</sup>-Bihar School Examination Board - 65% (2018)</education></p>
        </div>
        <h2>Personal Details</h2>
        <hr class='hrr1'/>
        <p><b>Father's Name:</b> Ramesh Singh (Teacher) </p>
        <p><b>Date of Birth:</b>01/01/2003</p>
        <p><b>Gender:</b> Male</p>
        <p><b>Nationality:</b> Indian</p>
        <p><b>Marital Status:</b> Unmarried</p>
        <p><b>Languages:</b> Hindi(Native), English(Fluent)</p>

      </div>
      {/* <Footer class='hrr1'/> */}
    </div>
  )
}
