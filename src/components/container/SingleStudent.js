/**
 * Comments are done quickly, cannot ensure all information presented is accurate or 
 * up to date in future time, but the purpose of these coments are to help
 * understand the tech we are learning at our bootcamp.
 * Date: 1/14/20
 */
import React, { Component } from 'react'; //to use react and component 
import './../../App.css'; //refers to the styling of the page

// Import view in order to render page;
import SingleStudentView from "./../view/SingleStudentView";

//import connect in order to be able to use
//the store functions/states/objects
import { connect } from "react-redux";
// import { fetchStudentsThunk} from "./../../store/utilities/students";
import { currStudentThunk} from "./../../store/utilities/student";
//BELOW IS WHAT SUCH PREVIOUSLY HAD
// import { currStudentThunk, editStudentThunk } from "./../../store/utilities/student";

class SingleStudentContainer extends Component {
    componentDidMount=()=>{
        // console.log("singlestuden: " ,this.props.student)
        this.props.getCurrentStudent(this.props.student);

    }

    render(){
        return(
            <SingleStudentView student = {this.props.student} getCurrentStudent={this.props.getCurrentStudent}></SingleStudentView>
        )
    }

}

const mapState = (state) =>{
    return({
        student: state.student
    })
}

const mapDispatch = (dispatch) => {
    return ({
        // edit: (student) => dispatch(editStudentThunk(student)),
        getCurrentStudent: (student) => dispatch(currStudentThunk(student))
    })
}

export default connect(mapState,mapDispatch)(SingleStudentContainer)