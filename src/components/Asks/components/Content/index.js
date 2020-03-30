import React from 'react'

import SubTitle from './components/SubTitle'
import ParagrathAsks from './components/ParagrathAsks'

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