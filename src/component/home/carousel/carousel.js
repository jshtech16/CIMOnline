import React from "react";
import setLanguage from "../../../utils/setLanguage";
import "./carousel.css";

function Carousel() {
    const lang = setLanguage();

    const scrollToBtm = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }

    return (
        <div className="home-carousel">
            <div id="carouselCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        lang.home.carousel.title.map((ele, idx) => {
                            return (
                                <div className={"carousel-item " + (idx === 0 ? 'active' : null)} id={"carousel-item" + (idx + 1)} key={idx}>
                                    <div className={"d-block w-100 main-carousel main-carousel" + (idx + 1)}></div>
                                    <div className="carousel-caption">
                                        <h2>{ele}</h2>
                                        {
                                            lang.home.carousel.body[idx].map((element, i) => {
                                                return (
                                                    <div className="position-relative" key={i}>
                                                        {
                                                            idx === 0 || idx === 3 ?
                                                                <span className="fa fa-check position-absolute pt-1 pe-3" style={{ left: '-20px' }}></span>
                                                                :
                                                                null
                                                        }
                                                        <h4 className="mb-0">{element}</h4>
                                                    </div>
                                                )
                                            })
                                        }
                                        <p className="border-bottom w-fit mt-3">{lang.home.carousel.tryit}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <h5 className="scrolldown text-light cursor-pointer" onClick={() => scrollToBtm()}>
                        {lang.home.carousel.scrolldown}&nbsp;&nbsp;&nbsp;<span className="fa fa-arrow-down"></span>
                    </h5>

                    <h5 className="carousel-nextslide text-light cursor-pointer" data-bs-target="#carouselCaptions" data-bs-slide="next">
                        <span className="fa fa-arrow-right"></span>
                    </h5>
                </div>
                <div className="carousel-indicators d-flex justify-content-between w-100 m-0">
                    {
                        lang.home.carousel.title.map((ele, idx) => {
                            return (
                                <h5 className={"carousel-subIndicator text-primary " + (idx === 0 ? 'active' : null)} data-bs-target="#carouselCaptions" data-bs-slide-to={idx} aria-label={"Slide " + (idx + 1)} aria-current={idx === 0 ? "true" : null} key={idx}>
                                    {ele}
                                </h5>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Carousel;