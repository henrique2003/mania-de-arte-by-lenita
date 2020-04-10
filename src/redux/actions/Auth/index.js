import api from '../../../services/api'
// import token from '../../../config/token'
import { LOGIN } from './types'

export const login = (data, history) => async dispatch => {
    try {
        console.log("data")
        console.log(data)
        // const res = api.post('/login', data)

        // localStorage.setItem('token', res.data.token)
        // dispatch({
        //     type: LOGIN,
        //     user: res.data,
        //     isAuthemticate: true
        // })
        // return history.push('/admin')        
        return false
    } catch (error) {
        // return to
    }
}