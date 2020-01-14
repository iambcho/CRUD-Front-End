import React, {Component} from "react";
import "./../../App.css";

//import view in order to render page
import SingleCampusView from "./../view/SingleCampusView";

//import connect to have mapState and mapDispatch
//be connected to instance of class
//thus SingleCampusContainer should have access
//to current student, edit current student function, and current student fetch
import {connect} from "react-redux";
import { currCampusThunk, editCampusThunk} from "./../../store/utilities/campus";

class SingleCampusContainer extends Component{
    componentDidMount=()=>{
        console.log("The Campus is: ", this.props.campus)
        this.props.currCampus(this.props.campus);
    }
    render(){
        return(
            <SingleCampusView campus = {this.props.campus} ></SingleCampusView>
        )
    }
}

const mapState = (state) => {
    return({
        campus: state.campus
    });
}

const mapDispatch = (dispatch) => {
    return({
        edit: (campus) => dispatch(editCampusThunk(campus)),
        currCampus: (campus) => dispatch(currCampusThunk(campus))
    });
}

//allows us to connect mapState and mapDispatch objects to the SingleCampusContainer
export default connect(mapState, mapDispatch)(SingleCampusContainer);