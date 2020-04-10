import { LOGIN } from '../actions/Auth/types'

let initialState = {
    user: {},
    isAuthemticate: false
}

const Auth = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return [...state, ...action]
        default:
            return false
    }
}

export default Auth