import React, {Component} from 'react';

// Link needed to be able to load the component 
// requested to our SPA
import {Link} from 'react-router-dom';

// Styling for App
import './App.css';

class AppView extends Component {
  render() {
    return (
        <div className="container">
          <div className = "nav-bar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/students">All Students</Link></li>
              <li><Link to="/campuses">All Campuses</Link></li>
            </ul>
          </div>
          <div className="App">
            <header className="App-header">
            <h1>Students and Campuses Home Page</h1>
            </header>
          </div>
      </div>
    );
  }
}


export default AppView;