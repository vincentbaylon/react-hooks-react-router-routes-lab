import React from "react";
import { directors } from "../data";

function Directors() {
  const displayDirectors = directors.map((eachDirector) => {
    return (
      <div key={eachDirector.name}>
        <h2>Name: {eachDirector.name}</h2>
        {eachDirector.movies.map((eachMovie) => {
          return (
            <ul key={eachMovie}>
              <li>{eachMovie}</li>
            </ul>
          )
        })}
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors}
    </div>
  )
}

export default Directors;
