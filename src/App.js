// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import MovieDisplay from './Components/MovieDisplay';
import Form from './Components/Form';
import { useState, useEffect } from 'react';

function App() {
  // variable with api key
  const apiKey = "f68d2e7a";

  //state to hold movie data (null is any not given data value)
  const[ movie, steMovies ] = useState(null);

  //function to getMovie
  const getMovie = async (searchTerm) => {
    try {
      // make fetch request and store the response
    const response = await fetch (
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}` 
     )
 
   // parse JSON response into a js obj
   const data = await response.json()
 
  // set the movie state to the movie or response from 
  steMovies(data)
    } catch (e){
      console.error(e)
    }
  }
      
 //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless")
  }, []);

  return (
    <div className="App">
     <Form movieSearch={getMovie} />
     <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
