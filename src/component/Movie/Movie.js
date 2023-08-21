import "./Movie.css";

const Movie = (props) => {
  return (
    <div className="movie">
      <div className="info">
        <div>Movie Name: {props.name}</div>
        <div>Movie Price: ${props.price}</div>
      </div>
      <div>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
};
export default Movie;
