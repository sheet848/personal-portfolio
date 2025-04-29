import React from 'react'
import { techicons } from '../constants'
import Tooltip from '@mui/material/Tooltip';

const TechStack = () => {
  return (
    <>
    <div className="tech-container">
    {
        techicons.map((item, index) => (
            <div className="icon" key={index}>
              <Tooltip title={item.name}>
              {item.icon}
              </Tooltip>
            </div>
        ))
    }
    </div>
    </>
  )
}

export default TechStack
