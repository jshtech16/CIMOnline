import React from "react";
import setLanguage from "../../utils/setLanguage";
import './carousel.css';

function Carousel() {
    const lang = setLanguage();

    const partnerScrollToBtm = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }

    return (
        <div className="position-relative partner-carousel">
            <h4 className="partner-scroll cursor-pointer text-light" onClick={() => partnerScrollToBtm()}>{lang.partner.main.scroll}&nbsp;&nbsp;&nbsp;<span className="fa fa-arrow-down"></span></h4>
            <div className="partner-text">
                <h1 className="text-light">{lang.partner.main.title}</h1>
                <h4 className="text-light cursor-pointer border-bottom w-fit">{lang.partner.main.footer}</h4>
            </div>
        </div>
    )
}

export default Carousel;