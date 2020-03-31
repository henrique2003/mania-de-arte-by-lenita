import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../../utils/images/logo_footer.png'
import './style.scss'

const Footer = () => {
    return (
        <div className="wrapper_footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 wrapper_company">
                        <div className="wrapper_img_logo">
                            <img src={Logo} alt="" className="img-fluid" />
                        </div>
                        <p className="paragrath_img_logo">Os melhores artesanatos da atualidade</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <section className="wrapper_footer_navigation">
                            <li><h3>Paginas</h3></li>
                            <li><NavLink to="/madeiras">Madeiras</NavLink></li>
                            <li><NavLink to="/croche">Crochê</NavLink></li>
                            <li><NavLink to="/duvidas">Dúvidas</NavLink></li>
                        </section>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 wrapper_footer_social_media">
                        <section>
                            <li><h4>Contato</h4></li>
                            <a href="https://www.facebook.com/lenita.cristioglu" target="_blank" rel="noopener noreferrer">
                                <li>
                                    <i class="fab fa-facebook-square"></i>
                                    <span>lenita.cristioglu</span>
                                </li>
                            </a>
                            <a href="https://www.instagram.com/lenitacristioglu/" target="_blank" rel="noopener noreferrer">
                                <li>
                                    <i class="fab fa-instagram"></i>
                                    <span>@lenitacristioglu</span>
                                </li>
                            </a>
                        </section>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 wrapper_dev">
                        <h3>Feito por</h3>
                        <p>
                            <a href="https://henriquecristioglu.netlify.com/" target="_blank" rel="noopener noreferrer">Henrique Cristioglu</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer