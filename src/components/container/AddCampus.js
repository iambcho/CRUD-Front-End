import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './../../App.css';

class AddCampus extends Component {
    handleSubmit = (event) => {
        event.preventDefault();

        //  create key:values for new object
        const id=0;
        const campusName=this.getCampusName.value;
        const campusLocation = "";
        const imageURL = "";
        const campusDescription = "";

        //  creates object
        const data = {
            id,
            campusName,
            campusLocation,
            imageURL,
            campusDescription
        }

        //  dispatches object of Campus
        this.props.dispatch({
            type:'ADD_CAMPUS',
            payload: data
        });

        //  clears forms of recently entered values
        this.getCampusName.value = '';
    }

    //  renders form for AddCampus
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

                            <input type="submit" value="Add Campus"/>

                            <button><Link to ="/students">Cancel</Link></button>
                        </form>
                    </header>
                </div>
            </div>
        )
    }
}

export default connect()(AddCampus);