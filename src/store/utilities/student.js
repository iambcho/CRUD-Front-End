// ACTION TYPES;
// const EDIT_STUDENT = "EDIT_STUDENT";
const CURR_STUDENT = "CURR_STUDENT";

// ACTION CREATOR;

// const editStudent = (student) => {
//     return {
//         type: EDIT_STUDENT,
//         payload: student
//     }
// }


const currStudent = (student) => {
    return {
        type: CURR_STUDENT,
        payload: student
    }
}

// THUNK CREATOR;

// export const editStudentThunk = (student) => (dispatch) => {
//     let resolvedActionObject = editStudent(student); 
//     dispatch(resolvedActionObject);
// }

export const currStudentThunk = (student) => (dispatch) => {
    //let resolvedActionObject = currStudent(student);

    let resolvedActionObject =         {
        "id": 4,
        "firstName": "Jerry",
        "lastName": "Jingle",
        "email": "jerryjingle@bells.com",
        "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
        "gpa": 4,
        "createdAt": "2018-12-06T19:58:21.314Z",
        "updatedAt": "2018-12-06T19:58:21.314Z",
        "campusId": 3
        }

        
    dispatch(currStudent(resolvedActionObject));
}

// REDUCER FUNCTION;
export default (state = {}, action) => {
    switch (action.type) {
        
        // case EDIT_STUDENT:
        //     return action.payload;
        case CURR_STUDENT:
            return action.payload;
        default:
            return state;
    }
}