import React from 'react'
import { techicons } from '../constants'

const TechStack = () => {
  return (
    <>
    <div className="tech-container">
    {
        techicons.map((item, index) => (
            <div className="icon" key={index}>
                {item.icon}
            </div>
        ))
    }
    </div>
    </>
  )
}

export default TechStack