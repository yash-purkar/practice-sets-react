import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch2 } from '../../Data';
export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]);
  const [user, setUser] = useState({});
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [favoriteBooksId, setFavoriteBooksId] = useState([])

  const [readBooks, setReadBooks] = useState([])
  const [readBooksId, setReadBooksId] = useState([])

  // console.log(booksData, user)
  const getBooksDetails = async () => {
    try {
      const { status, data: { books, user } } = await fakeFetch2("https://example.com/api/books");
      if (status === 200) {
        setBooksData(books)
        setUser(user)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleAddToFavorite = (bookToBeAdded) => {
    // console.log(bookToBeAdded)
    setFavoriteBooks([...favoriteBooks, bookToBeAdded])
    setFavoriteBooksId([...favoriteBooksId, bookToBeAdded.id])
  }

  const handleMarkAsRead = (bookToBeAdded) => {
    setReadBooks([...readBooks, bookToBeAdded])
    setReadBooksId([...readBooksId, bookToBeAdded.id])
  }

  useEffect(() => {
    getBooksDetails()
  }, [])
  return (
    <BooksContext.Provider value={{ booksData, user, handleAddToFavorite, favoriteBooks, favoriteBooksId, handleMarkAsRead, readBooks, readBooksId }}>{children}</BooksContext.Provider>
  )
}
