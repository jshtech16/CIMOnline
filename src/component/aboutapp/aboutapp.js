import React from "react";
import setLanguage from "../../utils/setLanguage";
import './aboutapp.css';

function AboutApp() {
    const lang = setLanguage();
    return (
        <div className="bg-secondary text-center">
            <div className="container aboutapp-container">
                <h2 className="text-primary fw-bold">{lang.aboutapp.main.title}</h2>
                <h4 className="text-gray mt-3">{lang.aboutapp.main.subtitle}</h4>
                <img src='/assets/img/laptop1.png' alt="laptop1" className="w-50 w-md-100 mt-4" />
                <h6 className="mt-3 text-gray">{lang.aboutapp.main.footer}</h6>
            </div>
        </div>
    )
}

export default AboutApp;