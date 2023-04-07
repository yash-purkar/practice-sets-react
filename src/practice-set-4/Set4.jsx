import React from 'react'
import { Tab } from './Components/Tab'
import { books, characters, itemList, todoItems, todoItems2 } from './Data'
import { BtnSize } from './Components/BtnSize'
import { ListItems } from './Components/ListItems'
import { Todo } from './Components/Todo'
import { Todo1 } from './Components/Todo1'
import { Book } from './Components/Book'
import { Game } from './Components/Game'

// 1️⃣Given an array of characters, build a Tab component in React that shows the name of characters on click of two buttons, one for heroes and other for villains. On click of “Show Heroes” button, a list of heroes should be displayed and on click of “Show Villains” button, a list of villains should be displayed on the DOM. Use useState Hook.

export const Question1 = () => {
  return (
    <Tab characters={characters} />
  )
}


// 2️⃣Build a React component with two buttons + and - which increases/decreases the font size of a heading text “Welcome” by 1px. Keep the initial font size to 18px. Use useState Hook.
export const Question2 = () => {
  return (
    <BtnSize />
  )
}

// 3️⃣Given an array of items:
// a. Build a React component that displays a list of items.Display fruits in orange color and vegetables in green color.
// b. Create two buttons to filter the items by their category using the useState hook.


export const Question3 = () => {
  return (
    <ListItems itemList={itemList} />
  )
}


// 4️⃣Given an array of todoItems:
// a. Build a React component that takes the todoItems as props and list all the todo tasks.
//  b. if isDone is true then show the item with a strikethrough.
// b. Add a X button against each item and remove that task from the list on click of the button.
export const Question4 = () => {
  return <Todo todoItems={todoItems} />
}


// 5️⃣Given an array of todoItems:
// a. Build a React component that takes the todoItems as props and list all the todo tasks.
// b. Add a "Mark as Done" button against each item and toggle isDone property value between true and false on click of the button. If isDone is true change the color of that task to red with a strikethrough and if it is false remove the strikethrough and the red color.
export const Question5 = () => {
  return <Todo1 todoItems={todoItems2} />
}


// 6️⃣Given an array of books:
// a. Build a React component that displays the title and author of each book.
// b. Add buttons to filter the books by genre using the useState hook.
export const Question6 = () => {
  return (
    <Book booksData={books} />
  )
}

// 7️⃣Build a game component in React where the player has a certain number of lives. Display the current number of lives and allows the player to decrement the number of lives by one with a button click. Once the number of lives reaches zero, display a "Game Over" message.

export const Question7 = () => {
  return <Game />
}