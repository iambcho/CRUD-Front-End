import React, { Component } from 'react';
import './App.css';
import AllStudents from "./components/container/AllStudents";
import AddStudent from './components/container/AddStudent';
import SingleStudent from './components/container/SingleStudent';
import EditStudent from './components/container/EditStudent';
import AllCampuses from "./components/container/AllCampuses";
import SingleCampus from "./components/container/SingleCampus";
import AddCampus from "./components/container/AddCampus";


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Import view;
import AppView from "./AppView";

// Additional Redux store imports;
// import { connect } from "react-redux";
// import { fetchStudentsThunk, removeStudentThunk, addStudentThunk } from "./store/utilities/students";


class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0
    }
  }

  render() {

    const AppViewComponent = () => <AppView />
    const AllStudentsComponent = () => <AllStudents />
    const AddStudentComponent = () => <AddStudent/>
    const SingleStudentComponent = () => <SingleStudent/>
    const EditStudentComponent = () => <EditStudent/>
    const SingleCampusComponent = () => <SingleCampus/>
    const AllCampusesComponent = () => <AllCampuses/>
    const AddCampusComponent = () => <AddCampus/>

    return (
      <div>
   

        <Router>
          <Switch>
          <div className="App">
            <div className="App-header">
                <Route exact path="/" render={AppViewComponent}/>
                <Route exact path="/students" render={AllStudentsComponent}/>
                <Route exact path="/add_students" render={AddStudentComponent}/>
                <Route exact path="/single_student" render={SingleStudentComponent}/>
                <Route exact path="/edit_student" render={EditStudentComponent}/>
                <Route exact path ="/single_campus" render = {SingleCampusComponent}/>
                <Route exact path="/campuses" render={AllCampusesComponent}/>
                <Route exact path="/add_campus" render={AddCampusComponent}/>

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