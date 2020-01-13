import React, { Component } from 'react';
import './App.css';
import AllStudents from "./components/container/AllStudents";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Import view;
import AppView from "./AppView";

// Additional Redux store imports;
import { connect } from "react-redux";
import { fetchStudentsThunk, removeStudentThunk, addStudentThunk } from "./store/utilities/students";

class AppContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     amount: 0
  //   }
  // }

  // componentDidMount() {
  //   this.props.fetchAllStudents();
  // }

  // handleChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value })
  // }

  // removeStudent = (id) => {
  //   this.props.removeStudent(id);
  // }

  // addStudent = (student) => {
  //   this.props.addStudent(student);
  // }

  render() {

    const AppViewComponent = () => <AppView />
    const AllStudentsComponent = () => <AllStudents />
    // const AllStudentsComponent = () => <AllStudents students={this.props.students} removeStudent={this.removeStudent} addStudent={this.addStudent}/>
    return (
      <div>
   

        <Router>
          <Switch>
          <div className="App">
            <div className="App-header">
                <Route exact path="/" render={AppViewComponent}/>
                <Route exact path="/students" render={AllStudentsComponent}/>
              </div>
          </div>
          </Switch>
        </Router>
    
      
      </div>
      )
  }
}

export default AppContainer;

// // Declaration for mapStateToProps;
// // The keys in this returned object will be on your component's `props` object;
// // The values of these keys reflect the value of the piece of state in your Redux store;
// const mapState = (state) => {
//   return {
//     students: state.students
//   }
// }

// // Declaration for mapDispatchToProps;
// // The keys in this returned object will be on your component's `props` object as well;
// // The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
// const mapDispatch = (dispatch) => {
//   return {
//     fetchAllStudents: () => dispatch(fetchStudentsThunk()),
//     removeStudent: (id) => dispatch(removeStudentThunk(id)),
//     addStudent: (student) => dispatch(addStudentThunk(student))
//   }
// }

// export default connect(mapState, mapDispatch)(AppContainer);