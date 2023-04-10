export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/weather") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            temperature: 21,
            humidity: 50,
            windSpeed: 10
          }
        });
      } else {
        reject({
          status: 404,
          message: "Weather data not found."
        });
      }
    }, 2000);
  });
};
export const fakeFetch2 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/user") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+1 555-555-5555",
            address: {
              street: "123 Main St",
              suite: "Suite 456",
              city: "Anytown",
              zipcode: "12345"
            }
          }
        });
      } else {
        reject({
          status: 404,
          message: "User not found."
        });
      }
    }, 2000);
  });
};

export const fakeFetch3 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/movies") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { title: "The Dark Knight", year: 2008, rating: 9.0 },
            { title: "Inception", year: 2009, rating: 8.8 },
            { title: "Interstellar", year: 2010, rating: 8.6 },
            { title: "Tenet", year: 2009, rating: 7.5 },
            { title: "Real Steal", year: 2007, rating: 7.5 },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Movies list not found.",
        });
      }
    }, 2000);
  });
};

export const fakeFetch4 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { name: "John Doe", email: "john@example.com", website: "example.com", company: "ABC Inc" },
            { name: "Jane Doe", email: "jane@example.com", website: "example.com", company: "XYZ Corp" },
            { name: "Bob Smith", email: "bob@example.com", website: "example.com", company: "ABC Inc" },
            { name: "Alice Brown", email: "alice@example.com", website: "example.com", company: "ACME Corp" },
            { name: "Charlie Green", email: "charlie@example.com", website: "example.com", company: "XYZ Corp" },
          ]
        });
      } else {
        reject({
          status: 404,
          message: "Users list not found."
        });
      }
    }, 2000);
  });
};