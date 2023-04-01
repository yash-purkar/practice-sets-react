import React from 'react'
import { ShowImg } from './Components/ShowImg'
import { Cartoons } from './Components/Cartoons'
import { EvenCartoons } from './Components/EvenCartoons'
import { SuperPower } from './Components/SuperPower'
import { Vegetables } from './Components/Vegetables'
import { Flowers } from './Components/Flowers'

// 1️⃣Build a React component which takes an image, image height and image width as props and sets the height and width of the image and displays the image on DOM. Image link - https://picsum.photos/200
export const Question1 = () => {
  return (
    <ShowImg imgUrl="https://picsum.photos" width="200" height="100" />
  )
}

// 2️⃣Given an array of objects with cartoon character details as: id, name, superpower, magnitude. Build a React component and display all details of those characters whose magnitude is greater than 5. 
// Data:
const cartoons = [
  {
    id: 1,
    name: 'Mickey Mouse',
    superpower: 'Invisibility',
    magnitude: 1
  },
  {
    id: 2,
    name: 'Spongebob Squarepants',
    superpower: 'Super Strength',
    magnitude: 3
  },
  {
    id: 3,
    name: 'Bugs Bunny',
    superpower: 'Teleportation',
    magnitude: 9
  },
  {
    id: 4,
    name: 'Tom and Jerry',
    superpower: 'Intelligence',
    magnitude: 8
  },
  {
    id: 5,
    name: 'The Powerpuff Girls',
    superpower: 'Flight',
    magnitude: 10
  }
]

export const Question2 = () => {
  return <Cartoons cartoons={cartoons} />
}

// 3️⃣Use the cartoons data from above question (2) and build a React component to display only the names of characters whose magnitude is an even number. Use h1 tag to display names. Pass the entire data as props.

export const Question3 = () => {
  return <EvenCartoons data={cartoons} />
}


// 4️⃣Use the cartoons data from above question (2) and build a React component that takes the superpower ”Intelligence”, as prop and display the details of the character having that super power. Show details on DOM in the format “name - superpower - magnitude”.
export const Question4 = () => {
  return <SuperPower cartoons={cartoons} data="Intelligence" />
}

// 5️⃣Build a React component to display the list of all the vegetables and their pick date as ordered list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the color of the vegetable to green whose pick date is ‘2023-03-30’.
// Data:
const vegetables = [
  {
    id: 1,
    name: 'Carrots',
    pickDate: '2023-03-25',
  },
  {
    id: 2,
    name: 'Broccoli',
    pickDate: '2023-03-30',
  },
  {
    id: 3,
    name: 'Peppers',
    pickDate: '2023-03-25',
  },
  {
    id: 4,
    name: 'Tomatoes',
    pickDate: '2023-03-27',
  },
  {
    id: 5,
    name: 'Ladies Finger',
    pickDate: '2023-03-30',
  },
]

export const Question5 = () => {
  return <Vegetables vegetables={vegetables} date="2023-03-30" />
}



// 6️⃣Build a React component which takes an array of objects as props. The object represents a bouquet of mixed flowers and consists of: id, flowers, totalFlowers, and price. Display the price of that bouquet on the DOM that has rose in it, in the format, “Price of bouquet with roses : {price}”
const bouquet = [
  {
    id: 1,
    flowers: ['rose', 'lily', 'marigold'],
    totalFlowers: 9,
    price: 1400,
  },
  {
    id: 2,
    flowers: ['snapdragon', 'sunflower'],
    totalFlowers: 10,
    price: 3400,
  },
]
export const Question6 = () => {
  return <Flowers bouquet={bouquet} />
}