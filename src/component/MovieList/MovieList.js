import Movie from "../Movie/Movie";
const MovieList = (props) => {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <Movie
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  );
};
export default MovieList;
