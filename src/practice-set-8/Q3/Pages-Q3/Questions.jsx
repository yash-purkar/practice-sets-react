import React, { useContext } from 'react'
import { ForumContext } from '../../Questions'
import { ForumCard } from '../Components-Q3/ForumCard'


export const Questions = () => {
  const { forumData } = useContext(ForumContext)
  return (
    <ul>
      {
        forumData.map((item) => {
          return <ForumCard {...item} noDetail />
        })
      }
    </ul>
  )
}
