import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <>
    <footer id="contact">
        <div className="footer-content">
        <div className="contact">
            <p className="footer-title">Contact</p>
            <h2>Have a project, or<br></br> just want to say hi?</h2>
            <Button text="Let's Connect" bgcolor="#fff"/>
        </div>
        <div className="social-links">
            <ul>
                <li><a href="mailto:sheetalnaik310@gmail.com" target="_blank">Email</a></li>
                <li><a href="https://www.linkedin.com/in/developer-sheetalnaik/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/sheet848" target="_blank">GitHub</a></li>
            </ul>
        </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
