import React from "react";
import setLanguage from "../../utils/setLanguage";
import './partnerup.css';

function PartnerUp() {
    const lang = setLanguage();
    return (
        <div className="container">
            <div className="partnerUp-container row bg-primary">
                <div className="col-lg-6 col-md-12 mt-5 order-2 order-lg-1 order-md-2 order-sm-2 order-xs-2 text-center">
                    <img className="w-75" src='/assets/img/img3.jpg' alt="img3" />
                </div>
                <div className="col-lg-6 col-md-12 mt-5 order-1 order-lg-2 order-md-1 order-sm-1 order-xs-1">
                    <h3 className="text-light">{lang.partner.network.title}</h3>
                    {
                        lang.partner.network.content.map((ele, idx) => {
                            return (
                                <h5 className="text-light mt-3" key={idx}>{ele}</h5>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PartnerUp;