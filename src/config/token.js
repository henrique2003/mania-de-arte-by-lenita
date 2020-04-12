import api from '../services/api'

const token = () => {
    if(localStorage.token) {
        return api.defaults.headers.common['Authorization'] = localStorage.token
    }
    else {
        delete api.defaults.headers.common['Authorization']
    }
}

export default token