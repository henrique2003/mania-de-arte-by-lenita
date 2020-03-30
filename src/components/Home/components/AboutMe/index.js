import React from 'react'
import About from '../../../../utils/images/Home/about.jpg'

import './style.scss'

const AboutMe = () => {
    return (
        <div className="wrapper_home_about_me my-0 my-sm-0 mb-md-4 my-md-0 my-lg-4">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
                    <h3 className="col-12">Sorbe mim</h3>
                    <p className="col-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo a, rerum nisi odit nesciunt iste deleniti ut, ratione esse fuga error, repudiandae officia! Doloribus laboriosam totam deserunt adipisci qui assumenda. Lorem ipsum. ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
                    <img src={About} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe