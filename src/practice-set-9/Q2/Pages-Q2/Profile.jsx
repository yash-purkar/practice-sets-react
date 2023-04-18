import React, { useContext } from 'react'
import { BooksContext } from '../Contexts-Q2/BooksContext'

export const Profile = () => {
  const { user } = useContext(BooksContext)
  const { name, bio, img } = user;
  return (
    <>
      <h1>Profile</h1>
      <img src={img} alt="img" />
      <h3>Name: {name}</h3>
      <p><strong>Bio</strong>: {bio}</p>
    </>
  )
}
