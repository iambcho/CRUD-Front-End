import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';

//  turn into function that takes in props
//  and only renders
class AddStudent extends Component{
    handleSubmit = (event) => {
        event.preventDefault();

        const firstName = this.getFirstName.value;
        const lastName = this.getLastName.value;
        const email = this.getEmail.value;
        const gpa = this.getGPA.value;
        const data = {
            id: new Date(),
            firstName,
            lastName,
            email,
            gpa
        }

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
            <div>
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
                    <input type="number" required ref={(input)=>this.getGPA = input} placeholder="3.8"/>
                    <br/>

                    <input type="submit" value="Add Student"/>

                    <button onClick="">Cancel</button>
                </form>
            </div>
        );
    }
}

export default AddStudent;