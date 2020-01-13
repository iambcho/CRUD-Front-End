import React from "react";
import {Link, Route} from 'react-router-dom';

const AllStudentsView = (props) => {
    const {students, removeStudent, addStudent } = props;

    const studentToAdd = {
        "id": 2,
        "firstName": "bob",
        "lastName": "jones",
        "email": "bobbyboy1234@yahoo.com",
        "imageUrl": "https://i.imgur.com/GuAB8OE.jpg",
        "gpa": 3.7,
        "createdAt": "2018-12-05T23:02:45.270Z",
        "updatedAt": "2019-06-14T00:15:35.429Z",
        "campusId": 1
    }

    

    return (
    <div className="App">
        <header className="App-header">
            <h1>All Students</h1>

            <Link to="/">Home</Link>
            <br/>
            <Link to="/students">All Students</Link>
            <br/>
            <br/>

            <button>Add Student</button>
            <br/>
            
            {
                (students.length < 1)
                ? <div> <p>There are no students</p> </div> 
                : <div className="all-students-container">           
                    {students.map(student => 
                        <div className = "all-students-box">
                            <img src={student.imageUrl} width="100" height="100" onClick={() => addStudent(studentToAdd)}></img>

                            <p>{student.firstName} {student.lastName}</p>
                            <p>Campus Name</p>
                        </div>)
                    }
                </div>
            } 
            {/* <div className="all-students-container">           
                {students.map(student => 
                    <div className = "all-students-box">
                        <img src={student.imageUrl} width="100" height="100" onClick={() => addStudent(studentToAdd)}></img>

                        <p>{student.firstName} {student.lastName}</p>
                        <p>Campus Name</p>
                    </div>)
                }
            </div> */}
        </header>
    </div>
    )
}

export default AllStudentsView;