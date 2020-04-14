import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

function LinkBgWhite({ text, path, className }) {
    return (
        <Link className={`link_bg_white ${className}`} to={path}>
            {text}
        </Link>
    )
}

LinkBgWhite.defaultProps = {
    text: 'lorem ipsum',
    path: null,
    className: ''
}

export default LinkBgWhite