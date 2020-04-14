import React from 'react'
import './style.scss'

export default function HeadAdmin({ children }) {
    return (
        <div className="head_admin">
            {children}
        </div>
    )
}