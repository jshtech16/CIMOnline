import React from "react";
import { Link } from "react-router-dom";
import setLanguage from "../../utils/setLanguage";
import './price.css';

function Price() {
    const lang = setLanguage();
    return (
        <div className="container">
            <div className="price-content">
                <h2 className="text-primary text-center fw-bold"> {lang.price.title} </h2>
                <h4 className="text-center text-gray mt-2"> {lang.price.subtitle} </h4>
                <div className="d-flex justify-content-center mt-4 gap-4">
                    <h4 className="text-primary mb-0 d-flex justify-content-center align-items-center">{lang.price.toggleLeft}</h4>
                    <div className="form-check form-switch">
                        <input className="form-check-input cursor-pointer" type="checkbox" id="mySwitch" value="no" />
                    </div>
                    <h4 className="text-primary mb-0 d-flex justify-content-center align-items-center"> {lang.price.toogleRight} </h4>
                </div>
                <div className="d-flex justify-content-between price-container mt-5">
                    <div className="price-chd-container bg-white p-5 mt-5 mb-5 d-flex justify-content-between flex-column">
                        <div>
                            <h4 className="text-gray mb-0">{lang.price.basis.header}</h4>
                            <h3 className="text-primary fw-bold mb-0 mt-4"> {lang.price.basis.title} </h3>
                            <h5 className="text-gray mt-3 mb-0">{lang.price.basis.comment[0]}</h5>
                            <h5 className="text-gray mb-0">{lang.price.basis.comment[1]}</h5>
                            <div className="d-flex align-items-end mt-4">
                                <h2 className="text-primary fw-bold mb-0"><span className="fa fa-eur"></span>&nbsp;25&nbsp;</h2>
                                <h4 className="text-gray mb-0">{lang.price.basis.for}</h4>
                            </div>
                            <h4 className="text-primary fw-bold mt-2 mb-0"> {lang.price.basis.featuretitle} </h4>
                            <h5 className="text-primary mb-0"><span className="fa fa-check-circle"></span>{lang.price.basis.featurecontent[0]}</h5>
                            <h5 className="text-primary mb-0"><span className="fa fa-check-circle"></span>{lang.price.basis.featurecontent[1]}</h5>
                            <h5 className="text-primary mb-0"><span className="fa fa-check-circle"></span>{lang.price.basis.featurecontent[2]}</h5>
                            <h5 className="text-primary mb-0"><span className="fa fa-check-circle"></span>{lang.price.basis.featurecontent[3]}</h5>
                            <h5 className="text-primary mb-0"><span className="fa fa-check-circle"></span>{lang.price.basis.featurecontent[4]}</h5>
                            <h5 className="text-primary mb-0"><span className="fa fa-check-circle"></span>{lang.price.basis.featurecontent[5]}</h5>
                            <h5 className="text-primary mt-5 mb-5"> {lang.price.basis.footer}  <span className="fa fa-eur"></span>&nbsp;0,45</h5>
                        </div>
                        <Link to='/tryfree'>
                            <button className="btn btn-primary w-100 w-min-0">Let's start</button>
                        </Link>
                    </div>
                    <div className="price-chd-container p-5 bg-primary d-flex justify-content-between flex-column">
                        <div className="text-light">
                            <h4 className="mb-0">{lang.price.pro.header}</h4>
                            <h3 className="fw-bold mb-0 mt-4">{lang.price.pro.title}</h3>
                            <h5 className="mt-3 mb-0">{lang.price.pro.comment[0]}</h5>
                            <h5 className="mb-0">{lang.price.pro.comment[1]}</h5>
                            <h5 className="mb-0">{lang.price.pro.comment[2]}</h5>
                            <h5 className="mb-0">{lang.price.pro.comment[3]}</h5>
                            <div className="d-flex align-items-end mt-4">
                                <h2 className="fw-bold mb-0"><span className="fa fa-eur"></span>&nbsp;45&nbsp;</h2>
                                <h4 className="mb-0">{lang.price.pro.for}</h4>
                            </div>
                            <h4 className="fw-bold mt-2 mb-0"> {lang.price.pro.featuretitle} </h4>
                            <h5 className="mb-0"><span className="fa fa-check-circle"></span>{lang.price.pro.featurecontent[0]}</h5>
                            <h5 className="mb-0"><span className="fa fa-check-circle"></span>{lang.price.pro.featurecontent[1]}</h5>
                            <h5 className="mb-0"><span className="fa fa-check-circle"></span>{lang.price.pro.featurecontent[2]}</h5>
                            <h5 className="mb-0"><span className="fa fa-check-circle"></span>{lang.price.pro.featurecontent[3]}</h5>
                            <h5 className="mb-0"><span className="fa fa-check-circle"></span>{lang.price.pro.featurecontent[4]}</h5>
                            <h5 className="mb-0"><span className="fa fa-check-circle"></span>{lang.price.pro.featurecontent[5]}</h5>
                            <h5 className="mt-5 mb-0">{lang.price.pro.footer[0]}<span className="fa fa-eur"></span>&nbsp;0,45</h5>
                            <h5 className="mb-0">{lang.price.pro.footer[1]}<span className="fa fa-eur"></span>&nbsp;0,38</h5>
                            <h5 className="mb-5">{lang.price.pro.footer[2]}<span className="fa fa-eur"></span>&nbsp;0,29</h5>
                        </div>
                        <Link to='#'>
                            <button className="btn btn-primary bg-white text-primary w-100 w-min-0">Let's start</button>
                        </Link>
                    </div>
                    <div className="price-chd-container p-5 bg-white mt-5 mb-5 d-flex justify-content-between flex-column">
                        <div>
                            <h4 className="text-gray mb-0">{lang.price.talk.header}</h4>
                            <h3 className="text-primary fw-bold mb-0 mt-4"> {lang.price.talk.title} </h3>
                            <h4 className="text-primary fw-bold mt-2 mb-0"> {lang.price.talk.featuretitle} </h4>
                            <h5 className="text-primary mb-0"><span className="fa fa-check-circle"></span>{lang.price.talk.featurecontent[0]}</h5>
                            <h5 className="text-primary mb-0"><span className="fa fa-check-circle"></span>{lang.price.talk.featurecontent[1]}</h5>
                            <h5 className="text-primary mb-0"><span className="fa fa-check-circle"></span>{lang.price.talk.featurecontent[2]}</h5>
                            <h5 className="text-primary mb-0"><span className="fa fa-check-circle"></span>{lang.price.talk.featurecontent[3]}</h5>
                            <h5 className="text-primary mb-0"><span className="fa fa-check-circle"></span>{lang.price.talk.featurecontent[4]}</h5>
                            <h5 className="text-primary mb-0"><span className="fa fa-check-circle"></span>{lang.price.talk.featurecontent[5]}</h5>
                        </div>
                        <Link to='#' className="mt-5">
                            <button className="btn btn-primary w-100 w-min-0">Let's start</button>
                        </Link>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Price;