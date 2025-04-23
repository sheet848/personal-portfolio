import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Button = ({ text, bgcolor }) => {
  return (
    <>
    <div className="button-container" style={{ background: bgcolor }}>
        <a href="#">
            <span className="button-text" style={{ color: bgcolor != "#000" ? "#000" : "#fff" }}>{text}{" "}</span>
            <span className='arrow-right'style={{ color: bgcolor != "#000" ? "#000" : "#fff" }}><AiOutlineArrowRight /></span>
        </a>
    </div>
    </>
  )
}

export default Button
