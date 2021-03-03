import TextInput from "../../components/TextInput";
import TextAreaInput from "../../components/TextInput";

function RoomForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        label="Name"
        type="text"
        id="roomFormName"
        name="name"
        value={props.state.name}
        onChange={props.onChange}
      />

      <TextInput
        label="Picture"
        type="text"
        id="roomFormPic"
        name="imageUrl"
        value={props.state.imageUrl}
        onChange={props.onChange}
      />

      <TextAreaInput
        label="Description"
        type="text"
        id="roomFormDescription"
        name="description"
        value={props.state.description}
        onChange={props.onChange}
      />
    </form>
  );
}
export default RoomForm;
