import React from 'react'
import Card from './Card'
import { work } from '../constants'

const ProjectSection = () => {
  return (
    <>
    <div className="project-container" id='work'>
        {
            work.map((item, index) => (
                <Card key={index} card={item} />
            ))
        }
    </div>
    </>
  )
}

export default ProjectSection
