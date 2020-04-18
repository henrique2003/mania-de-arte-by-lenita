import React from 'react'
import { editDate } from '../../../../utils'

import RequestItemInfo from './RequestItemInfo'

import './style.scss'

function RequestItem({ request, onClick }) {
  const { _id, title, quantify, color, createAt, user } = request
  const { name, zip_code, state, city, neighborhood, street, number, complement } = user

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-3">
      <div className="request_item">
        <div className="row">
          {/* Products informatio */}
          <RequestItemInfo text="Produto" value={title} />
          <RequestItemInfo text="Quantidade" value={quantify} />
          <RequestItemInfo text="Cor" value={color} />
          <RequestItemInfo text="Pedido" value={editDate(createAt)} />
          <div className="request_item_border"></div>
          {/* User Information */}
          <RequestItemInfo text="Nome" value={name} />
          <RequestItemInfo text="CEP" value={zip_code} />
          <RequestItemInfo text="Estado" value={state} />
          <RequestItemInfo text="Cidade" value={city} />
          <RequestItemInfo text="Bairro" value={neighborhood} />
          <RequestItemInfo text="Rua" value={street} />
          <RequestItemInfo text="Número" value={number} />
          {complement && <RequestItemInfo text="Complemento" value={complement} />}
          {/* Delete */}
          <button type="button" onClick={onClick(_id)}>Resolver</button>
        </div>
      </div>
    </div>
  )
}

export default RequestItem

