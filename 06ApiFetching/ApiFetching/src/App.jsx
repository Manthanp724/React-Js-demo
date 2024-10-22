import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 style={{fontSize : '35px', color : "red"}}>Titles of the Books</h1>
      <h3>
        {data ? ( 
          <ul> {data.map((e) => ( <li key={e.id}>{e.title}</li> ))}</ul>
        ) : (
          'Loading...'
        )}
      </h3>
    </>
  );
}

export default App;
