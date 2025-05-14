import React from 'react'

const Card = ({ card }) => {
  return (
    <>
    <div className="card-container">
      <div className="card">
        <div className="thumbnail">
          <a href={card.preview} className="thumbnail-link" target='_blank'>
            <img className="img-thumbnail" src={card.img} alt="project-img" />
          </a>
        </div>
        <p className='project-source'><a href={card.github} target="_blank">Github</a></p>

        <div className='card-button-container'>
          <a href={card.preview} target="_blank">
            <button className="preview">Preview</button>
          </a>
          <a href={card.github} target="_blank">
            <button className='github'>GitHub</button>
          </a>
        </div>
      </div>
        <p className="company">{card.companyname}</p>
        <p className="project-name">{card.projectname}</p>
    </div>
    </>
  )
}

export default Card
