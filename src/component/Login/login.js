import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import setLanguage from "../../utils/setLanguage";
import './login.css';


function Login() {
    const navigate = useNavigate();
    const lang = setLanguage();
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const loginAction = () => {
        if (email === "") {
            toast.error('Please enter your email!');
        } else if (pwd === "") {
            toast.error("Please enter your password!");
        } else {
            toast.success("Login Successfully!");
            navigate("/");
        }
    }

    return (
        <div className="container">
            <div className="login-container text-center bg-secondary">
                <div className="w-50 w-md-100 ps-5 pe-5 mx-auto">
                    <h2 className="text-primary fw-bold">{lang.login.main.title}</h2>
                    <div className="mt-5">
                        <input type="text" className="w-100" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mt-5">
                        <input type="text" className="w-100" placeholder="Password" onChange={(e) => setPwd(e.target.value)} />
                    </div>
                    <Link to="/forget" className="text-decoration-none">
                        <h5 className="text-end cursor-pointer text-primary mt-3">{lang.login.main.forget}</h5>
                    </Link>
                    <button className="btn btn-primary mt-3 w-min-0 w-100" onClick={() => loginAction()}>{lang.login.main.button}</button>
                    <button className="btn bg-white mt-3 w-min-0 w-100">{lang.login.main.withgoogle}</button>
                    <h5 className="text-center mt-4 text cursor-pointer">{lang.login.main.already}</h5>
                    <button className="btn btn-primary w-min-0 w-100">{lang.login.main.signup}</button>
                </div>
            </div>
        </div>
    )
}

export default Login;