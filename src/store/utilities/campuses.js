//ACTION TYPES:
const FETCH_CAMPUSES = "FETCH_CAMPUSES"
const REMOVE_CAMPUS = "REMOVE_CAMPUS"
const ADD_CAMPUS = "ADD_CAMPUS"

//ACTION CREATOR
//fetchCampuses is returning a object of type FETCH_CAMPUSES
const fetchCampuses = (campuses) =>{
    return({
        type: FETCH_CAMPUSES,
        payload: campuses
    })
}

//removeCampus is returning a object of type REMOVE_CAMPUS
const removeCampus = (id) => {
    return({
        type: REMOVE_CAMPUS,
        payload: id
    })
}

//addCampus is returning a object of type ADD_CAMPUS
const addCampus = (campus) => {
    return ({
        type: ADD_CAMPUS,
        payload: campus
    })
}

//THUNK CREATOR
//thunking allows asynchronous, which is fancy talk for
//saying I can call this function and it will execute
//later, it doesn't block other functions and 
//once complete will be outputed after call stack is empty
export const fetchCampusesThunk = () => (dispatch) => {
    const arrayOfCampusFromAPI = [ //this is dumb data
        {
            "id": 99,
            "campusName": "Hunter College",
            "campusLocation": "695 Park Ave, New York, NY 10065",
            "imageURL": "https://i.imgur.com/RdwZ6mO.jpg",
            "campusDescription": "Hunter College be like that",
        },
        {
            "id": 12,
            "campusName": "Yale College",
            "campusLocation": "that locations though",
            "imageURL": "https://i.imgflip.com/3fkdf4.jpg",
            "campusDescription": "Hunter College be like that",
        },
        {
            "id": null,
            "campusName": "",
            "campusLocation": "",
            "imageURL": "",
            "campusDescription": "",
        },
        {
            "id": 1834,
            "campusName": "New York University",
            "campusLocation": "New York",
            "imageURL": "https://i.kym-cdn.com/photos/images/newsfeed/000/248/262/882.jpg",
            "campusDescription": "This is everywhere",
        },
        {
            "id": 99,
            "campusName": "Brooklyn Tech",
            "campusLocation": "Bronx",
            "imageURL": "https://i.imgurhttps://ballmemes.com/i/1-25-nydailynews-com-sports-final-chance-of-rain-70-58-wednesday-october-83e1545695c041ceb6cab7889cb9ae4d.com/RdwZ6mO.jpg",
            "campusDescription": "Not a college, full of weirdos",
        },
    ];

    dispatch(fetchCampuses(arrayOfCampusFromAPI));
}

export const removeCampusThunk = (id) => (dispatch) =>{
    dispatch(removeCampus(id));
}

export const addCampusThunk = (campus) => (dispatch) => {
    dispatch(addCampus(campus));
}

//REDUCER FUNCTION
function allCampusesReducer(state = [], action){
    switch (action.type) {
        case FETCH_CAMPUSES:
            return action.payload;
        case REMOVE_CAMPUS:
            return state.filter(campus => campus.id !== action.payload);
        case ADD_CAMPUS:
            return [...campus, action.payload];
        default:
            return state;
    }
} 

export default allCampusesReducer;
