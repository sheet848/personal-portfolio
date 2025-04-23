import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer-content">
        <div className="contact">
            <p className="footer-title">Contact</p>
            <h2>Let's start creating together</h2>
            <Button text="Let's talk" bgcolor="#fff"/>
        </div>
        <div className="social-links">
            <ul>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Email</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">GitHub</a></li>
            </ul>
        </div>
        </div>
    </footer>
    </>
  )
}

export default Footer