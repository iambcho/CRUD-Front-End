import React from "react";
import {Link, Route} from 'react-router-dom';

const AllStudentsView = (props) => {
    const {students} = props;

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

    
    //onClick
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
                        <div className = "all-students-box">
                            {/* <img src={student.imageUrl} width="100" height="100" onClick={() => addStudent(studentToAdd)}></img> */}
                            <img src={student.imageUrl} width="100" height="100"></img>

                            <p>{student.firstName} {student.lastName}</p>
                            <p>Campus Name</p>
                        </div>)
                    }
                </div>
            } 
          
        </header>
    </div>
    </div>
    )
}

export default AllStudentsView;