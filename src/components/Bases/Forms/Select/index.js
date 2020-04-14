import React from 'react'

import './style.scss'

export default function Input({ id, children, onChange, className }) {
    return (
        <select id={id} onChange={onChange} className={`base_select ${className}`}>
            {children}
        </select>
    )
}

Input.defaulrProps = {
    onChange: '',
    chieldren: '',
    id: ''
}