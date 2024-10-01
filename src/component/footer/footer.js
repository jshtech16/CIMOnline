import React from "react";
import { Link, useLocation } from "react-router-dom";
import setLanguage from "../../utils/setLanguage";
import './footer.css';

function Footer() {
    const lang = setLanguage();
    const location = useLocation();

    const footerList = [
        { link: '/', text: lang.footer.home },
        { link: '/o365', text: lang.footer.o365 },
        { link: '/app', text: lang.footer.aboutapp },
        { link: '/price', text: lang.footer.price },
        { link: '/reviews', text: lang.footer.reviews },
        { link: '/us', text: lang.footer.aboutus },
        { link: '/contact', text: lang.footer.contact },
        { link: '/partnerup', text: lang.footer.faq }
    ];

    const footerSocialList = [
        { link: 'https://linkedin.com', text: lang.footer.linkedin },
        { link: 'https://facebook.com', text: lang.footer.facebook },
        { link: 'https://instagram.com', text: lang.footer.instagram }
    ]

    return (
        <footer
            className={location.pathname === '/price' ? "bg-secondary" : ""}
            style={location.pathname === '/admin' ? { marginTop: '-45px'} : {marginTop: '75px'}}
        >
            <div className="footer-container">
                <div className="container px-3" >
                    <div className="row w-100">
                        <div className="col-sm-12 col-md-7">
                            <img src='/assets/img/logo.png' alt="footerlogo" className="pb-5" />
                        </div>
                        <div className="col-sm-12 col-md-2 pb-4">
                            <ul className="navbar-nav">
                                {
                                    footerList.map((ele, idx) => {
                                        return (
                                            <li key={idx}>
                                                <Link to={ele.link} className="nav-link text-light">
                                                    {ele.text}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <ul className="navbar-nav">
                                {
                                    footerSocialList.map((ele, idx) => {
                                        return (
                                            <li key={idx}>
                                                <Link to={ele.link} className="nav-link text-light">
                                                    {ele.text}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <h5 className="text-light mt-3 mb-0 pb-3">
                        <span className="fa fa-copyright"></span>{lang.footer.copyright}
                    </h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer;