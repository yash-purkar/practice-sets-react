import React, { useEffect, useState } from 'react'
import { fakeFetch, fakeFetch10, fakeFetch2, fakeFetch3, fakeFetch4, fakeFetch5, fakeFetch6, fakeFetch7, fakeFetch8, fakeFetch9 } from './Data';
import { ShowWeatherInfo } from './Components.jsx/ShowWeatherInfo';
import { ShowUser } from './Components.jsx/ShowUser';
import { ShowMovie } from './Components.jsx/ShowMovie';
import { ShowUser2 } from './Components.jsx/ShowUser2';
import { ShowMovie2 } from './Components.jsx/ShowMovie2';
import { ShowProduct } from './Components.jsx/ShowProduct';
import { Buttons } from './Components.jsx/Buttons';
import { ShowProduct2 } from './Components.jsx/ShowProduct2';

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



// 6️⃣Create a React component that fetches a list of movies from an API endpoint using useEffect hook and displays the title, year, and genre of each movie on the screen using the useState hook. Add a dropdown which filters the movies by genre.

export const Movies2 = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [selectedGenreMovies, setSelectedGenreMovies] = useState([]);
  const [loading, setLoading] = useState(false)

  const getMoviesData = async () => {
    try {
      setLoading(true)
      const { status, data } = await fakeFetch6("https://example.com/api/movies");
      setLoading(false)
      if (status === 200) {
        setMoviesData(data)
        setSelectedGenreMovies(data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const changeHandler = (e) => {
    const selectedGenre = e.target.value
    const newMovies = selectedGenre === "All" ? moviesData : moviesData.filter(({ genre }) => selectedGenre === genre);
    setSelectedGenreMovies(newMovies)
  }


  useEffect(() => {
    getMoviesData();
  }, [])
  return (
    <>
      {
        loading ? <h1>Loading...</h1> : <div>
          <h1>Movies</h1>
          <select onChange={changeHandler}>
            {["All", "Crime", "Drama", "Action", "Comedy", "Science Fiction"].map((genre) => <option value={genre}>{genre}</option>)}
          </select>
          <ul>
            {
              selectedGenreMovies.map((movie) => <ShowMovie2 {...movie} />)
            }
          </ul>
        </div>
      }


    </>
  )
}
//1st display the data
//add dropdown


// 7️⃣ Create a React component that fetches a list of products from an e-commerce API endpoint using useEffect hook and displays the product name, description, price, and quantity on the screen using the useState hook. Add a button which allows the user to sort the products by price (lowest to highest).

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const getProductsData = async () => {
    try {
      const { status, data: { products } } = await fakeFetch7("https://example.com/api/products");
      if (status === 200) {
        setProducts(products)
        setSortedData(products)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleSortClick = () => {
    const newArrOfProducts = [...products];
    const sortedProducts = newArrOfProducts.sort((a, b) => a.price - b.price)
    setSortedData(sortedProducts)
  }

  useEffect(() => {
    getProductsData()
  })
  return (
    <>
      <h1>Products</h1>
      <button onClick={handleSortClick}>Sort By Price</button>
      <ul>
        {
          sortedData.map((product, i) => <ShowProduct {...product} key={i} />)
        }
      </ul>
    </>
  )
}

//print Data
//sort and print again
//sort mutates the original array
//e.g  original {20,19,24}
//after sort {19,20,24}
//console original array => 19,20,24



// 8️⃣ Adding on to the previous question, There should be three buttons for this purpose: "Low to High", "High to Low", and "Reset". When the user clicks on "Low to High", the products should be sorted by price in ascending order. When the user clicks on "High to Low", the products should be sorted by price in descending order. When the user clicks on "Reset", the products should be displayed in their original order.
export const Products2 = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProductDetails = async () => {
    setLoading(true)
    try {
      const { status, data: { products } } = await fakeFetch8("https://example.com/api/products");
      setLoading(false)
      if (status === 200) {
        setProducts(products)
        setSortedProducts(products)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProductDetails()
  }, [])
  return (
    <>
      {
        loading ? <h1>Loading...</h1>
          :
          <div><h1>Products</h1>
            <Buttons products={products} setSortedProducts={setSortedProducts} />
            <ul>
              {
                sortedProducts.map((product) => <ShowProduct {...product} />)
              }
            </ul></div>
      }

    </>
  )
}

//show Data on ui
//sort by btn click



// 9️⃣Create a React component that uses the useEffect hook to fetch the product data from the API endpoint using the fakeFetch function provided below. The component should use the useState hook to store the fetched data and a second state variable to store the sorted data. The sorted data should be sorted in descending order by rating.

export const Products3 = () => {
  // const [productsData, setProductsData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const getProductDetails = async () => {
    try {
      const { status, data: { products } } = await fakeFetch9("https://example.com/api/products");
      if (status === 200) {
        // setProductsData(products);
        setSortedData([...products].sort((a, b) => b.rating - a.rating))
      }
    } catch (err) {
      console.log(err)
    }

  }


  useEffect(() => {
    getProductDetails()
  }, [])

  return (
    <>
      <h1>Product</h1>

      <ul>
        {
          sortedData.map((el) => <ShowProduct2 {...el} />)
        }
      </ul>
    </>
  )
}

//Show data



// 🔟Adding on to the previous question, Add a search bar to the component that allows users to filter the products by name. The search bar should update the list of displayed products in real-time as the user types. The search functionality should be case-insensitive.
export const Products4 = () => {
  const [productsData, setProductsData] = useState([]);
  const [inputValue, setInputValue] = useState(""); //col
  const getProductsDetails = async () => {
    try {
      const { status, data: { products } } = await fakeFetch10("https://example.com/api/products");
      if (status === 200) {
        setProductsData(products)
      }
    } catch (err) {
      console.log("hi")
    }

  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  useState(() => {
    getProductsDetails()
  }, [])
  //pen
  // input ? T
  const filteredData = inputValue ? productsData.filter(({ name }) => { //
    return name.toLowerCase().includes(inputValue.toLowerCase())
  }) : productsData;
  return (
    <>
      <h1 >Products</h1>
      <input type="text" onChange={handleChange} style={{ marginBottom: "1rem" }} placeholder='Serch Item...' value={inputValue} />
      {
        filteredData.map((product) => <ShowProduct2 {...product} />)
      }
    </>
  )
}

//Display datao on UI
//get inputvalue