import React from 'react'

import './style.scss'

function ButtonBgWhite({ text, action, className }) {
    return (
        <button
            type="button"
            className={`button_bg_white ${className}`}
            onClick={() => action()}>
            {text}
        </button>
    )
}

ButtonBgWhite.defaultProps = {
    text: 'lorem ipsum',
    action: null,
    link: null,
    className: ''
}

export default ButtonBgWhite