import React from "react";
import setLanguage from "../../utils/setLanguage";
import './cookie.css';

function Cook() {
    const lang = setLanguage();
    return (
        <div className="container">
            <div className="cookie-container">
                <h2 className="text-primary fw-bold">{lang.cookie.title}</h2>
                <h5 className="text-primary">{lang.cookie.content}</h5>
                <button className="btn btn-primary w-100 mt-3 mb-3">Agree!</button>
                {
                    lang.cookie.setting.map((ele, idx) => {
                        return (
                            <div className="d-flex border-bottom pt-4" key={idx}>
                                <div className="me-3 mt-2">
                                    <input type="checkbox" className="cursor-pointer" />
                                </div>
                                <div>
                                    <h4 className="text-primary fw-bold">{ele.title}</h4>
                                    <h5 className="mt-2 text-primary">{ele.content}</h5>
                                    <p className="text-primary">{ele.example}</p>
                                    <ul className="mt-2 text-primary">
                                        {
                                            ele.child.map((e, i) => {
                                                return (
                                                    <li className="mt-2" key={i}>{e}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cook;