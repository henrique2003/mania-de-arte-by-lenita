import React from 'react'

import './style.scss'

export default function Submit({ text }) {
    return <button type="submit" className="base_btn_submit">{text}</button>
}