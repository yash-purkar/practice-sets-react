import { MoviesData, Products, BooksData, Employees, Recipes, Cars, Students, MoviesData2, Products2, recipes } from './Data'

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

// export default Question4

// 5. Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, recipe name, recipe creator name. Write a React component that takes the array of recipes as input and returns an unordered list, where each list item displays the recipe's name and recipe creator name.

const Question5 = () => {
  return (
    <>
      <h1>Recipes</h1>
      <ul>
        {
          Recipes.map(({ id, name, creator }) => {
            return (
              <li key={id}>{name} ({creator})</li>
            )
          })
        }
      </ul>
    </>
  )
}

// export default Question5;


// 6. Create an array of objects representing cars in a dealership. Each object has the following properties: id, make, model, and price. Write a React component that takes the array of cars as input and returns an unordered list of cars, where each list item displays the car's make, model, and price.
const Question6 = () => {
  return (
    <>
      <h1>Cars In Dealership</h1>
      <ul>
        {
          Cars.map(({ id, make, model, price }) => {
            return (
              <li key={id}>{make} {model} ({price})</li>
            )
          })
        }
      </ul>
    </>
  )
}

// export default Question6

// 7. Create an array of objects representing students in a class. Each object has the following properties: id, name, grade, and attendance. Write a React component that takes the array of students as input and generates an ordered list of students, where each list item displays the student's name, grade, and attendance.

const Question7 = () => {
  return (
    <>
      <h1>Students Details</h1>
      <ol>
        {
          Students.map(({ id, name, grade, attendance }) => {
            return (
              <li key={id}>{name} {grade} ({attendance})</li>
            )
          })
        }
      </ol>
    </>
  )
}

// export default Question7


// 8. Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title, director, and runtime. Write a React component that takes the array of movies as input and generates an ordered list of movies, where each list item displays the movie's title, director, and runtime.

const Question8 = () => {
  return (
    <>
      <h1>Movies Data</h1>
      <ol>
        {
          MoviesData2.map(({ id, title, director, runtime }) => {
            return <li key={id}>{title} {director} ({runtime})</li>
          })
        }
      </ol>
    </>
  )
}

// export default Question8;


// 9. Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and generates an ordered list of products, where each list item displays the product's name, price, and category.

const Question9 = () => {
  return (
    <>
      <h1>List of products</h1>
      <ol>
        {
          Products2.map(({ id, name, price, category }) => {
            return <li key={id}>{name} ({price}) [{category}]</li>
          })
        }
      </ol>
    </>
  )
}

// export default Question9;


// 10. Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, name, ingredients, and instructions. Write a React component that takes the array of recipes as input and generates an ordered list of recipes, where each list item displays the recipe's name, ingredients, and instructions. Data has been provided below for this questions.

const Question10 = () => {
  return (
    <>
      <h1>Recipes</h1>
      <ol>
        {
          recipes.map(({ id, name, ingredients, instructions }) => {
            return (
              <li> <h2>{name}</h2>
                <ul>
                  <h3>Ingredients</h3>
                  {ingredients.map(ingredient => <li>{ingredient}</li>)}
                  <h3>Instructions</h3>
                  {instructions.map(instruction => <li>{instruction}</li>)}
                </ul>
                <hr />
              </li>

            )
          })
        }
      </ol>
    </>
  )
}

export default Question10;