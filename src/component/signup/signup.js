import React from 'react'
import setLanguage from '../../utils/setLanguage';
import './signup.css';

export default function Signup() {
    const lang = setLanguage();

    return (
        <div className='container'>
            <div className="signup-container text-center bg-secondary">
                <div className="w-50 w-md-100 ps-5 pe-5 mx-auto">
                    <h2 className="text-primary fw-bold">{lang.signup.main.title}</h2>
                    <div className="mt-5">
                        <input type="text" className="w-100" placeholder="Email address" />
                    </div>
                    <div className="mt-5">
                        <input type="text" className="w-100" placeholder="Password" />
                    </div>
                    <button className="btn btn-primary mt-5 w-min-0 w-100">{lang.signup.main.button}</button>
                    <h5 className="text-center mt-2 text cursor-pointer">{lang.signup.main.already}</h5>
                </div>
            </div>
        </div>
    )
}
