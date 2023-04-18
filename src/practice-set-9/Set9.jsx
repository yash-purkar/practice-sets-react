import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { Home } from './Q1/Pages-Q1/Home'
import { Inbox } from './Q1/Pages-Q1/Inbox'
import { Sent } from './Q1/Pages-Q1/Sent'
import { EmailDetails } from './Q1/Pages-Q1/EmailDetails'
import { SentEmailDetails } from './Q1/Pages-Q1/SentEmailDetails'
//Q2
import { Home1 } from './Q2/Pages-Q2/Home1'
import { Favorites } from './Q2/Pages-Q2/Favorites'
import { Read } from './Q2/Pages-Q2/Read'
import { Profile } from './Q2/Pages-Q2/Profile'
import { Navbar1 } from './Q2/Components-Q2/Navbar1'
import './Q2/styles2.css'


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

// *******************************************



// 2️⃣Create a books app in React. It should have the following routes:
// a. Home page - This renders all the books coming from the api. Fake fetch has been provided below.
// b. Favorites Page -
// There would be a button along with each of the book of Add to Fav. On clicking that, the book should be added to favourites. Do this using context. And if the book already exists in favourites, the button should be texted Go to Fav - The navbar item should show the count of books in favourites.
// c. Read page -
// There will be button of Mark as read. On clicking it, the book will be added to Read page. Do this using context. If already exists, the button should be texted Already read
// d. Profile page - It should display the user details coming from the result of the api.

export const Books = () => {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/read" element={<Read />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}
//All pages and navbar
//call an api in BooksContext.jsx and set that data in state variable.
//consume booksData in Home component and map on the booksData and call a BookCard in map to display each book.

// b. Add "Add to Favorite" btn with each book and on click of btn it should be added in favorite page.
//crete a state variable in context file e.g favoriteBooks and create a fn and call it on click of "Add to Cart" btn which will add a book item in favoriteBooks and consume favoriteBooks variable in Favorites page and map over on favoriteBooks array.

//create a state variable to store the id's of favoriteBooks
//make a "Add to favorite" btn to "Go to favorite" for that onClick of Add to cart btn in handleAddToFavorite btn add the id of book in favoriteBooksId and in BookCard use ternary to btn.

//c. create a state variable to store read books data and also create a readBooksId to disable the btn on condition , create a fn handleMarkAsRead and in that add a read book in readBooks state variable and add the id of read book and in readBooksId and in BookCard show the btn on Condition.
//consume readBooks in Read page and map on that data
//use includes on readBooksId in BookCard to show the btns

// d. consume user in profile and print details