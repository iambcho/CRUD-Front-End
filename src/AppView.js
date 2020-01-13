import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';


import './App.css';

class AppView extends Component {


  render() {

    return (

        <div className="App">
            <header className="App-header">
                <h1>Students and Campuses Home Page</h1>

                <Link to="/">Home</Link>
                <br/>
                <Link to="/students">All Students</Link>
                <br/>
                
            </header>
        </div>
    

    );
  }

}


export default AppView;