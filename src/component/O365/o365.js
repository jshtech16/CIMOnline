import React from "react";
import setLanguage from "../../utils/setLanguage";
import './o365.css';

function O365() {
    const lang = setLanguage();

    const mergetoolImgs = [
        '/assets/img/ai-tech.png',
        '/assets/img/direct-inbox.png',
        '/assets/img/shopping-cart.png'
    ]

    return (
        <div>
            <div className="container">
                <div className="ms-container bg-primary">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-iteO365-center mt-4 order-2 order-lg-1 order-md-2 order-sm-2 order-xs-2 ">
                            <img src='/assets/img/ms.png' alt="ms" className="w-75" />
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex align-items-center mt-4 order-1 order-lg-2 order-md-1 order-sm-1 order-xs-1">
                            <div>
                                <h2 className="text-light fw-bold">{lang.o365.ms.title}</h2>
                                <h3 className="text-light">{lang.o365.ms.subtitle}</h3>
                                <h4 className="text-light">{lang.o365.ms.content}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="msdetail-container bg-secondary">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <h2 className="text-primary fw-bold">{lang.o365.msdetail.title}</h2>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {
                                lang.o365.msdetail.content.map((ele, idx) => {
                                    return (
                                        <div key={idx} className="mt-3">
                                            <span className="fa fa-arrow-right" style={{ rotate: "45deg", fontSize: "30px" }}></span>
                                            <h4 className="">{ele}</h4>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="mergetool-container bg-primary">
                    <div className="row">
                        {
                            mergetoolImgs.map((ele, idx) => {
                                return (
                                    <div className="col-lg-4 col-md-12 text-center" key={idx}>
                                        <img src={ele} alt="merge" className="mt-5" />
                                        <h5 className="text-light mt-3">{lang.o365.mergetool.content[idx]}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h5 className="w-100 text-center text-light mt-5">{lang.o365.mergetool.footer}</h5>
                </div>
            </div>

            <div className="container">
                <div className="tech-container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 d-flex align-items-center">
                            <div className="mb-4">
                                <h2 className="text-light fw-bold">{lang.o365.technical.title}</h2>
                                <h5 className="text-light">{lang.o365.technical.subtitle}</h5>
                                <ul>
                                    {
                                        lang.o365.technical.content.map((ele, idx) => {
                                            return (
                                                <li className="text-light" key={idx}>
                                                    <h5>{ele}</h5>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 text-center d-flex">
                            <div className="d-flex justify-content-between flex-column w-100">
                                <div></div>
                                <img src='/assets/img/notebook.png' alt="notebook" className="w-75 mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="o365-description-container">
                    <h3 className="text-primary fw-bold">
                        {
                            lang.o365.des.content.map((ele, idx) => {
                                return (
                                    <font key={idx}>
                                        {
                                            ele.flg ? <span className="text-blue">{ele.text}</span> : ele.text
                                        }
                                    </font>
                                )
                            })
                        }
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default O365;