import React from 'react'

const Button = ({ text, bgcolor }) => {
  return (
    <>
      <a href="#">
        <div className="button-container" style={{ background: bgcolor }}>
          <span className="button-text" style={{ color: bgcolor != "#000" ? "#000" : "#fff" }}>{text}{" "}</span>
        </div>
      </a>
    </>
  )
}

export default Button
