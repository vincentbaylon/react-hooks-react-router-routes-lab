import React from "react";
import { actors } from "../data";

function Actors() {
  const displayActors = actors.map((eachActor) => {
    return (
      <div key={eachActor.name}>
        <h2>Name: {eachActor.name}</h2>
        {eachActor.movies.map((eachMovie) => {
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
      <h1>Actors Page</h1>
      {displayActors}
    </div>
  )
}

export default Actors;
