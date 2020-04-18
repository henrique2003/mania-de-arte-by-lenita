import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { load } from '../../redux/actions/Auth'
import token from '../../config/token'

import { Introdution, AboutMe, SomeProducts, Features } from './components'
//Icons of features
import { Art, Present, Truck } from '../../utils'

import './style.scss'

const Home = ({ load, user }) => {
    useEffect(() => {
        token()
        window.scrollTo(0, 0);
        load()
    }, [load]);
    
    if(user) return <Redirect to="/admin" />
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

const mapDispatchToProps = dispatch => ({
    load: () => dispatch(load())
})

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)