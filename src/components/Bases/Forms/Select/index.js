import React from 'react'

import './style.scss'

export default function Select({ id, children, onChange, className }) {
    return (
        <select id={id} onChange={onChange} className={`base_select ${className}`}>
            {children}
        </select>
    )
}

Select.defaulrProps = {
    onChange: '',
    chieldren: '',
    id: ''
}
