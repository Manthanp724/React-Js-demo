import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=41becea0b404dd1e2dba0d90882ec0ed')
      .then(response => {
        const responseData = response.data;
        setMovie(responseData);
        console.log(responseData);
      })
      .catch(error => console.log(error));
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={viteLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        {
          movie ? (
            <div>
              <h1>{movie.title}</h1>
              <h3>Revenue: ${movie.revenue.toLocaleString()}</h3>
              <ul>
                {movie.production_companies.map(company => (
                  <li key={company.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${company.logo_path}`} alt={company.name} width="50" />
                    <p>{company.name} ({company.origin_country})</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No Movies Found</p>
          )
        }
      </main>
    </div>
  );
}

export default App;
