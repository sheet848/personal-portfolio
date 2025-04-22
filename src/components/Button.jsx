import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Button = ({ text }) => {
  return (
    <>
    <div className="button-container">
        <a href="#">
            <span className="button-text">{text}{" "}</span>
            <span className='arrow-right'><AiOutlineArrowRight /></span>
        </a>
    </div>
    </>
  )
}

export default Button