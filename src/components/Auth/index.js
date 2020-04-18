import React, { useEffect, useState } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import { login, load } from '../../redux/actions/Auth'
import token from '../../config/token'

import { Error } from '../Bases'

import './style.scss'

const Auth = ({ user, load, history, login }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        load()
    }, [load])

    const [FormData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState({
        show: false,
        message: ''
    })

    const { show, message } = error
    const { email, password } = FormData

    const onChange = e => setFormData({ ...FormData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()

        if (!email || !password) setError({ show: true, message: "Campo em branco" })
        setError({ show: false })

        return login(FormData, history)
    }

    if(user) return <Redirect to="/admin" />
    return (
        <div className="wrapper_auth">
            <div className="back_to_home">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                </Link>
            </div>
            <div className="wrapper_auth_form">
                <h4>Acesso admin:</h4>
                {show && <Error text={message} />}
                <form onSubmit={onSubmit}>
                    <div className="form-group col-12">
                        <label>Email:</label>
                        <input
                            type="text"
                            placeholder="Exemplo: email@gmail.com"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required={true}
                        />
                    </div>
                    <div className="form-group col-12">
                        <label>Senha:</label>
                        <input
                            type="password"
                            placeholder="Exemplo: senha123"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChange}
                            required={true}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    login: (data, history) => dispatch(login(data, history)),
    load: () => dispatch(load())
})

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth))