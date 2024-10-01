import React from "react";
import AboutApp from "../component/aboutapp/aboutapp";
import Testerminal from "../component/aboutapp/testerminal";
import Use from "../component/includes/use/use";
import Slide1 from "../component/aboutapp/slider/slider1";
import Slide2 from "../component/aboutapp/slider/slider2";
import Try from "../component/includes/try/try";

function AboutAppPage() {
    return (
        <div>
            <AboutApp />
            <Slide1 />
            <Testerminal />
            <Slide2 />
            <Use />
            <Try />
        </div>
    )
}

export default AboutAppPage;