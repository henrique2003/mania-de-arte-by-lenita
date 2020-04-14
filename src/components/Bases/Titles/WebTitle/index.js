import React from 'react'

import titlelize from '../../../../utils/scripts/titleize'

import './style.scss'

const WebTitle = ({ text }) =>
    <h4 
    className="col-12 col-sm-12 col-md-9 col-lg-7 mx-auto text-center base_title_web"
    >{titlelize(text)}
    </h4>

export default WebTitle