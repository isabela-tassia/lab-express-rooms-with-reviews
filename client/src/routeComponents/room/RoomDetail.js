import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import ConfirmationModal from "../../components/ConfirmationModal";

function PetDetail(props) {
  const [roomDetails, setRoomDetails] = useState({
    name: "",
    imageUrl: "",
    description: "",
  });

  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchRoomDetails() {
      const response = await axios.get(`http://localhost:4000/room/${id}`);
      console.log(response.data);
      setRoomDetails({ ...response.data });
    }
    fetchRoomDetails();
  }, [id]);

  return (
    <div className="ml-3 mt-4">
      <div className="row">
        <div className="d-flex flex-column m-5">
          <div>
            <h1>{roomDetails.name}</h1>
          </div>
          <div>
            <img alt={roomDetails.name} src={roomDetails.imageUrl} />
          </div>
          <div>
            <h4>Reviews</h4>
            {roomDetails.reviews
              ? roomDetails.reviews.map((review) => (
                  <div>
                    <p id={review._id}>{review.comment}</p>
                    <Link
                      to={`/review/${review._id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => setShowModal(true)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <div>
          <Link to={`/room/edit/${id}`} className="btn btn-primary">
            Edit
          </Link>
          <button onClick={() => setShowModal(true)} className="btn btn-danger">
            Delete
          </button>
          <Link to={`/room/${id}/review`} className="btn btn-secondary">
            Review
          </Link>
        </div>
      </div>
      <ConfirmationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        action={`/room/delete/${id}`}
      />
    </div>
  );
}

export default PetDetail;
