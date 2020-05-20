import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CtnDashboard, Form, Input, Select, ButtonSubmit, BackArrow } from '../../../../Bases'
import { loadPrimary } from '../../../../../redux/actions/Auth'
import token from '../../../../../config/token'



import './style.scss'
import api from '../../../../../services/api'

function AdminCreateProduct({ history, loadPrimary }) {
  useEffect(() => {
    window.scrollTo(0, 0)
    token()
    loadPrimary(history)
  }, [loadPrimary, history])

  const [FormData, setFormData] = useState({
    title: '',
    cost: '',
    description: ''
  })

  const [Role, setRole] = useState({ role: '' })

  const { title, cost, description } = FormData
  const { role } = Role

  const onChange = e => setFormData({ ...FormData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()

    if (!title || !cost || !description || !role) {
      return toast.error('Campo em branco')
    }

    if (role !== 'crochet' && role !== 'madeira') {
      return toast.error('Tipo do produto inválido')
    }

    const product = Object.assign({}, FormData, { cost: cost.replace(',', '.'), role })

    try {
      const res = await api.post('/products', product)

      return history.push(`/admin/editar/produto/imagem/${res.data._id}`)
    } catch (error) {
      toast.error(error.response.data)
    }
  }

  return (
    <CtnDashboard className="wrapper_create_product">
      <BackArrow to="/admin/produtos" />
      <Form className="col-11 col-sm-11 col-md-10 mx-auto mt-3" onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group col-12">
            <label htmlFor="title">Título:</label>
            <Input
              type="text"
              id="title"
              name="title"
              value={title}
              placeholder="Ex: Produto 1"
              onChange={onChange}
            />
          </div>
          <div className="form-group col-12 col-sm-12 col-md-6">
            <label htmlFor="cost">Custo:</label>
            <Input
              type="number"
              name="cost"
              value={cost}
              placeholder="Ex: 12.80"
              onChange={onChange}
            />
          </div>
          <div className="form-group col-12 col-sm-12 col-md-6">
            <label htmlFor="role">Tipo:</label>
            <Select
              id="role"
              name="role"
              className="form-control"
              onChange={(e) => setRole({ role: e.target.value })}
            >
              <option value="">Selecione um tipo</option>
              <option value="crochet">Crochet</option>
              <option value="madeira">Madeira</option>
            </Select>
          </div>
          <div className="form-group col-12">
            <label htmlFor="description">Descrição:</label>
            <textarea
              id="description"
              name="description"
              value={description}
              className="form-control"
              placeholder="Ex: feito com madeira macissa, polido em casa."
              onChange={onChange}
            ></textarea>
          </div>
        </div>
        <div className="text-right mt-md-2 mt-lg-3">
          <ButtonSubmit text="Avançar" />
        </div>
      </Form>
    </CtnDashboard>
  )
}

const mapDispatchToProps = dispatch => ({
  loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(AdminCreateProduct))