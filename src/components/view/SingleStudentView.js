// - [ ] Write a component to display a single student with the following information:
//   - [ ] The student's full name, email, image, and gpa
//   - [ ] The name of their campus (or a helpful message if they don't have one)
// - [ ] Display the appropriate student when the url matches `/students/:studentId`
// - [ ] Clicking on a student from the all-students view should navigate to show that student in the single-student view

// - [ ] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
// - [ ] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view

import React from "react";
import { Link } from "react-router-dom";

const SingleStudentsView = (props) =>{
    const{student} = props; //the view will only get a student from the props 

    return(
        <div className="container"> 
            <h2>Show Student</h2>
            <div className = "nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/students">All Students</Link></li>
                </ul>
            </div>
            <div className = "App">
                <div className = "Student">
                    <img src = {student.imageUrl} width="100" height="100" alt ="not found"></img>
                    <p id = "student-name">{student.firstName} {student.lastName}</p>
                    <p id = "gpa">GPA: {student.gpa}</p>
                    <br/>
                    {/* Cannot use if else so need turnary operator */}
                    {
                        (student.campusId === null)
                        ? <div className = "No-Campus"><p>This student is not registered to a campus</p></div>
                        : <div className = "Campus-Exists"> 
                            <p>This student is registered to a campus</p>
                            <p> student.campusId</p> 
                            <select className = "Select-Campus">
                                <option value = "SELECT">SELECT</option>
                            </select>
                            <button className = "Change-Campus">Change Campus</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}

export default SingleStudentsView;