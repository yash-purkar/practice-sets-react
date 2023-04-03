import React from 'react'
import { employees, products, books, movies, pets } from './Data'
import { Employees } from './Components/Employees'
import { Product } from './Components/Product'
import { Books } from './Components/Books'
import { Movies } from './Components/Movies'
import { Pets } from './Components/Pets'


// 🔶INPUT TYPE QUESTIONS🔶

// 1️⃣Create a React app that displays a list of employees with their name, age, position, and salary. Implement a feature that allows users to input a salary value and filters the displayed list of employees to show only those whose salary is greater than or equal to the input value, using the filter() function.
export const Question1 = () => {
  return (
    <Employees employees={employees} />
  )
}

// 2️⃣Create a React app that displays a list of products with their name, price, and category. Implement a feature that allows users to input a maximum price value and filters the displayed list of products to show only those whose price is less than or equal to the input value, using the filter() function.
export const Question2 = () => {
  return (
    <Product products={products} />
  )
}


// 3️⃣ Create a React app that displays a list of books with their title, author, genre, and publication year. Implement a feature that allows users to input a year value and filters the displayed list of books to show only those whose publication year is greater than or equal to the input value, using the filter() function.

export const Question3 = () => {
  return <Books books={books} />
}

// 4️⃣ Create a React app that displays a list of movies with their title, director, rating, and genre. Implement a feature that allows users to input a rating value and filters the displayed list of movies to show only those whose rating is greater than or equal to the input value, using the filter() function.
export const Question4 = () => {
  return <Movies movies={movies} />
}


// 🔶BUTTON TYPE QUESTIONS🔶

// 5️⃣ Create a React app that displays a list of pets with their name, type, age, and owner. Implement three buttons for each pet type (e.g. cat, dog, bird) and filter the displayed list of pets to show only those of the selected type when the corresponding button is clicked, using the filter() function.

export const Question5 = () => {
  return <Pets pets={pets} />
}