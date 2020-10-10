import React from "react";

// Create a single note with properties passed down from the function createNotes()
// which gets information from the notes.js file.
function Note(props) {
  return (  
  <div className="note">
      <h1>{props.theTitle}</h1>
      <p>{props.theContent}</p>
  </div>
  );
}

export default Note;