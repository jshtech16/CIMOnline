import React from "react";
import setLanguage from "../../../utils/setLanguage";
import './bepartner.css';

function BePartner() {
    const lang = setLanguage();
    return (
        <div className="container bepartner-container text-center">
            <h2 className="text-primary">
                {
                    lang.home.reviews.partner.title.map((ele, idx) => {
                        return (
                            <font key={idx}>
                                {
                                    ele.flg ? <span className="text-blue">{ele.text}</span> : ele.text
                                }
                            </font>
                        )
                    })
                }
            </h2>
            <h4 className="text-primary">{lang.home.reviews.partner.content}</h4>
            <button className="w-50 w-md-100 btn btn-primary mt-5 pt-3 pb-3">{lang.home.reviews.partner.button}</button>
        </div>
    )
}

export default BePartner;