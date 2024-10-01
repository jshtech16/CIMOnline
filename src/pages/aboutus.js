import React from "react";
import Aboutus from "../component/aboutus/aboutus";
import Faq from "../component/includes/faq/faq";
import BePartner from '../component/includes/bepartner/bepartner';
import Try from "../component/includes/try/try";

function AboutUsPage() {
    return (
        <>
            <Aboutus />
            <Faq />
            <Try />
            <BePartner />
        </>
    )
}

export default AboutUsPage;