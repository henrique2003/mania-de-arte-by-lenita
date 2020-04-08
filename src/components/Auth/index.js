import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../services/api'

import './style.scss'

const Auth = ({ history }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [FormData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = FormData

    const onChange = e => setFormData({...FormData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()

        let res = await api.post('/auth', FormData)

        localStorage.setItem('token', res.data.token)
        localStorage.setItem('name', res.data.user.name)

        history.push('/admin')
    }

        return (
            <div className="wrapper_auth">
                <h4>Acesso admin:</h4>
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
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }

    export default withRouter(Auth)