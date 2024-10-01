import React from "react";
import setLanguage from "../../utils/setLanguage";
import './aboutapp.css';

function Testerminal() {
    const lang = setLanguage();
    return (
        <div className="container">
            <div className="bg-primary testerminal-container">
                <h2>
                    <span className="fa fa-arrow-right text-blue" style={{rotate: '45deg'}}></span>
                </h2>
                <h4 className="text-light">{lang.aboutapp.tester.content}</h4>
            </div>
        </div>
    )
}

export default Testerminal;