import React from 'react'
import './style.scss'

export default function CtnHeadDashboard({ children, className }) {
    return (
        <div className={`base_head_dashboard ${className}`}>
            {children}
        </div>
    )
}