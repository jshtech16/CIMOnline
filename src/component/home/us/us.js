import React from "react";
import setLanguage from "../../../utils/setLanguage";
import './us.css';

function Us() {
    const lang = setLanguage();
    return (
        <div className="bg-primary home-aboutus-container">
            <div className="container">
                <div className="home-aboutus-content bg-secondary">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-end order-2 order-lg-1 order-md-2 order-sm-2 order-xs-2 mt-0 mt-md-50">
                            <img src='/assets/img/aboutus.jpg' alt="aboutus" className="w-100" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 text-start order-1 order-lg-2 order-md-1 order-sm-1 order-xs-1">
                            <div className="ps-3 pe-3">
                                <h2 className="text-primary text-center">{lang.home.us.title}</h2>
                                <h5 className="text-primary">{lang.home.us.content[0]}</h5>
                                <h5 className="text-primary">{lang.home.us.content[1]}</h5>
                                <h5 className="text-primary w-fit border-bottom border-primary mt-4">{lang.home.us.footer}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Us;