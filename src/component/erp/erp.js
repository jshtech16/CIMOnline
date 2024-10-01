import React from "react";
import setLanguage from "../../utils/setLanguage";
import './erp.css';

function ERP() {
    const lang = setLanguage();
    return (
        <div className="container">
            <div className="w-100  bg-primary erp-container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 text-center mt-5">
                        <img src='/assets/img/ERP-logo.png' alt="ERP-logo" className="w-100 w-md-50" />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 mt-5">
                        <h2 className="text-light text-center fw-bold">{lang.erp.title}</h2>
                        <div className="d-flex justify-content-center align-items-center">
                            <p className="fontfamily-Inter fs-18 fontw-400 lh-30 text-light pt-3 pb-3 ps-2 pe-2 erp-body">
                                {lang.erp.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ERP;