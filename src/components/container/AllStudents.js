/*


can navigate to all students view, and
[ X ] see a list of all students in the database
[ X ] see an informative message if no students exist
[ X ] add a new student
    [   ] with a validated form displaying real-time error messages
    [   ] which redirects the new student’s single student view




Frontend (React-Redux, React, and React Router)

- [ ] Write a students sub-reducer to manage students in your Redux store

- [ X ] Write a component to display a list of all students (just their names)

- [ X ] Display the all-students component when the url matches `/students`

- [ ] Add links to the navbar that can be used to navigate to the all-campuses view and the all-students view


*/

import React, { Component } from 'react';
 import './../../App.css';

// Import view;
import AllStudentsView from "./../view/AllStudentsView";

import { connect } from "react-redux";
import { fetchStudentsThunk } from "./../../store/utilities/students";


class AllStudents extends Component {
    componentDidMount() {
        this.props.fetchAllStudents();
      }
    
      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
      }


      render() {

        
        return (
              
            <AllStudentsView students={this.props.students} />
        
            )
      }
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = (state) => {
    return {
      students: state.students
    }
  }
  
  // Declaration for mapDispatchToProps;
  // The keys in this returned object will be on your component's `props` object as well;
  // The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
  const mapDispatch = (dispatch) => {
    return {
      fetchAllStudents: () => dispatch(fetchStudentsThunk()),
    }
  }
  
  export default connect(mapState, mapDispatch)(AllStudents);