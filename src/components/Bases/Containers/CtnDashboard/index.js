import React from 'react'
import './style.scss'

export default function CtnDashboard({ children, className }) {
    return (
        <div className={`base_ctn_dashborad ${className}`}>
            <div className="container-fluid">
                {children}
            </div>
        </div>
    )
}