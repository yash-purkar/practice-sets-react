import { useState } from "react";
import { fakeFetch, fakeFetch2, fakeFetch4, fakeFetch5, fakeFetch6, fakeFetch7 } from "./Data"
import { useEffect } from "react";
// 1️⃣Create a React component where all the users are fetched using fake fetch and listed on the DOM. Show the online users in green color and the offline users in red color.
export const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [showErr, setShowErr] = useState("");

  const getUsersData = async (url) => {
    try {
      const { status, data: { users } } = await fakeFetch(url);
      status === 200 && setUsersData(users);
    } catch ({ status, message }) {
      setShowErr(`${status} ${message}`)
    }
  }

  /*const getUsersData = (url) => {
    fakeFetch(url)
      .then(({ status, data: { users } }) => console.log(users))
      .catch(({ status, message }) => setShowErr(`${status} ${message}`))
  }*/


  useEffect(() => {
    getUsersData('https://example.com/api/users/status');
  }, [])

  return (
    <>
      <ul>
        {
          usersData.map(({ name, status }, index) => {
            return <li key={index} style={{ color: status === "Online" ? "green" : "red" }}>Name: {name}</li>
          })
        }
      </ul >
      {showErr && <h2 style={{ color: "red" }}>{showErr}</h2>}
    </>
  )
}


// 2️⃣Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.
// a. Add a button, on click of which it displays only the items with more than 20 as quantity.

export const Product = () => {
  const [productsData, setProductsData] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [toggle, setToggle] = useState(true);
  const [newData, setNewData] = useState([]);
  const [loading,setLoading] = useState(true);

  const getProductsData = async (url) => {
    try {
      const { status, data: { products } } = await fakeFetch2(url);
      setLoading(false)
      if (status === 200) {
        setProductsData(products);
        setNewData(products)
      };
    } catch ({ status, message }) {
       setLoading(false)
      setErrMsg(`${status} ${message}`)
    }
  }

  const handleClick = () => {
    const fitleredData = toggle ? productsData.filter(({ quantity }) => quantity > 20) : productsData;
    setToggle(!toggle);
    setNewData(fitleredData)
  }

  useEffect(() => {
    getProductsData("https://example.com/api/products")
  }, [])
  return (
    <>
    { loading ? <h1>Loading...</h1> :
      <div>
      <button onClick={handleClick}>Show products with quantity more than 20</button>
      <ul>
        {
          newData.map(({ name, price, quantity }, i) => {
            return <li key={i}>{name} - INR {price} - Qty:({quantity})</li>
          })
        }
      </ul>
      </div>
    }
      {errMsg && <h2 style={{ color: "red" }}>{errMsg}</h2>}
    </>
  )

}


// 3️⃣In the above question after you have listed all the items, add a button which says “Filter by Price”. On click of the button, display only the items with price less than 100.
export const Product2 = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilterProducts] = useState([]);

  const getProductsDetails = async (url) => {
    try {
      const { status, data: { products } } = await fakeFetch2(url);
      if (status === 200) {
        setProductsData(products)
        setFilterProducts(products)
      }
    }
    catch ({ status, message }) {
      console.log(status, message)
    }
  }

  const handleClick = (condition) => {
    if (condition === "lessQuantity") {
      setFilterProducts(productsData.filter(({ quantity }) => quantity > 20))
    }
    else if (condition === "lessPrice") {
      setFilterProducts(productsData.filter(({ price }) => price < 100))
    }
    else {
      setFilterProducts(productsData)
    }
  }

  useEffect(() => {
    getProductsDetails("https://example.com/api/products")
  }, [])
  return (
    <>
      <button onClick={handleClick}>All</button>
      <button style={{ marginLeft: "5px" }} onClick={() => handleClick("lessQuantity")}>Show products with quantity more than 20</button>
      <button style={{ marginLeft: "5px" }} onClick={() => handleClick("lessPrice")}>Price Less than 100</button>
      <ul>
        {
          filteredProducts.map(({ name, price, quantity }, i) => {
            return <li key={i}>{name} -- INR {price} Qty: {quantity}</li>
          })
        }
      </ul>
    </>
  )
}

