// ReactJS Practice Question Set 3
// Instructions:#
// Do these questions in a React JS template editor. You can use React JS CodeSandbox or React JS REPL.
// This set is about practicing JSX, conditional styling and use of useState hook in React.
// You can make use of methods such as .map(), .filter(), .reduce(), .length, .toLowerCase(), .toUpperCase() wherever needed.
// Do NOT use for-loops.

import React from 'react'
import { Question1, Question2, Question3, Question4, Question5, Question6 } from './Set3'

export const Questions = () => {
  return (
    <>
      <h1 style={{ color: "blueviolet" }}>ReactJS Practice Question Set 3</h1>
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

      </ol>
    </>
  )
}
