/*



*/

import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import './../../App.css';

// Import view;
// import AllStudentsView from "./../view/AllStudentsView";

import { connect } from "react-redux";
import { fetchStudentsThunk} from "./../../store/utilities/students";
import {  currStudentThunk } from "./../../store/utilities/student";
import { editStudentThunk } from "./../../store/utilities/students";




class EditStudent extends Component {
    componentDidMount() {
        this.props.fetchAllStudents();
        this.props.getCurrentStudent();
        this.props.editStudent();
      }
    
      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
      }

    //   onClickStudent = (event) => {
    //       return (
            
    //       )
        
    //   }
    handleEdit = (e) => {
        e.preventDefault();
        const newFirstName = this.getFirst.value;
        const newLastName = this.getLast.value;
        const newGPA = this.getGPA.value;
        const newImage = this.getImage.value;
        // const data = {
        //   newTitle,
        //   newMessage
        // }
       //this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    // ()=>this.editStudent(this.props.student);
        let newStudent = {
            firstName: newFirstName,
            lastName: newLastName,
            gpa: newGPA,
            imageUrl: newImage
        }
        this.editStudent(newStudent);
        console.log(this.student);
        //this.props.dispatch({type: 'EDIT_STUDENT', payload: newStudent});
    }

      render() {

        
        return (
              
            //<EditStudent students = {this.props.students} student = {this.props.student} getCurrentStudent= {this.props.getCurrentStudent}/>
            <form onSubmit={this.handleEdit}>
                First name:
                <input type = "text" ref={(input) => this.getFirst = input} placeholder={this.props.student.firstName}></input><br/>
                Last name: 
                <input type = "text" ref={(input) => this.getLast = input} placeholder={this.props.student.lastName}></input><br/>
                GPA: 
                <input type = "text" ref={(input) => this.getGPA = input} placeholder={this.props.student.gpa}></input><br/>
                Student image:
                <input type = "text" ref={(input) => this.getImage = input} placeholder={this.props.student.imageUrl}></input><br/>
                {/* <Link to="/single_student"></Link> */}
                <input type = "submit" ></input>
                
            </form>
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