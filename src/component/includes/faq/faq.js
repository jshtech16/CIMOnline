import React, { useState } from "react";
import setLanguage from "../../../utils/setLanguage";
import './faq.css';

function Faq() {
    const lang = setLanguage();
    const [flg, setFlg] = useState([true, false, false, false, false])

    const setActiveFaq = (idx) => {
        var _selFlg = flg[idx];
        var _flg = [false, false, false, false, false];
        _flg[idx] = !_selFlg;
        setFlg(_flg);
    }

    return (
        <div className="container">
            <div className="faq-container row bg-secondary d-flex">
                <h2 className="col-xl-6 col-lg-4 col-md-12 text-primary fw-bold">FAQ</h2>
                <div className="col-xl-6 col-lg-8 col-md-12 faq-right-container">
                    <div id="faqAccordian">
                        {
                            lang.faq.subtitle.map((ele, idx) => {
                                return (
                                    <div className="card border-0 border-bottom border-primary" key={idx}>
                                        <div className="card-header position-relative bg-secondary border-0 position-relative">
                                            <a className="text-decoration-none d-flex justify-content-between pe-5" data-bs-toggle="collapse" href={"#collapse" + idx} aria-expanded="true" onClick={() => setActiveFaq(idx)}>
                                                <h5 className="text-primary me-2">0{idx + 1}</h5>
                                                <h5 className="text-primary">{ele}</h5>
                                            </a>
                                            <span className={"fa fa-arrow-right position-absolute " + (flg[idx] ? "d-none" : null)} style={{right: '12px', top: '12px'}}></span>
                                        </div>
                                        <div id={"collapse" + idx} className={"collapse bg-secondary " + (idx === 0 ? 'show':null)} data-bs-parent="#faqAccordian">
                                            <div className="card-body position-relative ps-5 pe-5">
                                                <h5 className="text-gray mb-0">{lang.faq.content[idx]}</h5>
                                                <span className="fa fa-arrow-down position-absolute" style={{right: '12px', top: '12px', opacity: '0.5'}}></span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;