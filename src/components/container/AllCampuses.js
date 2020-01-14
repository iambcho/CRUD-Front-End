import React, { Component } from 'react';
import './../../App.css';

import AllCampusesView from "./../view/AllCampusesView";

import { connect } from "react-redux";
import { fetchCampusesThunk } from "./../../store/utilities/campuses";
// import { currCampusThunk } from "./../../store/utilities/campus";

class AllCampuses extends Component {
    componentDidMount() {
        this.props.fetchAllCampuses();
    }

    handleChane = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        return (
            <AllCampusesView campuses = {this.props.campuses} campus = {this.props.campus} getCurrentCampus={this.props.getCurrentCampus}/>
        )
    }
}

const mapState = (state) => {
    return {
        campus: state.campuses,
        currCampus: state.campus
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchAllCampuses: () => dispatch(fetchCampusesThunk()),
        getCurrentCampus: (campus) => dispatch(currCampusThunk(campus))
    }
}

export default connect(mapState, mapDispatch)(AllCampuses);