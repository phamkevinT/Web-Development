import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

// // First way of writing the code
// // Create a Note using properties from the notes.js file
// function createNotes(noteContents) {
//     return (
//         <Note
//             key={noteContents.id}
//             theTitle={noteContents.title}
//             theContent={noteContents.content}
//         />
//     );
// }

// // Use the .map() to create all the notes
// function App() {
//     return (
//     <div>
//         <Header />
//             {notes.map(createNotes)}
//         <Footer />
//     </div>
//     );
// }

// Second way to writing the code
// Use the .map() to create all the notes
// Use the arrow function to shorten code
function App() {
    return (
    <div>
        <Header />
            {notes.map((noteContents) =>
                <Note
                    key={noteContents.id}
                    theTitle={noteContents.title}
                    theContent={noteContents.content}
                />
            )}
        <Footer />
    </div>
    );
}

export default App;