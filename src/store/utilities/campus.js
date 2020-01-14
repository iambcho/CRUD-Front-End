//ACTION TYPES:
const CURR_CAMPUS = "CURR_CAMPUS";
const EDIT_CAMPUS = "EDIT_CAMPUS";

//ACTION CREATOR
/*currCampus creates a object that has type CURR_CAMPUS
this refers to the campus the mouse has clicked on, and 
will be used to display the information it contains*/
const currCampus=(campus)=>{
    return ({
        type: CURR_CAMPUS,
        payload: campus
    });
}

/*editCampus creates a object that has the type EDIT_CAMPUS
and it takes in a campus as a paramater, and we use this to
update the current campus we are on*/
const editCampus=(campus)=>{
    return({
        type: EDIT_CAMPUS,
        payload: campus
    });
}

//THUNK CREATOR
/*Understand that thunks must return a function
and they are used for asynchronus calls, this call 
occurs because it is returning a function*/

export const currCampusThunk=(id)=>(dispatch)=>{
    dispatch(currCampus(id)); //send to reducer (passing middleware first if present)
}

export const editCampusThunk=(campus)=>(dispatch)=>{
    dispatch(editCampus(campus));
}

//REDUCER FUNCTION
function singleCampusReducer(state={}, action){
    switch(action.type){
        case CURR_CAMPUS:
            return action.payload;
        case EDIT_CAMPUS:
            return action.payload; //must be modified for functionality
        default:
            return state;
    }
}

export default singleCampusReducer;