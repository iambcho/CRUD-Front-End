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




const AllStudents = (props) => {
    const {students, removeStudent, addStudent } = props;

    return (
        <AllStudentsView students={students} removeStudent={removeStudent} addStudent={addStudent} />
    )
}

export default AllStudents;