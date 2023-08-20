import Movie from "../Movie/Movie";
const MovieList = (props) => {
  return (
    <div>
      {props.items.map((item) => {
        return <Movie key={item.id} name={item.name} price={item.price} />;
      })}
    </div>
  );
};
export default MovieList;
