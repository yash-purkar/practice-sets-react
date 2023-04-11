import React, { useEffect, useState } from 'react'
import { fakeFetch, fakeFetch2, fakeFetch3, fakeFetch4, fakeFetch5 } from './Data';
import { ShowWeatherInfo } from './Components.jsx/ShowWeatherInfo';
import { ShowUser } from './Components.jsx/ShowUser';
import { ShowMovie } from './Components.jsx/ShowMovie';
import { ShowUser2 } from './Components.jsx/ShowUser2';

// 1️⃣Create a React component that fetches weather data from an API endpoint using useEffect hook and displays the current temperature, humidity, and wind speed on the screen using the useState hook. Add a button which toggles between Celsius and Fahrenheit units for the temperature.
export const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false)
  const getWeatherData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      setLoading(false)
      status === 200 && setWeatherData(data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setLoading(true)
    getWeatherData("https://example.com/api/weather")
  }, [])
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {!loading && <ShowWeatherInfo weatherData={weatherData} />}

    </div>
  )
}

//1st Display the data on UI
//work on toggle
//Show Loading


// 2️⃣Create a React component that fetches user data from an API endpoint using useEffect hook and displays the user's name, email, and phone number on the screen using the useState hook. Add a button which toggles the display of the user's address (street, suite, city, zipcode).

export const User = () => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false)
  const getUserDetails = async (url) => {
    const { status, data } = await fakeFetch2(url);
    setLoading(false)
    status === 200 && setUserData(data)
  }


  useEffect(() => {
    setLoading(true)
    getUserDetails("https://example.com/api/user")
  }, [])

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {userData && <ShowUser userData={userData} />}
    </>
  )
}

//1st Fetch the data from server and print
//work on the btn


// 3️⃣Create a React component that fetches a list of movies from an API endpoint using useEffect hook and displays the title, year, and rating of each movie on the screen using the useState hook. Add a dropdown which filters the movies by year. You can keep 5 dropdown values - 2005 to 2010.
export const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false)

  const getMoviesData = async (url) => {
    const { status, data } = await fakeFetch3(url);
    setLoading(false)
    if (status === 200) {
      setMoviesData(data);
      setFilteredMovies(data);
    }
  }

  const handleChange = (e) => {
    const selectedValue = e.target.value
    // console.log(typeof selectedValue)

    const filteredData = selectedValue === "All" ? moviesData : moviesData.filter(({ year }) => year === Number(selectedValue));
    setFilteredMovies(filteredData)
  }

  useEffect(() => {
    setLoading(true)
    getMoviesData("https://example.com/api/movies")
  }, [])
  return (
    <>
      {loading ? <h1>Loading...</h1> : <div><h1>Movies</h1>
        <span>Filtered by Year: </span>
        <select onChange={handleChange}>
          <option value="All">All</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
        </select>
        <ul>
          {
            filteredMovies.map((movie) => {
              return <ShowMovie movie={movie} key={movie.title} />
            })
          }
        </ul>
        {filteredMovies.length === 0 && <h3>Movie Not Found</h3>}</div>}

    </>
  )
}

//1st fetchData and display
//Make dropdown - onChange - Filter the data and store in another state and display that state.
//loading




// 4️⃣Create a React component that fetches a list of users from an API endpoint using useEffect hook and displays the name, email, and website of each user on the screen using the useState hook. Add a dropdown which filters the users by company name.

export const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredUsersData, setFilteredUsersData] = useState([]);
  const [loading, setLoading] = useState(false)

  const getUsersDetails = async (url) => {
    try {

      const { status, data } = await fakeFetch4(url);
      setLoading(false)
      if (status === 200) {
        setUsersData(data);
        setFilteredUsersData(data);
      }
    } catch (err) {
      console.log(err)
    }
  }

  const changeHandler = (e) => {
    const value = e.target.value;
    const filteredData = value === "All" ? usersData : usersData.filter(({ company }) => company === value);
    setFilteredUsersData(filteredData)
  }

  useEffect(() => {
    setLoading(true)
    getUsersDetails("https://example.com/api/users")
  }, [])
  return (
    <>
      {loading ? <h1>Loading...</h1> : <div>
        <h1>Users</h1>
        <select onChange={changeHandler}>
          {["All", "ABC Inc", "XYZ Corp", "ACME Corp"].map(company => <option value={company}>{company}</option>)}
        </select>
        <ul>
          {
            filteredUsersData.map((user) => {
              return <ShowUser2 user={user} key={user.email} />
            })
          }
        </ul>
      </div>}

    </>
  )
}

// 1st - print the data on UI
//print dropdown using map and filtered on onChange value
//loading state



// 5️⃣Create a component that displays a random quote from an API using the useEffect and useState hooks. The component should fetch a new quote when the user clicks a button.

export const QuotesGenerator = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false)

  const getQuote = async () => {
    try {
      setLoading(true)
      const response = await fakeFetch5()
      setLoading(false)
      setQuote(response)
    } catch (err) {
      console.log(err)
    }
  }

  const { content, author } = quote;
  useEffect(() => {
    getQuote()
  }, [])
  return (
    <>
      {loading ? <p>Loading Quote....</p>
        :
        <div> <p>"{content}"</p>
          <p>- {author}</p>
          <button onClick={getQuote}>New Quote</button>
        </div>
      }

    </>
  )
}

//get data from and show one quote by default
//onClick of btn call that function again
//Loading