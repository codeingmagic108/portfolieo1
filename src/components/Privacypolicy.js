import React from 'react'
import privacypolicy from './privacypolicy.css'

export default function Privacypolicy() {
  return (
    <div class='policy-container'>
        <div class='policy-list'>
            <h1>Privacy Policy</h1>
            <h2>Effective Date:[insert Date]</h2>
            <p>Thank you for visiting my portfolio website (the “Site”). Your privacy is important to me, and I am committed to protecting any personal information you may share while visiting.</p>
            <p>This Privacy Policy outlines how I collect, use, and safeguard your information.</p>
            <hr class="hr"/>
            <h2>1. Information I Collect</h2>
            <p>I may collect limited personal information when you interact with the Site, such as:</p>
            <ul>
                <li><span class='h3'>Contact Information:</span>If you fill out a contact form, I may collect your name, email address, and any message you provide.</li>
                <li><span class='h3'>Usage Data:</span>I may collect non-personal information automatically, such as browser type, IP address, pages visited, and time spent on the site. This is typically collected via cookies or analytics tools.</li>
            </ul>
            <hr class="hr"/>
            <h2>2. How I Use Your Information</h2>
            <p>Your information may be used to:</p>
            <ul>
                <li>Respond to inquiries or messages sent via the contact form.</li>
                <li>Improve the website’s performance and content.</li>
                <li>Analyze traffic and usage trends (using tools like Google Analytics, if applicable).</li>
            </ul>
            <hr class="hr"/>
            <h2>3. Cookies</h2>
            <p>This Site may use cookies to enhance user experience and analyze performance. You can choose to disable cookies through your browser settings.</p>
            <hr class="hr"/>
            <h2>4. Third-Party Services</h2>
            <p>I may use third-party services to operate the Site (e.g., hosting providers, analytics tools). These services may collect information in accordance with their own privacy policies.</p>
            <p>Examples (only include if applicable):</p>
            <ul>
                <li>Google Analytics</li>
                <li>Formspree / Netlify Forms / other contact form services</li>
            </ul>
            <hr class="hr"/>
            <h2>5. Data Security</h2>
            <p>I take reasonable steps to protect your information but cannot guarantee absolute security, especially when information is transmitted over the internet.</p>
            <hr class="hr"/>
            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have rights to access, correct, or delete your personal data. To make a request, please contact me at [Your Email Address].</p>
            <hr class="hr"/>
            <h2>7. Changes to This Policy</h2>
            <p>I may update this Privacy Policy from time to time. Changes will be posted on this page with a new effective date.</p>
            <hr class="hr"/>
            <h2>8. Contact</h2>
            <p>If you have any questions about this Privacy Policy, please contact me at:</p>
            <ul>
                <li><span class='h3'>Name</span>[Your Name]</li>
                <li><span class='h3'>Email:</span>[Your Email Address]</li>
                <li><span class='h3'>Website:</span></li>
            </ul>
        </div>
    </div>
  )
}
