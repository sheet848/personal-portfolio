import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <>
    <div className="hero-container">
        <p className="content-band">
            Branding . Product Design
        </p>
        <h1 className="heading-title">
            <span className="black-band">Discover the essence of Pearl, a free Framer template.{" "}</span>
            <span className="grey-band">Let's shape your brand into a masterpiece together.</span>
        </h1>
        <Button text="Get for free" bgcolor="#000"/>
    </div>
    </>
  )
}

export default Hero
