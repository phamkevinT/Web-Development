import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function createNotes(noteContents) {
    return (
        <Note
            key={noteContents.id}
            theTitle={noteContents.title}
            theContent={noteContents.content}
        />
    );
}

function App() {
    return (
    <div>
        <Header />
            {notes.map(createNotes)}
        <Footer />
    </div>
    );
}

export default App;