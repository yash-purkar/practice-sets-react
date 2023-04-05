import { Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11, Question12, Question13, Question14 } from "./Set4"


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
      {/* Checkbox Questions */}
      <li><Question9 /></li>
      <hr />
      <li><Question10 /></li>
      <hr />
      <li><Question11 /></li>
      <hr />
      <li><Question12 /></li>
      <hr />
      {/* Radio Questions */}
      <li><Question13 /></li>
      <hr />
      <li><Question14 /></li>
      <hr />
    </ol>
  )
}
