import React from "react";

function Note(props) {
  return (  
  <div className="note">
      <h1>{props.theTitle}</h1>
      <p>{props.theContent}</p>
  </div>
  );
}

export default Note;