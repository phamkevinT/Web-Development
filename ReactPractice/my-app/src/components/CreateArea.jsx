import React, {useState} from "react";

// 'props' used to access 'addNote()' through 'onAdd'
function CreateArea(props) {

    // Defining the default state of a note as empty
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    // 
    function handleChange(event) {
        // Get the 'name' and 'value' attribute of the input form
        const {name, value} = event.target;
        // Access the current state through 'prevNote' and concatenate it with new note
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        // onAdd is located in the App.jsx. It calls the addNotes() function
        props.onAdd(note);
        // Reset state of the the note to become empty
        setNote({
            title: "",
            content: ""
        });
        // Prevent from reloading the whole page
        event.preventDefault();
    }

    return (
        <div>
        <form>
            <input 
                name="title" 
                onChange={handleChange} 
                value={note.title} 
                placeholder="Title" 
            />
            <textarea 
                name="content" 
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..." 
                rows="3" 
            />
            <button onClick={submitNote}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;
