import React from "react";
import setLanguage from '../../utils/setLanguage';
import './aboutus.css';
import { Link } from "react-router-dom";

function Aboutus() {
    const lang = setLanguage();
    return (
        <div>
            <div className="container">
                <div className="aboutus-container">
                    <h2 className="text-primary text-center fw-bold">{lang.aboutus.main.title}</h2>
                    <h4 className="text-gray text-center">{lang.aboutus.main.subtitle}</h4>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mt-5 text-center">
                            <img src='/assets/img/aboutus.jpg' alt="aboutus" className="w-100" />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 aboutus-description">
                            <h5 className="text-primary fw-bold">{lang.aboutus.main.content.title[0]}</h5>
                            <h5 className="text-primary">{lang.aboutus.main.content.content[0]}</h5>
                            <h5 className="text-primary fw-bold">{lang.aboutus.main.content.title[1]}</h5>
                            <h5 className="text-primary">{lang.aboutus.main.content.content[1]}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="embrace-container bg-primary text-light row">
                    <div className="col-lg-6 col-md-12">
                        <h2 className="fw-bold">{lang.aboutus.carousel.title}</h2>
                    </div>
                    <div className="col-lg-6 col-md-12 position-relative">
                        <div id="embraceCarousel" className="carousel slide" data-bs-interval="15000" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {
                                    lang.aboutus.carousel.content.map((ele, idx) => {
                                        return (
                                            <div className={"carousel-item " + (idx === 0 ? 'active' : null)} key={idx}>
                                                {
                                                    ele.map((e, i) => {
                                                        return (
                                                            <h5 className="mb-0 text-start" key={i}>{e}</h5>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="carousel-indicators embrace-indicators-slide" style={{ bottom: '-50px' }}>
                                <div data-bs-target="#embraceCarousel" data-bs-slide-to="0" className="active"></div>
                                <div data-bs-target="#embraceCarousel" data-bs-slide-to="1"></div>
                                <div data-bs-target="#embraceCarousel" data-bs-slide-to="2"></div>
                                <div data-bs-target="#embraceCarousel" data-bs-slide-to="3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="aboutus-card-container bg-secondary">
                    <h4 className="text-primary">{lang.aboutus.des.content}</h4>
                </div>
            </div>

            <div className="container">
                <div className="aboutus-account-container bg-primary">
                    <h2 className="text-center fw-bold text-light">{lang.aboutus.account.title}</h2>
                    <h4 className="text-center text-blue mt-3 px-3">{lang.aboutus.account.content}</h4>
                    <div className="row">
                        <div className="col-lg-4 text-center mt-5">
                            <img src='/assets/img/Icon-user.png' alt="Icon-user" />
                            <h4 className="text-blue mt-3">{lang.aboutus.account.tags[0]}</h4>
                            <h4 className="mt-4 text-light">{lang.aboutus.account.tagDes[0]}</h4>
                        </div>
                        <div className="col-lg-4 text-center mt-5">
                            <img src='/assets/img/Icon-star.png' alt="Icon-star" />
                            <Link to='/reviews' className="text-decoration-none">
                                <h4 className="text-blue mt-3 cursor-pointer">{lang.aboutus.account.tags[1]}</h4>
                            </Link>
                            <h4 className="mt-4 text-light">{lang.aboutus.account.tagDes[1]}</h4>
                        </div>
                        <div className="col-lg-4 text-center mt-5">
                            <img src='/assets/img/Icon-msg.png' alt="Icon-msg" />
                            <Link to='/contact' className="text-decoration-none">
                                <h4 className="text-blue mt-3 cursor-pointer">{lang.aboutus.account.tags[2]}</h4>
                            </Link>
                            <h4 className="mt-4 text-light">{lang.aboutus.account.tagDes[2]}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;