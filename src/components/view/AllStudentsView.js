import React from "react";
import {Link, Route} from 'react-router-dom';
import { currStudentThunk } from "../../store/utilities/student";

const AllStudentsView = (props) => {
    const {students, student, getCurrentStudent} = props;

    console.log(student);
    // onClickStudent = (event) => {
    //     return (
    //         event.target.value.id;
    //     )
    // }
    
    return (
    <div className="container">
        <div className = "nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/students">All Students</Link></li>
                </ul>
            </div>
            
    <div className="App">
        
        <header className="App-header">
            
            
            <h1>All Students</h1>

            <br/>

            <Link to="/add_students">Add Student</Link>
            
            <br/>

           
            
            {
                (students.length < 1)
                ? <div> <p>There are no students</p> </div> 
                : <div className="all-students-container">           
                    {students.map(student => 
                    
                        <Link to="/single_student" ><div className = "all-students-box" onClick={() => getCurrentStudent(student)}>
                            {/* <img src={student.imageUrl} width="100" height="100" onClick={() => addStudent(studentToAdd)}></img> */}
                            <img src={student.imageUrl} width="100" height="100"></img>

                            <p>{student.firstName} {student.lastName}</p>
                            <p>Campus Name</p>
                        </div></Link>)
                    }
                </div>
            } 
          
        </header>
    </div>
    </div>
    )
}

export default AllStudentsView;