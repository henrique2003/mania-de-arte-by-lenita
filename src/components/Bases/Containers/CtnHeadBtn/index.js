import React from 'react'

import './style.scss'

export default function CtnheadBtn({ children, className }) {
    return <div className={`base_head_btn ${className}`}>{children}</div>
}