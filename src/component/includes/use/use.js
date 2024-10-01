import React from "react";
import { Link } from "react-router-dom";
import setLanguage from "../../../utils/setLanguage";
import './use.css'

function Use() {
    const lang = setLanguage();

    return (
        <div className="container">
            <div className="use-container text-center">
                <h2 className="text-primary fw-bold">{lang.home.use.title}</h2>
                <div className="w-100 position-relative mt-5">
                    <img src='/assets/img/video.jpg' alt="video" className="video-img" />
                    <div className="bg-light video-play">
                        <Link to='/video'>
                            <img src="/assets/img/video-play.svg" alt="video-play" className="video-play-img" />
                            <span className="fa fa-play cursor-pointer video-play-btn"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Use;