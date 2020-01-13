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

- [ ] Display the all-students component when the url matches `/students`

- [ ] Add links to the navbar that can be used to navigate to the all-campuses view and the all-students view


*/

import React, { Component } from 'react';
 import './../../App.css';

// Import view;
import AllStudentsView from "./../view/AllStudentsView";

// Additional Redux store imports;
// import { connect } from "react-redux";
// import { fetchStudentsThunk, removeStudentThunk, addStudentThunk } from "./../../../store/utilities/students";



const AllStudents = (props) => {
    const {students, removeStudent, addStudent } = props;

    // const studentToAdd = {
    //     "id": 2,
    //     "firstName": "bob",
    //     "lastName": "jones",
    //     "email": "bobbyboy1234@yahoo.com",
    //     "imageUrl": "https://i.imgur.com/GuAB8OE.jpg",
    //     "gpa": 3.7,
    //     "createdAt": "2018-12-05T23:02:45.270Z",
    //     "updatedAt": "2019-06-14T00:15:35.429Z",
    //     "campusId": 1
    // }

    return (
    // <div className="App">
    //     <header className="App-header">
    //         {students.map(student => <div><img src={student.imageUrl} width="100" height="100" onClick={() => addStudent(studentToAdd)}></img></div>)}
    //     </header>
    // </div>
        <AllStudentsView students={students} removeStudent={removeStudent} addStudent={addStudent} />
    )
}

export default AllStudents;