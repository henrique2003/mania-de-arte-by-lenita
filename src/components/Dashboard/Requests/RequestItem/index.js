import React from 'react'
import { editDate } from '../../../../utils'

import RequestItemInfo from './RequestItemInfo'

import './style.scss'

function RequestItem({ request }) {
  const { title, quantify, color, createAt } = request

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-3">
      <div className="request_item">
        <div className="row">
          {/* <RequestItemInfo text={`Produto: ${title}`}/>
          <RequestItemInfo text={`Quantidade: ${quantify}`}/>
          <RequestItemInfo text={`Cor: ${color}`}/>
          <RequestItemInfo text={`Pedido em: ${editDate(createAt)}`}/>
          <RequestItemInfo text={`Nome: ${name}`}/>
          <RequestItemInfo text={`CEP: ${quantify}`}/>
          <RequestItemInfo text={`Cor: ${color}`}/>
          <RequestItemInfo text={`Pedido em: ${editDate(createAt)}`}/> */}
        </div>
      </div>
    </div>
  )
}

export default RequestItem

