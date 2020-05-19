import React from 'react'

import './style.scss'

export default function Submit({ text, className }) {
    return <button type="submit" className={`base_btn_submit + ${className}`}>{text}</button>
}