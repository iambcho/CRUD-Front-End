import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './../../App.css';

class AddCampus extends Component {
    handleSubmit = (event) => {
        event.preventDefault();

        //  create key:values for new object
        const id=this.getCampusId.value;
        const campusName=this.getCampusName.value;
        const campusLocation = "";
        const imageURL = "http://i.imgur.com/AItCxSs.jpg";
        const campusDescription = "";

        //  creates object
        const data = {
            id,
            campusName,
            campusLocation,
            imageURL,
            campusDescription,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        //  dispatches object of Campus
        this.props.dispatch({
            type:'ADD_CAMPUS',
            payload: data
        });

        //  clears forms of recently entered values
        this.getCampusName.value = '';
        this.getCampusId.value = '';
    }

    //  renders form for AddCampus
    render() {
        const style = {
            color: 'white',
            textDecoration: 'none'
        }
        return(
            <div className="container">
                <div className="nav-bar">
                    <ul>
                        <li><Link style={style} to="/">Home</Link></li>
                        <li><Link style={style} to="/students">All Students</Link></li>
                        <li><Link style={style} to="/campuses">All Campuses</Link></li>
                    </ul>
                </div>

                <div className="App">
                    <header className="App-header">
                        <h1>Add Campus</h1>
                        <form onSubmit={this.handleSubmit}>
                            Campus Name:
                            <input type="text" required ref={(input)=>this.getCampusName = input} placeholder="Campus Name"/>
                            <br/>

                            Campus ID:
                            <input type="number" required ref={(input)=>this.getCampusId = input} placeholder="123456"/>
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