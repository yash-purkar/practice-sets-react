import { MoviesData, Products, BooksData, Employees } from './Data'

// Question 0

const Question0 = () => {
  const items = [
    { id: 1, name: 'Book', price: 10 },
    { id: 2, name: 'T-Shirt', price: 15 },
    { id: 3, name: 'Hat', price: 8 },
    { id: 4, name: 'Sunglasses', price: 12 },
  ];
  const total = items.reduce((acc, { price }) => acc + price, 0);
  // console.log(total);
  return (
    <>
      <h1>Shopping Cart</h1>
      <ul>
        {
          items.map(({ id, name, price }) => {
            return (
              <li key={id}>{name} : ({price})</li>
            )
          })
        }
      </ul>
      <p>Total: {total}</p>
    </>
  )
}
// export default Question0;

// ## Practice questions

// Question 1
// 1. Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title and director. Write a React component that takes the array of movies as input and returns an unordered list of movies, where each list item displays the movie's title and director.


const Question1 = () => {

  return (
    <>
      <h1>Movies List</h1>
      <ul>
        {
          MoviesData.map(({ title, director, id }) => {
            return (
              <li key={id}>
                name : {title}  director:{director}
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

// export default Question1

// 2. Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and returns an unordered list of products, where each list item displays the product's name, price, and category.
const Question2 = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {
          Products.map(({ id, name, price, category }) => {
            return (
              <li id={id}>{name} {price} ({category})</li>
            )
          })
        }
      </ul>
    </>
  )
}
// export default Question2

// 3. Create an array of objects representing books in a library. Each object has the following properties: id, title, author, and rating. Write a React component that takes the array of books as input and returns an unordered list of books, where each list item displays the book's title, author, and rating.

const Question3 = () => {
  return (
    <>
      <h1>Books</h1>
      <ul>
        {BooksData.map(({ id, title, author, rating }) => {
          return (
            <li key={id}> {title}- {author} ({rating})</li>
          )
        })}
      </ul>
    </>
  )
}

// export default Question3


// 4. Create an array of objects representing employees in a company. Each object has the following properties: id, name, department, and salary. Write a React component that takes the array of employees as input and returns an unordered list of employees, where each list item displays the employee's name, department, and salary.

const Question4 = () => {
  return (
    <>
      <h1>Employee Details</h1>
      {
        Employees.map(({ id, name, department, salary }) => {
          return (
            <li>{name}, {department}, {salary}</li>
          )
        })
      }
    </>
  )
}

export default Question4

