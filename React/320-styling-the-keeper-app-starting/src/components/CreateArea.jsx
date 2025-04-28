import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    setExpand(false);
  }

  return (
    <div>
      <form className="create-note">
          {expand && 
          (<input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />)
          }
        <textarea
          name="content"
          onClick={() => setExpand(true)}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expand ? 3 : 1}
        />
        {/* Zoom = zoom in on button on page load */}
        <Zoom in={true}>
          {/* Fab = Floating Action Button; changes color on hover */}
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
