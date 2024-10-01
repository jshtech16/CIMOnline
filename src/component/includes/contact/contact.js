import React from "react";
import setLanguage from "../../../utils/setLanguage";

function Contact() {
    const lang = setLanguage();
    return (
        <div className="container">
            <div className="text-center bg-secondary w-100" style={{marginTop: '75px', borderRadius: '40px', padding: '20px 40px 60px 40px'}}>
                <h5 className="text-primary w-100 text-end">
                    <span className="border-bottom border-primary">{lang.includes.contact.header}</span>
                </h5>
                <h2 className="text-primary text-center fw-bold">{lang.includes.contact.title}</h2>
                <h4 className="text-gray text-center">{lang.includes.contact.subtitle}</h4>
                <div className="row w-75 mx-auto">
                    <div className="row text-start">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-3">
                            <h5 className="fw-bold text-primary"><span className="fa fa-envelope-o"></span></h5>
                            <h5 className="fw-bold text-primary"> {lang.includes.contact.mail[0]}</h5>
                            <h5 className="text-gray"> {lang.includes.contact.mail[1]}</h5>
                            <h5 className="fw-bold text-primary"> {lang.includes.contact.mail[2]}</h5>
                            <h5 className="fw-bold text-primary"> {lang.includes.contact.mail[3]}</h5>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-3">
                            <h5 className="fw-bold text-primary"><span className="fa fa-map-marker"></span></h5>
                            <h5 className="fw-bold text-primary"> {lang.includes.contact.visit[0]}</h5>
                            <h5 className="fw-bold text-primary">{lang.includes.contact.visit[2]}</h5>
                            <h5 className="fw-bold text-primary">{lang.includes.contact.visit[3]}</h5>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-3">
                            <h5 className="fw-bold text-primary"><span className="fa fa-phone" style={{ transform: "ratate(90deg)" }}></span></h5>
                            <h5 className="fw-bold text-primary">{lang.includes.contact.call[0]}</h5>
                            <h5 className="text-gray">{lang.includes.contact.call[1]}</h5>
                            <h5 className="fw-bold text-primary"><a href="tel:+31 76 5729999">+31 76 5729999</a></h5>
                            <h5 className="fw-bold text-primary"><a href="tel:+31 76 5717770">+31 76 5717770</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;