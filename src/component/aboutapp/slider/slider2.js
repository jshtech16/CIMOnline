import React from "react";
import setLanguage from "../../../utils/setLanguage";

function Slide2() {
    const lang = setLanguage();
    return (
        <div className="container">
            <div className="bg-primary slide-container row">
            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 mt-5 position-relative d-flex">
                    <div id="cim-app-slide2" className="app-slider carousel slide" data-bs-interval="20000" data-bs-ride="carousel">
                        

                        <div className="carousel-inner">
                            {
                                lang.aboutapp.slide2.title.map((ele, idx) => {
                                    return (
                                        <div className={"carousel-item " + (idx === 0 ? 'active' : null)} key={idx}>
                                            <h2 className="text-light fw-bold text-center">{ele}</h2>
                                            <h5 className="text-light mt-4">{lang.aboutapp.slide2.content[idx]}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="carousel-indicators slide2 app-slider-indicator">
                            <div data-bs-target="#cim-app-slide2" data-bs-slide-to="0" className="app-slider-subindicator active">
                                <div className="carousel-indicators-max">
                                    <span className="fa fa-circle text-light d-flex justify-content-center align-items-center"></span>
                                    <p className="text-light ps-1 mt-1 mb-0 d-flex justify-content-center align-items-center">1</p>
                                </div>
                                <div className="carousel-indicators-min text-light">
                                    <p>1/4</p>
                                </div>
                            </div>
                            <div data-bs-target="#cim-app-slide2" data-bs-slide-to="1" className="app-slider-subindicator">
                                <div className="carousel-indicators-max">
                                    <span className="fa fa-circle text-light d-flex justify-content-center align-items-center"></span>
                                    <p className="text-light ps-1 mt-1 mb-0 d-flex justify-content-center align-items-center">2</p>
                                </div>
                                <div className="carousel-indicators-min text-light">
                                    <p>2/4</p>
                                </div>
                            </div>
                            <div data-bs-target="#cim-app-slide2" data-bs-slide-to="2" className="app-slider-subindicator">
                                <div className="carousel-indicators-max">
                                    <span className="fa fa-circle text-light d-flex justify-content-center align-items-center"></span>
                                    <p className="text-light ps-1 mt-1 mb-0 d-flex justify-content-center align-items-center">3</p>
                                </div>
                                <div className="carousel-indicators-min text-light">
                                    <p>3/4</p>
                                </div>
                            </div>
                            <div data-bs-target="#cim-app-slide2" data-bs-slide-to="3" className="app-slider-subindicator">
                                <div className="carousel-indicators-max">
                                    <span className="fa fa-circle text-light d-flex justify-content-center align-items-center"></span>
                                    <p className="text-light ps-1 mt-1 mb-0 d-flex justify-content-center align-items-center">4</p>
                                </div>
                                <div className="carousel-indicators-min text-light">
                                    <p>4/4</p>
                                </div>
                            </div>
                        </div>

                        <div className="app-slide-indicator-arrow w-100">
                            <div className="position-relative d-flex justify-content-center gap-4">
                                <button className="text-light bg-transparent w-min-0" type="button" data-bs-target="#cim-app-slide2" data-bs-slide="prev">
                                    <span className="fa fa-arrow-left"></span>
                                </button>
                                <button className="text-light bg-transparent w-min-0" type="button" data-bs-target="#cim-app-slide2" data-bs-slide="next">
                                    <span className="fa fa-arrow-right"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 mt-5 d-flex justify-content-center align-items-center text-center">
                    <img src='/assets/img/slider2.jpg' alt="slider2" className="w-75 mx-auto" />
                </div>
            </div>
        </div>
    )
}

export default Slide2;