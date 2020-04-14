import React from 'react'

import './style.scss'

export default function Form({ onSubmit, children, className }) {
    return (
        <form onSubmit={onSubmit} className={`base_form ${className}`}>
            {children}
        </form>
    )
}

Form.defaulrProps = {
    onSubmit: '',
    chieldren: ''
}