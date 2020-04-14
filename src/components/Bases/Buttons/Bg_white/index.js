import React from 'react'

import { Link } from 'react-router-dom'

import './style.scss'

function Bg_white({ text, action, link }) {
    return <button
        type="button"
        className="button_bg_white"
        onClick={action}>
        {!link && text}
        {link && <Link to={link}>{text}</Link>}
    </button>
}

Bg_white.defaultProps = {
    text: 'lorem ipsum',
    action: null,
    link: null
}

export default Bg_white