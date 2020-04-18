import React from 'react'
import './style.scss'

export default function RequestItemInfo({ text }) {
  return (
    <div className="col-6">
      <p className="request_item_info">{text}</p>
    </div>
  )
}
