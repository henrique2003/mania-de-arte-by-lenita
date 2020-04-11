import { LOGIN, LOAD_USER, USER_ERROR, LOGOUT } from '../actions/Auth/types'

export default function user(state = {}, action) {
    const { type, payload } = action
    switch(type) {
        case LOAD_USER:
        case LOGIN:
            return {...payload}
        case LOGOUT:
        case USER_ERROR:
        default:
            return false
    }
}