import React from 'react'
import { Movies, User, Users, Weather } from './Set7'

export const Questions = () => {
  return (
    <ol>
      <li><Weather /></li>
      <hr />
      <li><User /></li>
      <hr />
      <li><Movies /></li>
      <hr />
      <li><Users /></li>
      <hr />
    </ol>
  )
}
