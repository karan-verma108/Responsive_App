import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center mt-5'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.title} <strong>KodeWithKaran</strong></h1>
                                    <h2>We are a team of talented developers creating websites.</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className='btn btn-info'>{props.btn_name}</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2">
                                    <img className='img-fluid animated' src={props.imgsrc} alt="headerImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Common