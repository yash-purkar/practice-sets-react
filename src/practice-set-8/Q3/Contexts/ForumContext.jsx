import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch3 } from '../../Data';

export const ForumContext = createContext();

export const ForumContextProvider = ({ children }) => {
  const [forumData, setForumData] = useState([]);
  const getForumData = async () => {
    try {
      const { status, data: { questions } } = await fakeFetch3("https://example.com/api/questions");
      status === 200 && setForumData(questions)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getForumData()
  }, [])
  return (
    <ForumContext.Provider value={{ forumData }}>
      {children}
    </ForumContext.Provider>
  )
}
