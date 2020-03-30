import React, { useEffect } from 'react'
import Introdution from './components/Introdution'
import AboutMe from './components/AboutMe'
import SomeProducts from './components/SomeProducts'
import Features from '../Home/components/Features'

//Icons of features
import Art from '../../utils/icons/art.png'
import Present from '../../utils/icons/present.png'
import Truck from '../../utils/icons/truck.png'

import './style.scss'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="wrapper_home">
            <Introdution />
            <AboutMe />
            <div className="row my-md-5 pt-md-4 my-lg-0 pt-lg-0">
                <Features
                    img={Art}
                    paragrath="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum.Lorem ipsum dolor sit."
                />
                <Features
                    img={Truck}
                    paragrath="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum.Lorem ipsum dolor sit."
                />
                <Features
                    img={Present}
                    paragrath="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum.Lorem ipsum dolor sit."
                />
            </div>
            <SomeProducts />
        </div>
    )
}

export default Home;