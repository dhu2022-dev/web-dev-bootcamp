import React from "react";
import { use } from "react";

function CreateArea(props) {
  const [noteTitle, setNoteTitle] = React.useState("");
  const [noteContent, setNoteContent] = React.useState("");

  function handleTitleChange(event) {
    const value = event.target.value;
    setNoteTitle(value);
  }

  function handleContentChange(event) {
    const value = event.target.value;
    setNoteContent(value);
  }

  // Teacher does it this way; less work but I think less SRP
  // const [note, setNote] = useState({
  //   title: "",
  //   content: ""
  // });

  // function handleChange(event) {
  //   const { name, value } = event.target;

  //   setNote((prevNote) => {
  //     return {
  //       ...prevNote,
  //       [name]: value
  //     };
  //   });
  // }

  function handleSubmit(event) {
    event.preventDefault(); // Prevents entire page from refreshing
    const newNote = {
      title: noteTitle,
      content: noteContent
    };
    props.updateNotes(newNote);
    setNoteTitle("");
    setNoteContent("");
  }

  // function submitNote(event){
  //   props.updateNotes(note);
  //   setNote({
  //     title: "",
  //     content: ""
  //   });
  //   event.preventDefault();
  // }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={noteTitle} onChange={handleTitleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={noteContent} onChange={handleContentChange}/>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
