import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ForumContext } from '../../Questions'
import { ForumCard } from '../Components-Q3/ForumCard';

export const Answer = () => {
  const { questionId } = useParams();
  const { forumData } = useContext(ForumContext);


  const data = forumData.find(({ id }) => id === Number(questionId))
  return (
    <>
      <ul>
        <ForumCard {...data} />
      </ul>
      <NavLink to="/questions">Show All Questions</NavLink>
    </>
  )
}
