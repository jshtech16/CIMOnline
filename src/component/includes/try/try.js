import React from "react";
import setLanguage from "../../../utils/setLanguage";
import './try.css';

function Try() {
    const lang = setLanguage();
    return (
        <div className="container">
            <div className="row try-container">
                <div className="col-lg-6 col-md-12 col-sm-12 text-start ps-0 pe-0">
                    <h2 className="text-light fw-bold">{lang.home.reviews.tryfree.title}</h2>
                    <h5 className="text-light">{lang.home.reviews.tryfree.content}</h5>
                    <button className="btn try-btn pt-3 pb-3 ps-5 pe-5 mt-3 w-min-0">{lang.home.reviews.tryfree.button}</button>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-3">
                    <img src='/assets/img/model.png' alt="model" className="w-50" />
                </div>
            </div>
        </div>
    )
}

export default Try;