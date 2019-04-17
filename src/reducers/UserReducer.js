import { SELECTED_USER, EDIT_USER, UPDATE_USER, SET_FIRST_NAME} from '../actions/ActionTypes';
import users from '../users.json'

const initialState =  JSON.parse(JSON.stringify(users))

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRST_NAME: 
            return { ...state,
                firstName: action.firstName,
              }
        case SELECTED_USER:
        //     return state.map((user) => { 
        //         if (user.id === action.id) {
        //             return {
        //                 ...user
        //             }
        //     } else return user
        //  })
        case EDIT_USER:
            // return state.map((user) => user.id === action.id ? {...user, editing: !user.editing} : user)
        case UPDATE_USER:
            return state.map((user) => {
                if (user.id === action.id) {
                    return {
                        ...user,
                        name: action.data.newName,
                        lastName: action.data.newLastName,
                        email: action.data.newEmail,
                        phone: action.data.newPhone,
                        city: action.data.newCity,
                        address: action.data.newAddress,
                        editing: !user.editing
                    }
                } else return user;
            })
        default:
            return state;
    }
}

export default userReducer;