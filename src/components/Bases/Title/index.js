import React from 'react';
import './style.scss';

const Title = ({ text }) => {
    return (
        <h4 className="col-12 col-sm-12 col-md-9 col-lg-7 mx-auto text-center base_title">{text}</h4>
    )
}

export default Title