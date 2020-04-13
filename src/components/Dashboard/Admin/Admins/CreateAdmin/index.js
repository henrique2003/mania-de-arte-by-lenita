import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

import { loadPrimary } from '../../../../../redux/actions/Auth/index'
import token from '../../../../../config/token'
import api from '../../../../../services/api'

import './style.scss'

const CreateAdmin = ({ loadPrimary, history }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    })
    const { name, email, password } = data

    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        loadPrimary(history)
    }, [loadPrimary, history])

    const onChange = e => setData({...data, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault()
        // try {
        //     let res = await api.post(`/admin`, data)

        //     toast.success("Cadastrado com sucesso")
        //     return history.push('/admin/admins')
        // } catch (error) {
        //     return toast.error("Erro ao cadastrar novo usuário")
        // }
    }

    return (
        <div className="wrapper_new_admin">
            <form className="form_new_admin col-11 col-sm-12 col-md-11 col-lg-10 mx-auto" onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="form-group col-12 col-sm-12 col-md-6">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Exemplo: Henrique de Melo"
                            onChange={onChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-6">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Exemplo: henrique@gmail.com"
                            onChange={onChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-6">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Exemplo: henrique123"
                            onChange={onChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-6">
                        <label htmlFor="role">Função:</label>
                        <select id="role" className="form-control" onChange={onChange}>
                            <option value="Primary">Admin</option>
                            <option value="Secondary">Ajudante</option>
                        </select>
                    </div>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(CreateAdmin))