// 4️⃣Create a React component that fetches a user’s data from an API endpoint using useEffect hook and displays the data (name, image, likes, comments) on the screen using the useState hook. Pass heading (”User Profile”) and width and height for image as props to the component.
export const ShowImg = ({ heading, width, height }) => {
  const [userData, setUserData] = useState({});

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch4(url)
      status === 200 && setUserData(data)
    } catch ({ status, message }) {
      console.log(status, message)
    }
  }

  const { name, image, likes, comments } = userData;


  useEffect(() => {
    getData('https://example.com/api/user')
  }, [])

  return (
    <>
      <div>
        <h1>{heading}</h1>
        <img src={image} alt="img" height={height} width={width} />
        <p>Name: {name}</p>
        <p>Likes: {likes}</p>
        <p>Comments: {comments}</p>
      </div>
    </>
  )
}


// 5️⃣Create a React component that fetches users data from an API endpoint using useEffect hook and display users data (name, image, likes, comments) as a list on the screen using the useState hook.

// a. Show “Loading…” until your data displays on the DOM.

// b. Handle errors by showing an error message on the DOM, in case of any error.
export const Users1 = ({ heading, width, height }) => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsersData = async (url) => {
    try {
      const { status, data } = await fakeFetch5(url);
      setLoading(false)
      status === 200 && setUsersData(data)
    } catch ({ status, message }) {
      console.log(status, message)
    }
  }

  useEffect(() => {
    setLoading(true)
    getUsersData("https://example.com/api/users")
  }, [])
  return (
    <>
      {loading && <h1>Loading...</h1>}
      <h1>{heading}</h1>
      <ul>
        {
          usersData.map(({ name, image, likes, comments }, i) => {
            return (
              <li key={i}>
                <img src={image} alt="img" height={height} width={width} />
                <p>{name}</p>
                <p>Likes: {likes}</p>
                <p>Comments: {comments}</p>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}


// 6️⃣Create a React component that fetches chat data from an API endpoint using useEffect hook and display chat data (name and chat message) as a list on the screen using the useState hook.

// a. Show “Loading Chats…” until your data displays on the DOM.


const MessageList = ({ messages }) => {
  return (
    <ul>
      {
        messages.map(({ from, message }, i) => {
          return <li key={i}><strong>{from}:</strong>{message}</li>
        })
      }
    </ul>
  )
}

export const Chats = () => {
  const [chatsData, setChatsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getChatsData = async (url) => {
    const { status, data } = await fakeFetch6(url);
    setLoading(false)
    status === 200 && setChatsData(data)
  }

  useEffect(() => {
    setLoading(true)
    getChatsData("https://example.com/api/userchat")
  }, [])
  return (
    <>
      {loading && <h1>Loading...</h1>}
      <ul>
        {
          chatsData.map(({ name, messages }, i) => {
            return (
              <li key={i}>
                <h2>{name}'s Chat</h2>
                <MessageList messages={messages} />
              </li>
            )
          })
        }
      </ul>
    </>
  )
}


// 7️⃣Create a React component called Comments.

// a. Fetch the comments using thefake fetch and list the data on DOM.

// b. Each comment component will have the text, user’s name and a delete button.

// c. On click of the delete button, that particular comment object should be deleted and should not be visible on the DOM.

const Comment = ({ commentsData, setCommentsData }) => {

  const handleClick = (selectedName) => {
    const filteredComments = commentsData.filter(({ name }) => name !== selectedName);
    setCommentsData(filteredComments);
  }

  return (
    <>
      {
        commentsData.map(({ name, text }, i) => {
          return (
            <div key={i}>
              <h2>{name}</h2>
              <p>{text}</p>
              <button onClick={() => handleClick(name)}>Delete</button>
            </div>
          )
        })
      }
    </>
  )
}



export const Comments = () => {
  const [commentsData, setCommentsData] = useState([]);

  const getCommentsData = async (url) => {
    const { status, data: { comments } } = await fakeFetch7(url);
    status === 200 && setCommentsData(comments);
  }


  useEffect(() => {
    getCommentsData('https://example.com/api/comments');
  }, [])

  return (
    <>
      <Comment commentsData={commentsData} setCommentsData={setCommentsData} />
    </>
  )
}
