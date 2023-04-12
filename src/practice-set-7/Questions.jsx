import React from 'react'
import { Movies, Movies2, Products, Products2, Products3, QuotesGenerator, User, Users, Weather, Products4 } from './Set7'

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
      <li><QuotesGenerator /></li>
      <hr />
      <li><Movies2 /></li>
      <hr />
      <li><Products /></li>
      <hr />
      <li><Products2 /></li>
      <hr />
      <li><Products3 /></li>
      <hr />
      <li><Products4 /></li>
    </ol>
  )
}
