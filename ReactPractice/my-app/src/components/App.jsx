import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    // An empty array as the initial state
    const [notes, setNotes] = useState([]);

    // Value of 'newNote' is passed over from CreateArea.jsx's submitNote function, specifically from the line: 'props.onAdd(note);'
    function addNote(newNote) {
        setNotes(prevNotes => {
            // Using the 'spread' function of ES6 to combine the object arrays
            return [...prevNotes, newNote];
        });
    }

    // Delete the note by only return the ones that don't match the id of the note being deleted
    function deleteNote(id) {
        setNotes(prevNotes => {
            // Filter through all the noteItems and return ones that don't have their index equal to the id of the note being deleted
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
      <div>
        <Header />
        {/* Passing down onAdd as props to the createArea.jsx */}
        <CreateArea onAdd={addNote}/>
        
        {/* Return each of the 'noteItem' in the 'notes' array */}
        {
            notes.map((noteItem, index) => {
            return (<Note
                // Use the 'index' given by the map function to identify each of the notes
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
            />
            );
            })}

        <Footer />
      </div>
    );
  }

export default App;