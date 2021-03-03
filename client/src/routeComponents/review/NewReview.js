import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import TextAreaInput from "../../components/TextInput";

function NewRoom() {
  const { id } = useParams();
  const [state, setState] = useState({ comment: "", roomId: id });

  function handleChange(event) {
    const stateBkp = { ...state };
    stateBkp[event.target.name] = event.target.value;
    setState(stateBkp);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:4000/room/${id}/review`,
        { ...state }
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Review</h1>
      <TextAreaInput
        label="Comment"
        type="text"
        id="roomFormComment"
        name="comment"
        value={state.comment}
        onChange={handleChange}
      />
      <button className="btn btn-primary" type="submit">
        Submit Comment
      </button>
    </form>
  );
}

export default NewRoom;
