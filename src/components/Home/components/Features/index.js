import React from 'react'

import './style.scss'

const Features = ({ img, paragrath }) => {
    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="feature">
                <div>
                    <img src={img} alt={paragrath} className="img-fluid"/>
                </div>
                <p>{paragrath}</p>
            </div>
        </div>
    )
}

export default Features