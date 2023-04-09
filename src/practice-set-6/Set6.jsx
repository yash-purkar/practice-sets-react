import React, { useEffect, useState } from 'react'
import { fakeFetch, fakeFetch2, fakeFetch3, fakeFetch4, fakeFetch5, fakeFetch6 } from './Data'
import { ShowProduct } from './Components.jsx/ShowProduct';
import { ShowTodos } from './Components.jsx/ShowTodos';
import { ShowHabit } from './Components.jsx/ShowHabit';
import { ShowVideo } from './Components.jsx/ShowVideo';
import { DeleteVideo } from './Components.jsx/DeleteVideo';
import { ShowData } from './Components.jsx/ShowData';
import { Habits } from './Components.jsx/Habits';

// 1️⃣Create a React component that calls the product api and has the same number of buttons as the items in product. On Click of each button show the details of that card only. Example: In the below API we have three products and three buttons.


export const Product = () => {
  const [productsData, setProductsData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("Shoes");

  const getProducts = async (url) => {
    try {
      const { status, data: { products } } = await fakeFetch(url)
      status === 200 && setProductsData(products)
    }
    catch ({ status, message }) {
      console.log(status, message);
    }
  }

  const filteredProductsData = productsData.filter(({ name }) => selectedProduct === name);


  useEffect(() => {
    getProducts('https://example.com/api/products');
  }, []);

  return (
    <>
      <div>
        {
          productsData.map(({ name }, i) => <button key={i} onClick={() => setSelectedProduct(name)}>Show {name}</button>)
        }
      </div>
      <div>
        <ShowProduct filteredProductsData={filteredProductsData} />
      </div>

    </>
  )
}


// 2️⃣Create a React component that calls the todo api and display the todos in an unordered list and show the todos as a list. The todo should display a heading with a little description of what that todo is about. Under that, it should display all the tasks to be done as a list.

export const Todo = () => {
  const [todoData, setTodoData] = useState([]);
  const getTodoData = async (url) => {
    try {
      const { status, data: { todos } } = await fakeFetch2(url);
      status === 200 && setTodoData(todos)
    } catch ({ status, message }) {
      console.log(status, message)
    }
  }

  useEffect(() => {
    getTodoData("https://example.com/api/todos")
  }, [])
  return (
    <>
      <ShowTodos todoData={todoData} />
    </>
  )
}


// 3️⃣Create a React component that calls the habit tracker api when the page is loaded completely and display the habits with the total days they were followed and days skipped in between.
export const HabitTracker = () => {
  const [habitData, setHabitData] = useState([]);

  const getHabbitData = async (url) => {
    const { status, data: { habits } } = await fakeFetch3(url);
    status === 200 && setHabitData(habits)
  }

  useEffect(() => {
    getHabbitData('https://example.com/api/habits')
  }, [])
  return (
    <>
      <ShowHabit habitData={habitData} />
    </>
  )
}


// 4️⃣Create a React component that calls the video library api when the page is loaded completely and display all the videos on the screen. And on click of delete button, delete the first video in the list.

export const VideoLibrary = () => {
  const [videosData, setVideosData] = useState([]);
  const getVideosData = async (url) => {
    try {
      const { status, data: { videos } } = await fakeFetch4(url);
      status === 200 && setVideosData(videos)
    } catch ({ status, message }) {
      console.log(status, message)
    }
  }
  useEffect(() => {
    getVideosData('https://example.com/api/videos')
  }, [])
  return (
    <>
      <div><ShowVideo videosData={videosData} /></div>
      <DeleteVideo setVideosData={setVideosData} />
    </>
  )
}


//5️⃣Create a react component that calls the social media api when the page is loaded completely and display all the posts on the screen. And on click of show bakery button, show only the posts with category as bakery.
export const SocialMedia = () => {
  const [data, setData] = useState([]);

  const getData = async (url) => {
    try {
      const { status, data: { posts } } = await fakeFetch5(url);
      status === 200 && setData(posts)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData("https://example.com/api/posts")
  }, [])

  return (
    <>
      <ShowData data={data} />
    </>
  )
}


// 6️⃣Create a React component that calls the habit tracker api and display only the habits which are unarchived with heading “Unarchived”. Create a show archive button and on click of show archive button show the archive habits and hide the unarchives. Change the heading of the page to “Archived” when the button is clicked.

export const HabitTracker2 = () => {
  const [habitsData, setHabitsData] = useState([]);

  const getHabitData = async (url) => {
    const { status, data: { habits } } = await fakeFetch6(url)
    status === 200 && setHabitsData(habits)
  }

  useEffect(() => {
    getHabitData("https://example.com/api/habits")
  }, [])
  return (
    <>
      {
        <Habits habitsData={habitsData} />
      }
    </>
  )
}