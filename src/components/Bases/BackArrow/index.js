import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const BackArrow = ({ to, className }) => {
  return (
    <div className={`back_to_home ${className}`}>
      <Link to={to}>
        <i className="fas fa-arrow-left"></i>
      </Link>
    </div>
  )
}

Link.defaultProps = {
  to: '/',
  className: ''
}

export default BackArrow
