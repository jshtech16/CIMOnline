import React, { useState, useEffect } from "react";

import Navbar from "../navbar/navbar";
import { Outlet } from "react-router";
import Footer from "../footer/footer";
import NewCookio from "../setCookio/setCookie";
import Cookies from 'js-cookie';

export default function Layout() {

    const [agreeCookie, setAgreeCookie] = useState(false);

    useEffect(() => {
        if(Cookies.get('agreeCookie')) {
            setAgreeCookie(Cookies.get('agreeCookie'))
        } else {
            Cookies.set('agreeCookie', 'false');
        }
    }, [])

    return (
        <>
            <Navbar />
            <Outlet />
            {
                agreeCookie == 'true' ?
                    null : <NewCookio setAgreeCookie={setAgreeCookie} />
            }
            <Footer />
        </>
    )
}