import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { addStudentThunk } from "../../store/utilities/students";
import './../../App.css';


//  turn into function that takes in props
//  and only renders
class AddStudent extends Component{
    handleSubmit = (event) => {
        event.preventDefault();

        const id=this.getID.value;
        const firstName = this.getFirstName.value;
        const lastName = this.getLastName.value;
        const email = this.getEmail.value;
        const gpa = this.getGPA.value;
        const data = {
            id,
            firstName,
            lastName,
            email,
            gpa
        }
        // console.log(data);
        this.props.dispatch({
            type:'ADD_STUDENT',
            data});
        this.getFirstName.value = '';
        this.getLastName.value = '';
        this.getEmail.value = '';
        this.getGPA.value = '';
    }

    render() {
        return(
            <div className="container">
                <div className = "nav-bar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/students">All Students</Link></li>
                    </ul>
                </div>

                <div className="App">
                    <header className="App-header">
                        <h1>Add Student</h1>
                        <form onSubmit={this.handleSubmit}>
                            First Name:
                            <input type="text" required ref={(input)=>this.getFirstName = input} placeholder="First Name"/>
                            <br/>

                            LastName: 
                            <input type="text" required ref={(input)=>this.getLastName = input} placeholder="Last Name"/>
                            <br/>

                            Email:
                            <input type="email" required ref={(input)=>this.getEmail = input} placeholder="Email"/>
                            <br/>

                            GPA: 
                            <input className="studentGPA" type="number" min="0" max="4" step="0.1" required ref={(input)=>this.getGPA = input} placeholder="3.8"/>
                            <br/>

                            Student ID:
                            <input className="studentID" type="number" required ref={(input)=>this.getID = input} placeholder="123456"/ >
                            <br/>

                            <input type="submit" value="Add Student"/>

                            <button><Link to ="/students">Cancel</Link></button>
                        </form>
                    </header>
                </div>
            </div>
        );
    }
}

export default connect()(AddStudent);