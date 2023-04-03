import { Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8 } from "./Set4"


export const Questions = () => {
  return (
    <ol>
      {/* Input Questions */}
      <li><Question1 /></li>
      <hr />
      <li><Question2 /></li>
      <hr />
      <li><Question3 /></li>
      <hr />
      <li><Question4 /></li>
      <hr />
      {/* Button Questions */}
      <li><Question5 /></li>
      <hr />
      <li><Question6 /></li>
      <hr />
      <li><Question7 /></li>
      <hr />
      <li><Question8 /></li>
      <hr />
    </ol>
  )
}
