import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import { login } from '../../redux/actions/Auth'

import Error from '../Bases/Error'

import './style.scss'

const Auth = ({ history, login }) => {
    useEffect(() => window.scrollTo(0, 0), [])

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

    return (
        <div className="wrapper_auth">
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

export default connect(null, { login })(withRouter(Auth))