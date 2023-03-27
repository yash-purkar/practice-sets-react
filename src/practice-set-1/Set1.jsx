import { EmployeeCard } from "./EmployeeCard";
import { Button } from "./Button";
import { StationeryItems } from "./StationeryItems";
import { DisplayImage } from "./DisplayImage";
// ReactJS Practice Question Set 1
// Instructions:#
// Do these questions in a React JS template editor. You can use React JS CodeSandbox or React JS REPL.
// This set is mostly about practicing JSX and conditional styling in React. There is NO use of useState hook in this set.
// You can make use of methods such as .map(), .filter(), .reduce(), .length, toLowerCase(), toUpperCase() wherever needed.
// Do NOT use for-loops.


// 1️⃣Build an EmployeeCard component in React to display name, designation and work experience of a person. Pass name, designation and work experience as props.

// The colour of “Designation:” should be green.
// The colour of “Experience:” should be blue.


export const Question1 = () => {
  const personDetails = {
    name: "Adarsh",
    designation: "Software Engineer",
    workExperience: "5years"
  }
  return (
    <EmployeeCard personDetails={personDetails} />
  )
}

// 2️⃣ Build a React component to display a button with custom styles and button text as ‘Start’. The styles should be passed as props.

// Data:
const backgroundColor = 'lightgreen'
const color = 'darkgreen'
const borderRadius = '5px'
const padding = '10px'

export const Question2 = () => {
  return (
    <Button backgroundColor={backgroundColor} color={color} borderRadius={borderRadius} padding={padding} />
  )
}


// 3️⃣Build a React component to display a list of stationery items with a header. The items and header should be passed as props. Header should be “Stationery Items”.
const items = ['pen', 'pencil', 'ruler', 'eraser']

export const Question3 = () => {
  return (
    <StationeryItems header="Stationery Items" items={items} />
  )
}


// 4️⃣Build a React component to display an image with a caption. The image and caption should be passed as props.
// Data:
const imageLink =
  'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
const caption = 'Spring Flowers'


export const Question4 = () => {
  return <DisplayImage url={imageLink} caption={caption} />
}