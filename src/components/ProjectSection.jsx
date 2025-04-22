import React from 'react'
import Card from './Card'
import { work } from '../constants'

const ProjectSection = () => {
  return (
    <>
    <div className="project-container">
        {
            work.map((item, index) => (
                <Card />
            ))
        }
    </div>
    </>
  )
}

export default ProjectSection