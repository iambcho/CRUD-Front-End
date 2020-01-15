import React from "react";
import { Link } from 'react-router-dom';

const AllCampusesView = (props) => {
    const style = {
        color: 'white',
        textDecoration: 'none'
    }
    const {campuses, getCurrentCampus} = props;
    
    return (
        <div className="container">
            <div className = "nav-bar">
                <ul>
                <li><Link style = {style} to="/">Home</Link></li>
                <li><Link style = {style} to="/students">All Students</Link></li>
                <li><Link style = {style} to="/campuses">All Campuses</Link></li>
                </ul>
            </div>

            <div className="App">
                <header className="App-header">
                    <h1>All Campuses</h1>
                    <br/>
                    <button><Link to="/add_campus">Add Campus</Link></button>   
                    <br/>
                    {
                        (campuses === undefined || campuses.length < 1 ) 
                        ? <div> <p>There are no campuses</p></div>
                        : <div className="all-campuses-container">
                            {campuses.map(campus =>

                                <Link to="/single_campus" ><div className="all-campuses-box" onClick={()=> getCurrentCampus(campus)}>
                                    
                                <img src={campus.imageURL} width="100" height="100" alt ="not found"></img>

                                <p>{campus.campusName}</p>
                                {/* <p>{campus.campusLocation}</p> */}
                                {/* <p>{campus.campusDescription}</p> */}
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