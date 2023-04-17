import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from '../../Data';


export const EmailContext = createContext();

export const EmailContextProvider = ({ children }) => {
  const [emails, setEmails] = useState([]);
  const [sentEmails, setSentEmails] = useState([]);

  const getEmails = async () => {
    try {
      const { status, data: { emails, sentEmails } } = await fakeFetch("https://example.com/api/allemails");
      if (status === 200) {
        setEmails(emails)
        setSentEmails(sentEmails)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleReadEmails = (id) => {
    const updatedEmails = emails.map((email) => email.id === id ? { ...email, read: !email.read } : email)
    setEmails(updatedEmails)
  }

  useEffect(() => {
    getEmails();
  }, [])


  return (
    <EmailContext.Provider value={{ emails, sentEmails, handleReadEmails }}>
      {children}
    </EmailContext.Provider>
  )
}
