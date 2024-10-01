import React from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import setLanguage from "../../utils/setLanguage";

function NewCookio({setAgreeCookie}) {
    const lang = setLanguage();
    var newCookioStyle = {
        bottom: '0px',
        left: '0px',
        zIndex: '2',
        maxWidth: '500px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    }

    const agreeCookie = () => {
        Cookies.set('agreeCookie', true);
        setAgreeCookie('true');
    }

    return (
        <div className="w-100 text-center bg-primary p-4 position-fixed" style={newCookioStyle}>
            <h5 className="text-light mb-2">{lang.newCookie.title}</h5>
            <h5>
                <Link to="/privacy" className="text-light">
                    {lang.newCookie.readMore}
                </Link>
            </h5>
            <button className="w-100 bg-transparent text-blue fs-5" onClick={() => agreeCookie()}>{lang.newCookie.agree}</button>
            <h5>
                <Link to="/cookiemng" className="text-light">{lang.newCookie.cookieSetting}</Link>
            </h5>
        </div>
    )
}

export default NewCookio;