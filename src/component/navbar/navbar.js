import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import setLanguage from "../../utils/setLanguage";
import "./navbar.css";

function Navbar() {
    const [navbarshow, setNavbarShow] = useState(false);
    const lang = setLanguage();

    const changeLanguages = (e) => {
        Cookies.set('lang', e.target.value)
        window.location.reload();
    }

    return (
        <>
            <div className="w-100 text-end text-light d-flex justify-content-end header-container">
                <Link className="cursor-pointer text-light text-decoration-none" to="/partnerlogin">{lang.navbar.partnerlogin}</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link className="cursor-pointer text-light text-decoration-none" to="/login">{lang.navbar.login}</Link>
                <select className=" border-0 form-select text-light bg-blue" onChange={changeLanguages} value={Cookies.get('lang')}>
                    <option className="cursor-pointer bg-blue text-light" value="nl">NL</option>
                    <option className="cursor-pointer bg-blue text-light" value="en">EN</option>
                    <option className="cursor-pointer bg-blue text-light" value="sp">SP</option>
                    <option className="cursor-pointer bg-blue text-light" value="fr">FR</option>
                    <option className="cursor-pointer bg-blue text-light" value="du">DU</option>
                </select>
            </div>
            <nav className="navbar navbar-expand-xl bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        <img src="/assets/img/logo.png" alt="logo" />
                    </Link>
                    <img src='/assets/img/navbar-logo.png' alt="navbar-logo" className="navbar-logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" onClick={() => setNavbarShow(!navbarshow)} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" style={navbarshow ? { display: "block" } : { display: 'none' }} id="collapsibleNavbar">
                        <div className="me-auto"></div>
                        <div>
                            <ul className="navbar-nav ps-3">
                                <li className="nav-item menu-item">
                                    <Link to="/" aria-current="page" className="nav-link">
                                        {lang.navbar.home}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/o365" target="_blank" className="nav-link">
                                        {lang.navbar.o365}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/aboutapp" className="nav-link">{lang.navbar.aboutapp}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/workflow" className="nav-link">
                                        {lang.navbar.workflow}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/erp" className="nav-link">
                                        {lang.navbar.ERP}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/agenda" className="nav-link">
                                        {lang.navbar.agenda}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/price" className="nav-link">
                                        {lang.navbar.price}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/reviews" className="nav-link">
                                        {lang.navbar.reviews}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/aboutus" className="nav-link">
                                        {lang.navbar.aboutus}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/contact" className="nav-link">
                                        {lang.navbar.contact}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/partnerup" className="nav-link">
                                        {lang.navbar.partnerup}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item position-relative">
                                    <Link to="#" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {lang.navbar.knowCenter.title}
                                    </Link>
                                    <ul className="dropdown-menu bg-primary border-0 nav-knowcenter-dropdown" aria-labelledby="navbarDropdown">
                                        <li>
                                            <Link to='/brochures' className="dropdown-item">
                                                {lang.navbar.knowCenter.brochures}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/video' className="dropdown-item">
                                                {lang.navbar.knowCenter.videos}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/whitepaper' className="dropdown-item">
                                                {lang.navbar.knowCenter.whitepapers}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/webinar' className="dropdown-item">
                                                {lang.navbar.knowCenter.webinars}
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item pe-3">
                                    <Link className="nav-link" to="/tryfree">
                                        {lang.navbar.tryit}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;