import React, { Component } from "react";
import '../App.css';
// Import components
import BookList from "../containers/BookList";

const App = () => {
    return (
        <div className="App container">
            <ul className="list-group">
                <BookList />
            </ul>
        </div>
    )
}

export default App;
