import React from 'react'
import { NavLink } from 'react-router-dom'
export const ForumCard = ({ id, question, answer, noDetail }) => {
  return (
    <li key={id}>
      <h2>{question}</h2>
      {noDetail && <>
        <NavLink to="" className="forumLinks">upvote</NavLink>
        <NavLink to="" className="forumLinks">downvote</NavLink>
        <NavLink to={`/answer/${id}`} className="forumLinks">answer</NavLink>
      </>}
      {!noDetail && <p><span>Answer:</span> {answer}</p>}
    </li>
  )
}
