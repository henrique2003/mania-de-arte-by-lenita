import React from 'react';
import Lenita from '../../../../utils/images/Home/lenita.jpg';
import Star from '../../../../utils/icons/star.png';
import './style.scss';

const Introdution = () => {
    return (
        <main className="text-center pt-4 pb-4 wrapper_home_introdution">
            <div className="mx-auto">
                <div className="col-8 col-sm-5 col-mg-4 col-lg-3 mx-auto mb-1">
                    <img src={Lenita} className="img-fluid" alt=""/>
                </div>
                <h3>Mania de Arte by Lenita</h3>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line mr-2"></div>
                    <span>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                    </span>
                    <br />
                    <div className="divider-custom-line ml-2"></div>
                </div>
            </div>
        </main>
    )
}

export default Introdution;