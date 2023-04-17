import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { Home } from './Q1/Pages-Q1/Home'
import { Inbox } from './Q1/Pages-Q1/Inbox'
import { Sent } from './Q1/Pages-Q1/Sent'
import { EmailDetails } from './Q1/Pages-Q1/EmailDetails'
import { SentEmailDetails } from './Q1/Pages-Q1/SentEmailDetails'

/*1️⃣Create an Email app in React with different routes:

Landing Page - It shows a heading and two routes - Inbox and Sent
Inbox Page - It should have the list of all received emails.
Individual Email Page - It should show content of that particular opened email.
Show two counters on the top of Inbox page for number for Read emails and Unread emails. Have a button for each email in the inbox email listing page for emails which have read as false. If you mark an email as read, the counter value for read and unread emails should change. Do this using context.
Sent Page - It should have the list of all sent emails similar to inbox page but without any buttons to mark as read. If you click on any of the sent emails, it should open that individual email in a unique route.*/

export const EmailApp = () => {
  return (
    <>
      <Home />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/sent' element={<Sent />} />
        <Route path='/inbox/:emailId' element={<EmailDetails />} />
        <Route path='/sent/:emailId' element={<SentEmailDetails />} />
      </Routes>
    </>
  )
}


//1st make all pages
//call a fake fetch in EmailContext.jsx and store it in a state variable
//consume this emails data in inbox page and map on this data and call an emailCard component in map
//create a new comp EmailCard for display each email.
//add mark as Read btn (add condition)

//create a sent page and consume sentEmails in it.
//there are two arrays in data so in inbox page map on emails and in sent page map on sentEmails
//define a handleReadEmail fn and it will take an id and with matching id it'll change the value of read false to true
//use reduce to see read and unread emails.


//create EmailDetails and sentEmailsDetails for showing the detais of emails when user clicks on the email.

// use this logic in EmailCard and pass boolean value from inbox page.
//<NavLink to={`/${inbox ? "inbox" : "sent"}/${id}`}>{subject}</NavLink>