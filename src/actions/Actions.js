import { EDIT_USER, UPDATE_USER, SELECTED_USER, SET_FIRST_NAME} from './ActionTypes';


export function setFirstName(firstName){
    console.log(firstName);
    return{
        type: SET_FIRST_NAME,
        firstName
    }
}


export function editUser(id) {
    console.log(id);
    
    return {
        type: EDIT_USER,
        id
    }
};

export  function selectedUser(id) {
    return {
        type: SELECTED_USER,
        id

    };
}
export  function updateUser(id, data) {
    return {
        type: UPDATE_USER,
        id, 
        data
    }
};
