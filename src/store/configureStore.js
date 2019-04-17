import {userReducer} from '../reducers/UserReducer'
import { createStore} from 'redux';
import {rootReducer} from '../reducers/index'

export const store = createStore(
    userReducer
)