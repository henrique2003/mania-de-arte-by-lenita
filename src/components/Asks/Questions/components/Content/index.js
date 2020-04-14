import React from 'react'

import { SubTitle, ParagrathAsks } from './components'

import './style.scss'

const Content = ({ subtitle, paragrath }) => {
    return (
        <div className="wrapper_content">
            <SubTitle subtitle={subtitle} />
            <ParagrathAsks paragrath={paragrath} />
        </div>
    )
}

export default Content