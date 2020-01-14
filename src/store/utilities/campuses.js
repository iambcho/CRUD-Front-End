//ACTION TYPES:
const FETCH_CAMPUSES = "FETCH_CAMPUSES"
const REMOVE_CAMPUS = "REMOVE_CAMPUS"
const ADD_CAMPUS = "ADD_CAMPUS"

//ACTION CREATOR
//fetchCampuses is returning a object of type FETCH_CAMPUSES
const fetchCampuses = (campuses) =>{
    return{
        type: FETCH_CAMPUSES,
        payload: campuses
    }
}

//removeCampus is returning a object of type REMOVE_CAMPUS
const removeCampus = (id) => {
    return{
        type: REMOVE_CAMPUS,
        payload: id
    }
}

//addCampus is returning a object of type ADD_CAMPUS
const addCampus = (campus) => {
    return {
        type: ADD_CAMPUS,
        payload: campus
    }
}

//THUNK CREATOR
//thunking allows asynchronous, which is fancy talk for
//saying I can call this function and it will execute
//later, it doesn't block other functions and 
//once complete will be outputed after call stack is empty
export const fetchCampusesThunk = () => (dispatch) => {
    const arrayOfCampusFromAPI = [ 
        {
            "id": 99,
            "campusName": "Hunter College",
            "campusLocation": "695 Park Ave, New York, NY 10065",
            "imageURL": "https://i.imgur.com/RdwZ6mO.jpg",
            "campusDescription": "Hunter College be like that",
            "createdAt": "2018-12-06T19:58:21.314Z",
            "updatedAt": "2018-12-06T19:58:21.314Z",
            "campusStudents":1
        },
        {
            "id": 12,
            "campusName": "Yale College",
            "campusLocation": "that locations though",
            "imageURL": "https://i.imgflip.com/3fkdf4.jpg",
            "campusDescription": "Hunter College be like that",
            "createdAt": "2018-12-06T19:58:21.314Z",
            "updatedAt": "2018-12-06T19:58:21.314Z",
            "campusStudents":undefined
        },
        {
            "id": "",
            "campusName": "",
            "campusLocation": "",
            "imageURL": "",
            "campusDescription": "",
            "createdAt": "2018-12-06T19:58:21.314Z",
            "updatedAt": "2018-12-06T19:58:21.314Z",
            "campusStudents":0
        },
        {
            "id": 1834,
            "campusName": "New York University",
            "campusLocation": "New York",
            "imageURL": "https://i.kym-cdn.com/photos/images/newsfeed/000/248/262/882.jpg",
            "campusDescription": "This is everywhere",
            "createdAt": "2018-12-06T19:58:21.314Z",
            "updatedAt": "2018-12-06T19:58:21.314Z",
            "campusStudents":5
        },
        {
            "id": 99,
            "campusName": "Brooklyn Tech",
            "campusLocation": "Bronx",
            "imageURL": "https://i.imgur.com/HQw3fzsh.jpg",
            "campusDescription": "Not a college, full of weirdos",
            "createdAt": "2018-12-06T19:58:21.314Z",
            "updatedAt": "2018-12-06T19:58:21.314Z",
            "campusStudents":3
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
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CAMPUSES:
            return action.payload;
        case REMOVE_CAMPUS:
            return state.filter(campus => campus.id !== action.payload);
        case ADD_CAMPUS:
            return [...state, action.payload];
        default:
            return state;
    }
} 

