import React, { useContext } from 'react'
import { EmailContext } from '../Contexts/EmailContext'
import { EmailCard } from '../Components-Q1/EmailCard'

export const Inbox = () => {
  const { emails } = useContext(EmailContext)

  const { read, unread } = emails.reduce((acc, curr) => curr.read ? { ...acc, read: acc.read + 1 } : { ...acc, unread: acc.unread + 1 }, { read: 0, unread: 0 })

  return (
    <>
      <h3>Read Emails: {read} | Unread Emails: {unread}</h3>
      <ul>
        {
          emails.map(email => {
            return (
              <EmailCard key={email.id} {...email} inbox />
            )
          })
        }
      </ul>
    </>
  )
}
