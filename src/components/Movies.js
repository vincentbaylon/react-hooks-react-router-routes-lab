import React from "react";
import { movies } from "../data";

function Movies() {
  const displayMovies = movies.map((eachMovie) => {
    return (
      <div key={eachMovie.title}>
        <h2>Name: {eachMovie.title}</h2>
        <h4>Time: {eachMovie.time}</h4>
        {eachMovie.genres.map((eachGenre) => {
          return (
            <ul key={eachGenre}>
              <li>{eachGenre}</li>
            </ul>
          )
        })}
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
  </div>
  )
}

export default Movies;
