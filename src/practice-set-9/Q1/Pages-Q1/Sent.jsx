import React, { useContext } from 'react'
import { EmailContext } from '../Contexts/EmailContext'
import { EmailCard } from '../Components-Q1/EmailCard';

export const Sent = () => {
  const { sentEmails } = useContext(EmailContext);
  return (
    <>
      <h3>Sent Emails: {sentEmails.length}</h3>
      <ul>
        {
          sentEmails.map(email => {
            return <EmailCard {...email} />
          })
        }
      </ul>
    </>
  )
}
