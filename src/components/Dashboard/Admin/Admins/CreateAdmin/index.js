import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

import { loadPrimary } from '../../../../../redux/actions/Auth/index'
import token from '../../../../../config/token'
import api from '../../../../../services/api'

import { Input, ButtonSubmit, Select, Form, CtnDashboard } from '../../../../Bases'

import './style.scss'

const CreateAdmin = ({ loadPrimary, history }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = data

    const [Role, setRole] = useState({ role: 'Primary' })
    const { role } = Role

    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        loadPrimary(history)
    }, [loadPrimary, history])

    const onChange = e => setData({...data, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault()
        
        if(!name || !password || !role || !email) return toast.error("Campo em branco")

        try {
            let data_body = {
                name,
                email,
                password,
                role
            }

             await api.post(`/admin`, data_body)

            toast.success("Cadastrado com sucesso")
            return history.push('/admin/admins')
        } catch (error) {
            if(error.response.status) return toast.error(error.response.data)
            return toast.error("Erro ao cadastrar novo usuário")
        }
    }

    return (
        <CtnDashboard className="wrapper_new_admin">
            <Form className="form_new_admin col-11 col-sm-12 col-md-11 col-lg-10 mx-auto" onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="form-group col-12 col-sm-12 col-md-6">
                        <label htmlFor="name">Nome:</label>
                        <Input
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
                        <Input
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
                        <Input
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
                        <Select id="role" className="form-control" onChange={(e) => setRole({ role: e.target.value })}>
                            <option value="Primary">Admin</option>
                            <option value="Secondary">Ajudante</option>
                        </Select>
                    </div>
                </div>
                <ButtonSubmit text="Cadastrar" />
            </Form>
        </CtnDashboard>
    )
}

const mapDispatchToProps = dispatch => ({
    loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(CreateAdmin))