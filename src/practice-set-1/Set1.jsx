import { useState } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { Button } from "./Button";
import { StationeryItems } from "./StationeryItems";
import { DisplayImage } from "./DisplayImage";
import { ProductsCard } from "./ProductsCard";
import { ProductsCard2 } from "./ProductsCard2";
import { StudentDetails } from "./StudentDetails";
import { EmployeeDetails } from "./EmployeeDetails";
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


// 5️⃣Given the products data. Build a React component to display the name of all products as an unordered list on the DOM.
const products = [
  { name: 'Perk', quantity: 10, sales: 7 },
  { name: 'Pepsi', quantity: 10, sales: 20 },
  { name: 'Coke', quantity: 18, sales: 50 },
  { name: 'Maggi', quantity: 41, sales: 22 },
  { name: '5Star', quantity: 7, sales: 9 },
]
export const Question5 = () => {
  return (
    <ProductsCard products={products} />
  )
}


// 6️⃣Consider the products data from previous question and display all the product details as unordered list for which the number of sales is more than the quantity.

export const Question6 = () => {
  return (
    <ProductsCard2 products={products} />
  )
}


// 7️⃣Given a student object with student name and the marks for english, maths and computers. If the total marks of a student is >= 225, the grade is A, >=180 the grade is B, >=150 the grade is C, otherwise the grade is D. Build a React Component that takes the student object as props and uses it to show all the students details, total marks and grade on the DOM as shown in the image below.
const student = {
  name: 'John Doe',
  english: 90,
  maths: 80,
  computers: 70,
}

export const Question7 = () => {
  return (
    <StudentDetails studentData={student} />
  )
}


// 8️⃣Build a React component to display all the employee details as unordered list on the DOM in the following format:
// name: name, level: level, dept: dept, designation: designation, salary: salary
const employees = [
  {
    name: 'Jack Smith',
    level: 2,
    dept: 'Tech',
    designation: 'Manager',
    salary: 24000,
  },
  {
    name: 'Mary Robbins',
    level: 3,
    dept: 'Fin',
    designation: 'Manager',
    salary: 28000,
  },
  {
    name: 'Steve Williams',
    level: 4,
    dept: 'Ops',
    designation: 'President',
    salary: 35000,
  },
  {
    name: 'Bob Andrews',
    level: 1,
    dept: 'Fin',
    designation: 'Trainee',
    salary: 16500,
  },
  {
    name: 'Dave Martin',
    level: 2,
    dept: 'Fin',
    designation: 'Manager',
    salary: 21700,
  },
  {
    name: 'Julia Clarke',
    level: 3,
    dept: 'Ops',
    designation: 'Manager',
    salary: 26900,
  },
  {
    name: 'Kathy Jones',
    level: 4,
    dept: 'Tech',
    designation: 'President',
    salary: 42500,
  },
  {
    name: 'Tom Bresnan',
    level: 2,
    dept: 'Tech',
    designation: 'Manager',
    salary: 22200,
  },
]

export const Question8 = () => {
  return (
    <ul>
      {employees.map(({ name, level, dept, designation, salary }) => <li style={{ marginBottom: "4px" }}>name:{name}, level: {level}, dept: {dept}, designation: {designation}, salary: {salary}</li>)}
    </ul>
  )
}



//9️⃣Considering above data given in question 8, at the end of all the employee details, calculate and display the total salary expense of the company. Total Salary Expense: totalSalary

export const Question9 = () => {
  const totalSalary = employees.reduce((acc, { salary }) => acc + salary, 0)
  return (
    <h2>Total Salary Expenses: {totalSalary}</h2>
  )
}

//🔟 Considering above data given in question 8, display the details of employee with orange backgroundColor, who are at level 2.

export const Question10 = () => {
  return (
    <EmployeeDetails employeeData={employees} />
  )
}


// 1️⃣1️⃣Considering above data given in question 8, add a border around the employee details whose designation is “President”.
export const Question11 = () => {
  return (
    <>
      <h1>Employee Details</h1>
      <ul>
        {
          employees.map(({ name, level, dept, designation, salary }) =>
            <li style={{ border: designation === "President" ? "1px solid orange" : "" }}>Name: {name}, Level: {level}, Dept: {dept}, Designation: {designation}, Salary: {salary}</li>
          )
        }
      </ul>
    </>
  )
}


// Given an employee data. List out the employee details on DOM. Then upon click of a button “Highlight Employees”, add a border to the employee details who have more than 5 years of experience.
const employees1 = [
  { id: "E1", name: "Arpit Jain", workExperience: 6 },
  { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
  { id: "E3", name: "Priya Shetty", workExperience: 9 },
  { id: "E4", name: "Aman Sen", workExperience: 1 }
];
export const Question12 = () => {
  const [isBorder, setIsBorder] = useState(false);

  const handleClick = () => {
    //false !== true => true
    //true !== true => false
    setIsBorder(isBorder !== true);
  }

  return (
    <>
      <h1>Employees</h1>
      <ul>
        {employees1.map(({ name, workExperience }) => <li style={{ border: isBorder && workExperience > 5 ? "1px solid orange" : "" }}>Name: {name}, Work Experience: {workExperience}</li>)}
      </ul>
      <button onClick={handleClick}>Highlight</button>
    </>
  )
}