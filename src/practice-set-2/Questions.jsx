import React from 'react'
import { Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10 } from './Set2'

export const Questions = () => {
  return (
    <>
      <h1 style={{ color: "blueviolet" }}>ReactJS Practice Question Set 2</h1>
      <hr />
      <ol>
        <li><Question1 /></li>
        <hr />
        <li><Question2 /></li>
        <hr />
        <li><Question3 /></li>
        <hr />
        <li><Question4 /></li>
        <hr />
        <li><Question5 /></li>
        <hr />
        <li><Question6 /></li>
        <hr />
        <li><Question7 /></li>
        <hr />
        <li><Question8 /></li>
        <hr />
        <li><Question9 /></li>
        <hr />
        <li><Question10 /></li>
        <hr />
      </ol>
    </>
  )
}