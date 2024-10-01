import React from "react";
import Faq from "../component/includes/faq/faq";
import Carousel from "../component/partnerup/carousel";
import ReviewList from "../component/includes/reviewlist/reviewlist";
import Contact from "../component/includes/contact/contact";
import Try from "../component/includes/try/try";
import PartnerUp from "../component/partnerup/partnerup";

function PartnerUpPage() {
    return (
        <>
            <Carousel />
            <PartnerUp />
            <Faq />
            <ReviewList />
            <Try />
            <Contact />
        </>
    )
}

export default PartnerUpPage;