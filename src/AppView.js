import React from 'react';

// Link needed to be able to load the component 
// requested to our SPA
import {Link} from 'react-router-dom';

// Styling for App
import './App.css';

const AppView = () => {
  const style = {
    color: 'white',
    textDecoration: 'none'
  }
    return (
        <div className="container">
          <div className = "nav-bar">
            <ul>
            <li><Link style = {style} to="/">Home</Link></li>
                <li><Link style = {style} to="/students">All Students</Link></li>
                <li><Link style = {style} to="/campuses">All Campuses</Link></li>
            </ul>
          </div>
          <div className="App">
            <header className="App-header">
            <h1 id = "main-page">Students and Campuses Home Page</h1>
            <img src ="https://gocommandoapp.com/wp-content/uploads/2017/09/733a360b-a9f8-4204-ab5e-570000ac24f1.jpeg" alt = "not found"></img>
            </header>
          </div>
      </div>
    );
}


export default AppView;