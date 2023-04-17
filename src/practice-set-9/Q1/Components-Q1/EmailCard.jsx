import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { EmailContext } from '../Contexts/EmailContext'


export const EmailCard = ({ id, sender, subject, message, read, inbox }) => {
  const { handleReadEmails } = useContext(EmailContext)
  return (
    <li>
      <NavLink to={`/${inbox ? "inbox" : "sent"}/${id}`}>{subject}</NavLink>
      {!read && <button onClick={() => handleReadEmails(id)}>Mark as Read</button>}
    </li>
  )
}
