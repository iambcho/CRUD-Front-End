import React from "react";
import { Link, Route } from 'react-router-dom';
import { currCampusThunk } from "../../store/utilities/campus";

const AllCampusesView = (props) => {
    const {campuses, campus, getCurrentCampus} = props;

    console.log(campus);

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
                    <h1>All Campuses</h1>

                    <br/>

                    <button><Link to="/add_students">Add Student</Link></button>
                    
                    <br/>

                    {
                        (campuses.length < 1)
                        ? <div> <p>There are no campuses</p></div>
                        : <div className="all-campuses-container">
                            {campuses.map(campus =>

                                <Link to="/single_campus" ><div className="all-campuses-box" onClick={()=> getCurrentCampus(campus)}>
                                    
                                <img src={campus.imageUrl} width="100" height="100"></img>

                                <p>{campus.campusName}</p>
                                <p>{campus.campusLocation}</p>
                                <p>{campus.campusDescription}</p>
                                </div></Link>)
                            }
                        </div>
                    }
                </header>
            </div>
        </div>
    )
}

export default AllCampusesView;