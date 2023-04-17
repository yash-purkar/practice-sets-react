import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { EmailContext } from '../Contexts/EmailContext';

export const SentEmailDetails = () => {
  const { emailId } = useParams();
  const { sentEmails } = useContext(EmailContext);

  const { to, subject, message } = sentEmails.find(({ id }) => id === Number(emailId))
  console.log(emailId)
  return (
    <>
      <h1>{subject}</h1>
      <p>To: {to}</p>
      <p>Message: {message}</p>
    </>
  )
}
