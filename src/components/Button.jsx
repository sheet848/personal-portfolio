import React from 'react'
//import { HiOutlineArrowSmallRight } from 'react-icons/hi2';

const Button = ({ text, bgcolor }) => {
  return (
    <>
    <div className="button-container" style={{ background: bgcolor }}>
        <a href="#">
            <span className="button-text" style={{ color: bgcolor != "#000" ? "#000" : "#fff" }}>{text}{" "}</span>
        </a>
    </div>
    </>
  )
}

export default Button
