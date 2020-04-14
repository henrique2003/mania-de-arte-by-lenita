import React from 'react'

import './style.scss'

export default function Input({ type, id, name, value, placeholder, onChange, className }) {
    return (
        <input
            className={`form-control base_input ${className}`}
            type={type} 
            id={id}
            name={name} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
        />
    )
}

Input.defaulrProps = {
    type: 'text',
    id: '',
    value: '',
    name: '',
    placeholder: '',
    onChange: ''
}