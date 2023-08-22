import "./App.css";
import { useState, useEffect } from "react";
import MovieList from "./component/MovieList/MovieList";
import AddMovie from "./component/AddMovie/AddMovie";

function App() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:8001/movies");
      const responseData = await response.json();
      setMovie(responseData);
    };
    sendRequest();
  }, []);

  const deleteMovie = async (id) => {
    await fetch(`http://localhost:8001/movies/${id}`, { method: "DELETE" });
    setMovie(movie.filter((movie) => movie.id !== id));
  };

  const addMovie = async (name, price) => {
    const response = await fetch("http://localhost:8001/movies", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(name, price),
    });
    const responseData = await response.json();
    setMovie([...movie, responseData]);
  };
  return (
    <div className="App">
      <AddMovie onAdd={addMovie} />
      <MovieList items={movie} onDelete={deleteMovie} />
    </div>
  );
}

export default App;
