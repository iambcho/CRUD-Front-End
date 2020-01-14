/*
*/

import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './../../App.css';

// Import view;
// import AllStudentsView from "./../view/AllStudentsView";

import { connect } from "react-redux";
import { fetchStudentsThunk} from "./../../store/utilities/students";
import {  currStudentThunk } from "./../../store/utilities/student";
import { editStudentThunk } from "./../../store/utilities/students";




class EditStudent extends Component {
    constructor(props) {
        super(props);

      //THIS IS DESTRUCTURING
        // const {firstName, lastName, gpa, imageUrl} = this.props.student;

        //but don't need to set equal, it can implicitly understand (see example below below)
        this.state = {
            id: 0,
            firstName: "",
            lastName: "",
            gpa: 0,
            imageUrl: ""
        }
    }
    async componentDidMount () {
        await this.props.fetchAllStudents();
        // await this.props.getCurrentStudent();
        await this.props.getCurrentStudent(this.props.student);
        // this.props.getCurrentStudent(this.newStudent);

                const {id, firstName, lastName, gpa, imageUrl} = this.props.student;
        this.setState(
            {
                id, firstName, lastName, gpa, imageUrl
            }
        )
      }

    //   componentDidUpdate () {
    //       this.props.getCurrentStudent(this.newStudent);
    //   }


    
      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
      }

    //   onClickStudent = (event) => {
    //       return (
            
    //       )
        
    //   }
    handleEdit = (e) => {
        e.preventDefault();
       const {id, firstName, lastName, gpa, imageUrl} = this.state;

         let newStudent = {
            id,
            firstName, 
            lastName, 
            gpa, 
            imageUrl
        }
        this.props.editStudent(newStudent);
        this.props.getCurrentStudent(newStudent);
        console.log(newStudent);
        //this.props.dispatch({type: 'EDIT_STUDENT', payload: newStudent});
    }

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
                        <h1>Edit Student</h1>
                        <form onSubmit={this.handleEdit}>
                            First name:
                            <input type = "text" name="firstName" onChange={this.handleChange} value={this.state.firstName}></input><br/>
                            Last name: 
                            <input type = "text" name="lastName" onChange={this.handleChange} value={this.state.lastName}></input><br/>
                            GPA: 
                            <input type = "text" name="gpa" onChange={this.handleChange} value={this.state.gpa}></input><br/>
                            Student image:
                            <input type = "text" name="imageUrl" onChange={this.handleChange} value={this.state.imageUrl}></input><br/>
                            <input type = "submit" ></input>
                            
                            
                            
                        </form>
                        <br/>
                        <Link to="/single_student">Back</Link>
                    </header>
                </div>
            </div>
            )
      }
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = (state) => {
    return {
      students: state.students,
      student: state.student
    }
  }
  
  // Declaration for mapDispatchToProps;
  // The keys in this returned object will be on your component's `props` object as well;
  // The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
  const mapDispatch = (dispatch) => {
    return {
      fetchAllStudents: () => dispatch(fetchStudentsThunk()),
      getCurrentStudent: (student) => dispatch(currStudentThunk(student)),
      editStudent: (student) => dispatch(editStudentThunk(student))


    }
  }
  
  export default connect(mapState, mapDispatch)(EditStudent);