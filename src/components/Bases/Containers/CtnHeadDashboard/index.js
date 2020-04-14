import React from 'react'
import './style.scss'

export default function CtnHeadDashboard({ children }) {
    return (
        <div className="head_admin">
            <div className="container-fluid">
                {children}
            </div>
        </div>
    )
}