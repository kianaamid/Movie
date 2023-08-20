import "./App.css";
import MovieList from "./component/MovieList/MovieList";
import AddMovie from "./component/AddMovie/AddMovie";

function App() {
  const MoviesInformation = [
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
  ];
  return (
    <div className="App">
      <AddMovie />
      <MovieList items={MoviesInformation} />
    </div>
  );
}

export default App;
