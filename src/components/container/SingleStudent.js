import React, { Component } from 'react'; //to use react and component 
import './../../App.css'; //refers to the styling of the page

// Import view in order to render page;
import SingleStudentView from "./../view/SingleStudentView";

//import connect in order to connect mapState, and mapDispatch
//to the instance of the class
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