import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { addCampusThunk } from "../../store/utilities/campuses";
import './../../App.css';

class AddCampus extends CompositionEvent {
    handleSubmit = (event) => {
        event.preventDefault();

        const id=0;
        const campusName=this.getCampusName.value;
        const campusLocation = "";
        const imageURL = "";
        const campusDescription = "";

        const data = {
            id,
            campusName,
            campusLocation,
            imageURL,
            campusDescription
        }
//         console.log(data);
        this.props.dispatch({
            type:'ADD_CAMPUS',
            data
        });
        this.getCampusName.value = '';
    }

    render() {
        return(
            <div className="container">
                <div className="nav-bar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/students">All Students</Link></li>
                        <li><Link to="/campuses">All Campuses</Link></li>
                    </ul>
                </div>

                <div className="App">
                    <header className="App-header">
                        <h1>Add Campus</h1>
                        <form onSubmit={this.handleSubmit}>
                            Campus Name:
                            <input type="text" required ref={(input)=>this.getCampusName = input} placeholder="Campus Name"/>
                            <br/>
                        </form>
                    </header>
                </div>
            </div>
        )
    }
}

export default connect()(AddCampus);