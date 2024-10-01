import React from "react";
import setLanguage from "../../../utils/setLanguage";
import './carousel.css';

function Carousel() {
    const lang = setLanguage();
    const scrollToBtm = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }
    return (
        <div className="o365-carousel-container">
            <img src="/assets/img/carousel/6.png" alt="carousel-6" className="w-100" />
            <h2 className="o365-carousel-content mb-0">{lang.o365.carousel.content}</h2>
            <h5 className="o365-carousel-scroll" onClick={() => scrollToBtm()}>{lang.o365.carousel.scroll}&nbsp;&nbsp;&nbsp;<span className="fa fa-arrow-down"></span></h5>
        </div>
    )
}

export default Carousel;