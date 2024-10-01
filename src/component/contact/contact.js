import React, { useState } from "react";
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { isValidEmail } from '../../utils/isValidEmail';
import { serviceID, templateID, publicKey } from "../../utils/emailjsEnv";
import setLanguage from '../../utils/setLanguage';
import './contact.css';

function Countact() {
    const lang = setLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const sendEmail = async () => {
        if (name === "") {
            toast.error("Please enter your name!");
        } else if (email === "") {
            toast.error("Please enter your email address!");
        } else if (!isValidEmail(email)) {
            toast.error("Email Format is not correct!");
        } else if (msg === "") {
            toast.error("Please enter your message!");
        } else {
            const data = {
                name: name,
                email: email,
                message: msg,
            }
            try {
                await emailjs.send(serviceID, templateID, data, publicKey)
                    .then(
                        (result) => {
                            toast.success("We received your message successfully!");
                        },
                        (error) => {
                            toast.error('Server is busy! Please try again later!')
                        }
                    );
            } catch (error) {
                toast.error('Server is busy! Please try again later!')
            }
        }
    }
    return (
        <div className="container">
            <div className="contact-container bg-secondary">
                <div className="col-lg-4 col-md-12 mt-5">
                    <img src="/assets/img/cimonline company/Cimonline Visual 4.png" alt="Cimonline Visual 4"
                        className="w-100" />
                </div>
                <div className="col-lg-8 col-md-12 mt-5 text-center px-5 contact-form">
                    <div>
                        <h2 className="text-primary fw-bold">{lang.contact.touch.title}</h2>
                        <h4 className="text-gray">{lang.contact.touch.subtitle}</h4>
                    </div>
                    <div>
                        <input type="text" className="w-100" placeholder={lang.contact.touch.name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" className="w-100 mt-4" placeholder={lang.contact.touch.email} onChange={(e) => setEmail(e.target.value)} />
                        <textarea rows={5} className="mt-4 w-100 bg-secondary contact-msg" placeholder={lang.contact.touch.message} />
                    </div>
                    <button className="btn btn-primary w-100 w-min-0" onClick={sendEmail}>{lang.contact.touch.sent}</button>
                </div>
            </div>
            <div className="row contact-container bg-secondary">
                <div className="col-lg-5 col-md-12 mt-5 text-center">
                    <h2 className="text-primary fw-bold">{lang.contact.call.title}</h2>
                    <h5 className="text-gray">{lang.contact.call.subtitle}</h5>
                    <div className="d-flex justify-content-center align-items-center gap-3 ps-5 mt-4">
                        <span className="fa fa-phone text-primary" style={{ transform: "ratate(90deg)" }}></span>
                        <h5 className="text-primary mb-0 pe-5">+31 76 5729999</h5>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 ps-5">
                        <span className="fa fa-phone text-primary" style={{ transform: "ratate(90deg)" }}></span>
                        <h5 className="text-primary mb-0 pe-5">+31 76 5717770</h5>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 ps-5">
                        <span className="fa fa-envelope text-primary"></span>
                        <h5 className="text-primary mb-0 pe-3">sales@cimonline.eu</h5>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 mt-5 d-flex flex-column justify-content-between">
                    <h2 className="text-primary text-center fw-bold">{lang.contact.demo.title}</h2>
                    <button className="btn btn-primary w-min-0 mt-5">{lang.contact.demo.demo}</button>
                </div>
            </div>
        </div>
    )
}

export default Countact;