// ACTION TYPES;
const DELETE_STUDENT = "DELETE_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";
const CURR_STUDENT = "CURR_STUDENT";

// ACTION CREATOR;
const deleteStudent = (id) => {
    return {
        type: DELETE_STUDENT,
        payload: id
    }
}

const editStudent = (student) => {
    return {
        type: EDIT_STUDENT,
        payload: student
    }
}

const currStudent = (student) => {
    return {
        type: CURR_STUDENT,
        payload: student
    }
}

// THUNK CREATOR;
export const deleteStudentThunk = (id) => (dispatch) => {
    let resolvedActionObject = deleteStudent(id); 
    dispatch(resolvedActionObject);
}

export const editStudentThunk = (student) => (dispatch) => {
    let resolvedActionObject = editStudent(student); 
    dispatch(resolvedActionObject);
}

export const currStudentThunk = (student) => (dispatch) => {
    let resolvedActionObject = currStudent(student);
    dispatch(resolvedActionObject);
}

// REDUCER FUNCTION;
export default (state = {}, action) => {
    switch (action.type) {
        // case DELETE_STUDENT:
        //     return state.filter(student => student.id !== action.payload);
        // case EDIT_STUDENT:
        //     return [...state, action.payload]
        case CURR_STUDENT:
            return action.payload;
        default:
            return state;
    }
}