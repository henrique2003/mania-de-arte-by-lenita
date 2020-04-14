import React from 'react'
import './style.scss'

export default function CtnDashboard({ children }) {
    return (
        <div className="base_ctn_dashborad">
            <div className="container-fluid">
                {children}
            </div>
        </div>
    )
}