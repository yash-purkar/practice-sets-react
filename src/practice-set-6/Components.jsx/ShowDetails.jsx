import React from 'react'

export const ShowDetails = ({ projectDetails: { title, description, technologies, completed } }) => {
  return (
    <div>
      <h1>Project Details</h1>
      <div><span>Title:</span> {title}</div>
      <div><span>Description:</span> {description}</div>
      <div><span>Technologies:</span> {technologies.map(tech => `${tech} `)}</div>
      <div><span>Completed:</span> {completed ? "Yes" : "No"}</div>
    </div>
  )
}
