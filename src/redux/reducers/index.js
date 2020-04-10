import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Auth from '../reducers/Auth'

const store = createStore(
    Auth,
    applyMiddleware(thunk)
)

export default store