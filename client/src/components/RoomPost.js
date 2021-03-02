function RoomPost(props) {
  return (
    <div className="card border-0  mb-2" key={props.post._id}>
      <img
        src={props.post.imageUrl}
        className="card-img-top rounded-0"
        alt={props.post.caption}
      />
      <div className="card-body">
        <div className="w-100">
          <span>{props.post.name}</span>
        </div>
        <p>{props.post.description}</p>
      </div>
    </div>
  );
}

export default RoomPost;
