import "./AddMovie.css";
import { useState } from "react";

const initialItems = {
  name: "",
  price: "",
};

const AddMovie = (props) => {
  const [state, setState] = useState(initialItems);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAdd(state);
    setState(initialItems);
  };

  return (
    <div>
      <form className="add-movie-form" onSubmit={submitHandler}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Add Movie"
            value={state.name}
            name="name"
            onChange={handleChange}
          ></input>
          <input
            type="number"
            placeholder="Price"
            value={state.price}
            name="price"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button type="submit" className="form-btn">
            add movie
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddMovie;
