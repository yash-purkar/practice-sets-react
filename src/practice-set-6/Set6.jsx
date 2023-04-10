import React, { useEffect, useState } from 'react'
import { fakeFetch, fakeFetch10, fakeFetch2, fakeFetch3, fakeFetch4, fakeFetch5, fakeFetch6, fakeFetch7, fakeFetch8, fakeFetch9 } from './Data'
import { ShowProduct } from './Components.jsx/ShowProduct';
import { ShowTodos } from './Components.jsx/ShowTodos';
import { ShowHabit } from './Components.jsx/ShowHabit';
import { ShowVideo } from './Components.jsx/ShowVideo';
import { DeleteVideo } from './Components.jsx/DeleteVideo';
import { ShowData } from './Components.jsx/ShowData';
import { Habits } from './Components.jsx/Habits';
import { ShowProjects } from './Components.jsx/ShowProjects';
import { ShowDetails } from './Components.jsx/ShowDetails';
import { User } from './Components.jsx/User';
import { ShowVideoDetails } from './Components.jsx/ShowVideoDetails';
import { ShowProfile } from './Components.jsx/ShowProfile';

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


// 7️⃣Create a React component that calls the projects api and list all the projects when the page loads with titles and description. Create buttons saying “Show Details” for each project. On click of the button show title, description, technologies, completed of that project only.


export const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [projectDetails, setProjectDetails] = useState();

  const getProjectsDetails = async (url) => {
    try {
      const { status, data: { projects } } = await fakeFetch7(url);
      status === 200 && setProjectsData(projects)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProjectsDetails("https://example.com/api/projects")
  }, [])
  return (
    <>
      <h1>Projects</h1>
      {
        projectsData.map((project) => {
          return <ShowProjects project={project} setProjectDetails={setProjectDetails} />
        })
      }

      {
        projectDetails && <ShowDetails projectDetails={projectDetails} />
      }
    </>
  )
}
//Show all projects on DOM
//Add A btn
//work on showDetails btn




// 8️⃣Create a React component that calls the userProfile api and list the details of the user when the page loads. Create a button saying Update name and on click of that button, change the name of the user.

export const UserProfile = () => {
  const [userData, setUserData] = useState();

  const getUserDatas = async (url) => {
    try {
      const { status, data: { profiles } } = await fakeFetch8(url);
      status === 200 && setUserData(profiles);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUserDatas('https://example.com/api/profile')
  }, [])
  return (
    <>
      <h1>Profiles</h1>
      {userData && <User userData={userData} setUserData={setUserData} />}
    </>
  )
}


// 1 -> Show the details on the dom , take component outside
//2 -> Create update button and work on it



// 9️⃣Create a React component that calls the video api and display all the details of the video on the screen. And on click of add label button, add a label property to the object and display the details on the screen
export const Video = () => {
  const [videoData, setVideoData] = useState({});
  const getVideosData = async (url) => {
    const { status, data: { videos } } = await fakeFetch9(url)
    status === 200 && setVideoData(videos)
  }

  useEffect(() => {
    getVideosData("https://example.com/api/getvideo")
  }, [])
  return <>
    <ShowVideoDetails videoData={videoData} setVideoData={setVideoData} />
  </>
}

//1st Display all the details, (make diff component)
//and work on btn


// 🔟Create a React component that calls the socialMedia profile api and when the page is loaded show details of the user and a button follow along with the name of the user on the button. On click of that increase the followers count by one and disable the button.

export const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(false);

  const getProfileData = async (url) => {
    try {
      const { status, data: { profile } } = await fakeFetch10(url);
      setLoading(false)
      status === 200 && setProfileData(profile)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    setLoading(true)
    getProfileData("https://example.com/api/profile")
  }, [])
  return (
    <>
      {loading && <h1>Loading...</h1>}
      <ShowProfile profileData={profileData} setProfileData={setProfileData} />
    </>
  )
}


// 1st Show the details on UI
//Increase Followers By 1
//Work on disable btn

// Loading state