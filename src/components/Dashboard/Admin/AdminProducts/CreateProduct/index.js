import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { CtnDashboard, Form, Input, Select, ButtonSubmit } from '../../../../Bases'
import { loadPrimary } from '../../../../../redux/actions/Auth'
import token from '../../../../../config/token'

function AdminCreateProduct({ user, history, loadPrimary }) {
  useEffect(() => {
    window.scrollTo(0, 0)
    token()
    loadPrimary(history)
  }, [loadPrimary, history])

  const [FormData, setFormData] = useState({
    title: '',
    cost: '',
    description: '',
    role: ''
  })

  const { title, cost, description } = FormData

  const onChange = e => setFormData({ ...FormData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()

    console.log(FormData)
  }

  return (
    <CtnDashboard className="wrapper_create_product">
      <Form className="col-11 col-sm-11 col-md-10 mx-auto" onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group col-12">
            <label htmlFor="title">Título</label>
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
            <label htmlFor="cost">Custo</label>
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
            <Select id="role" className="form-control" onChange={onChange}>
              <option value="">Selecione um tipo</option>
              <option value="crochet">Crochet</option>
              <option value="madeira">Madeira</option>
            </Select>
          </div>
          <div className="form-group col-12 col-sm-12 col-md-6">
            <label htmlFor="description">Descrição</label>
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
        <ButtonSubmit text="Cadastrar" />
      </Form>
    </CtnDashboard>
  )
}

const mapDispatchToProps = dispatch => ({
  loadPrimary: (history) => dispatch(loadPrimary(history))
})

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminCreateProduct))