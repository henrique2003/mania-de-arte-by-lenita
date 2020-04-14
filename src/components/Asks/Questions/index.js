import React from 'react'

import { Content, TitleAsks } from './components'

import './style.scss'

const Questions = ({ title }) => {
    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="wrapper_questions">
                <TitleAsks title={title} />
                <Content
                    subtitle="Como pagar?"
                    paragrath="Faça isso assim e assim e assim Faça isso assim e assim e assimFaça isso assim e assim e assim xsxsxsxsxsxs"
                />
                <Content
                    subtitle="Como pagar?"
                    paragrath="Faça isso assim e assim e assim Faça isso assim e assim e assimFaça isso assim e assim e assim xsxsxsxsxsxs"
                />
                <Content
                    subtitle="Como pagar?"
                    paragrath="Faça isso assim e assim e assim Faça isso assim e assim e assimFaça isso assim e assim e assim xsxsxsxsxsxs"
                />
            </div>
        </div>
    )
}

export default Questions