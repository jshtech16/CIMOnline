import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { isValidEmail } from '../../utils/isValidEmail';
import { serviceID, templateID, publicKey } from "../../utils/emailjsEnv";
import setLanguage from "../../utils/setLanguage";
import './knowCenter.css';

function KnowCenter() {
    const navigator = useNavigate();
    const location = useLocation();
    const lang = setLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [application, setApplication] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [title, setTitle] = useState(0)

    useEffect(() => {
        if(location.pathname === '/video') {
            setTitle(1);
        } else if(location.pathname === '/whitepaper') {
            setTitle(2);
        } else if(location.pathname === '/webinar') {
            setTitle(3);
        } else {
            setTitle(0);
        }
    }, [])

    const loginToWhitePaper = async (e) => {
        e.preventDefault();

        if (name === '') {
            toast.error("Please enter your name!");
        } else if (email === '') {
            toast.error("Please enter your email!");
        } else if (!isValidEmail(email)) {
            toast.error('Email is not correct!');
        } else if (application === '') {
            toast.error("Please enter your application!");
        } else if (!isChecked) {
            toast.error("Please agree to terms!");
        } else {
            const data = {
                name: name,
                sender: email,
                message: application,
            }
            await emailjs.send(serviceID, templateID, data, publicKey)
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );

            if (email === 'sales@cimonline.eu') {
                Cookies.set('permission', 'allow');
            } else {
                Cookies.set('permission', 'user');
            }
            toast.success("Success!");
            navigator('/download-' + location.pathname.split('/')[1]);
        }
    }

    return (
        <div className="container">
            <div className="w-100 bg-secondary knowcenter-container">
                <h2 className="text-primary text-center fw-bold">{lang.knowCenter.title[title]}</h2>
                <h4 className="text-primary text-center">{lang.knowCenter.content}</h4>
                <form className="w-50 w-md-100 mx-auto mt-5">
                    <input
                        type="text"
                        value={name} onChange={(e) => { setName(e.target.value) }}
                        className="form-control mt-5"
                        placeholder={lang.knowCenter.placeName}
                    />
                    <input
                        type="text"
                        value={email} onChange={(e) => { setEmail(e.target.value) }}
                        className="form-control mt-5"
                        placeholder={lang.knowCenter.placeEmail}
                    />
                    <input
                        type="text"
                        value={application} onChange={(e) => { setApplication(e.target.value) }}
                        className="form-control mt-5"
                        placeholder={lang.knowCenter.placeApp}
                    />
                    <div className="mt-5">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                style={{ width: "15px", height: "15px" }}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <span className="default"></span>
                        </label>
                        <span className="mb-0 text-primary ps-2 cim-check-label">{lang.knowCenter.checktxt}</span>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-5 w-min-0" onClick={(e) => loginToWhitePaper(e)} >{lang.knowCenter.title[title]}</button>
                </form>
            </div>
        </div>
    )
}

export default KnowCenter;