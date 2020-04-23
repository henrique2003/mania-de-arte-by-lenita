import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { CtnDashboard, Form, Input, Select } from '../../../../Bases'
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
    cost: 0
  })

  const { title, cost } = FormData

  return (
    <CtnDashboard className="wrapper_create_product">
      <Form className="col-11 col-sm-11 col-md-10 mx-auto">
        <div className="form-row">
          <div className="form-group col-12 col-sm-12 col-md-6">
            <label htmlFor="title">Título</label>
            <Input type="text" id="title" name="title" value={title} />
          </div>
          <div className="form-group col-12 col-sm-12 col-md-6">
            <label htmlFor="cost">Custo</label>
            <Input type="text" id="cost" name="cost" value={cost} />
          </div>
        </div>
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