import "./App.css";
import { useState } from "react";
import MovieList from "./component/MovieList/MovieList";
import AddMovie from "./component/AddMovie/AddMovie";

function App() {
  const [movie, setMovie] = useState([
    {
      id: 1,
      name: "Barbie",
      price: 20,
    },
    {
      id: 2,
      name: "Oppenheimer",
      price: 20,
    },
    {
      id: 3,
      name: "Mission Impossible",
      price: 20,
    },
  ]);

  const deleteMovie = (id) => {
    setMovie(movie.filter((movie) => movie.id !== id));
  };

  const addMovie = (name, price) => {
    const id = Math.floor(Math.random() * 10000);
    const newMovie = { id, ...name, ...price };
    console.log(newMovie);
    console.log(...movie);
    setMovie([...movie, newMovie]);
  };
  return (
    <div className="App">
      <AddMovie onAdd={addMovie} />
      <MovieList items={movie} onDelete={deleteMovie} />
    </div>
  );
}

export default App;
