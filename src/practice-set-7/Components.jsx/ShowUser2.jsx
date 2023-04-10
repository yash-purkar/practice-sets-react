import React from 'react'

export const ShowUser2 = ({ user: { name, email, website, company } }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{email}</p>
      <p>{website}</p>
      <p>{company}</p>
    </li>
  )
}
