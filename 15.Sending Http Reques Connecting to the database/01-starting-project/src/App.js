import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-64137-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Sometging went wrong!");
      }

      const data = await response.json(); // here transform data into JSON
      console.log(data);

      const loadedMovies = [];

      for(const key in data){ //transformation logic
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  async function addMovieHandler(movie) {
    // console.log(movie);
    try{
      const response = await fetch("https://react-http-64137-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json"
      },
    });
    if(!response.ok){
      throw new Error("Failed to add movie");
    }
    const data =  await response.json();
    console.log(data);
    } catch (error) {
      console.log("Error adding movie:", error.message);
    }  
  }

  let content = <h1>Found no movies.</h1>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <h1>{error}</h1>;
  }
  if (isLoading) {
    content = <h1>Loading...</h1>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
