import { useState } from "react";
import axios from "axios";

import RoomForm from "./RoomForm";

function NewRoom() {
  const [state, setState] = useState({
    name: "",
    imageUrl: "",
    description: "",
  });

  function handleChange(event) {
    const stateBkp = { ...state };
    stateBkp[event.target.name] = event.target.value;
    setState(stateBkp);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/room", {
        ...state,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="m-2">
      <h1>New Room</h1>
      <RoomForm
        state={state}
        onChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default NewRoom;
