import { toast } from 'react-toastify'
import api from '../../../services/api'
import token from '../../../config/token'
import { LOGIN, LOAD_USER, LOGOUT, USER_ERROR } from './types'

export const loadUser = (history) => async dispatch => {
    try {
        token()
        const res = await api.get("/admin/load")

        dispatch({
            type: LOAD_USER,
            payload: res.data
        })
    } catch (error) {
        dispatch({ type: USER_ERROR })
        toast.error("Acesso negado")
        return history.push("/login")
    }
}

export const loadPrimary = (history) => async dispatch => {
    try {
        token()
        const res = await api.get("/admin/load/primary")

        dispatch({
            type: LOAD_USER,
            payload: res.data
        })
    } catch (error) {
        dispatch({ type: USER_ERROR })
        toast.error("Acesso negado")
        return history.push("/login")
    }
}

export const login = (data, history) => async dispatch => {
    try {
        const res = await api.post('/login', data)

        localStorage.setItem('token', res.data.token)
        token()
        dispatch({
            type: LOGIN,
            payload: res.data.user
        })

        toast.success("Logado com sucesso")
        return history.push('/admin')
    } catch (error) {
        dispatch({ type: USER_ERROR })
        return toast.error("Email ou senha inválida")
    }
}

export const logout = history => async dispatch => {
    try {
        localStorage.removeItem('token')
        token()
        dispatch({ type: LOGOUT })
        toast.success("Saiu com sucesso")
        return history.push('/login')
    } catch (error) {
        dispatch({ type: USER_ERROR })
        return history.push('/login')
    }
}