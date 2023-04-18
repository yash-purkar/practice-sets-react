import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { EmailContext } from '../Contexts/EmailContext';

export const EmailDetails = () => {
  const { emailId } = useParams();
  const { emails } = useContext(EmailContext);

  const { subject, sender, message } = emails.find(({ id }) => id === Number(emailId))
  console.log(emailId)
  return (
    <>
      <h1>{subject}</h1>
      <p>From: {sender}</p>
      <p>Message: {message}</p>
    </>
  )
}
