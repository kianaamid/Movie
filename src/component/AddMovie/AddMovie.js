import "./AddMovie.css";

const AddMovie = () => {
  return (
    <div>
      <form class="add-movie-form">
        <div class="form-control">
          <input type="text" placeholder="Add Movie"></input>
          <input type="number" placeholder="Price"></input>
        </div>
        <div>
          <button type="submit" class="form-btn">
            add movie
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddMovie;
