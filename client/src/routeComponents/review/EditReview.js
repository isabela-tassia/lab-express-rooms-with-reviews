import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import TextAreaInput from "../../components/TextInput";

function EditReview() {
  const history = useHistory();

  const { id } = useParams();
  const [state, setState] = useState({ comment: "", roomId: "" });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:4000/review/${id}`);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  function handleChange(event) {
    const stateBkp = { ...state };
    stateBkp[event.target.name] = event.target.value;
    setState(stateBkp);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:4000/room/${state.roomId}/review`,
        { ...state }
      );
      history.push(`/room/${state.roomId}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Review</h1>
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

export default EditReview;
