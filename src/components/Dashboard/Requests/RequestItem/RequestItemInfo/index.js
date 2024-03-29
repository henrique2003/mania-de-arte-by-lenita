import React from 'react'
import './style.scss'

export default function RequestItemInfo({ text, value }) {
  return (
    <div className="col-6">
      <p className="request_item_info"><span>{text}:</span><br className="d-block d-md-none" /> {value}</p>
    </div>
  )
}
