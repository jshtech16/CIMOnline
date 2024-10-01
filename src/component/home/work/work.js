import React from "react";
import setLanguage from "../../../utils/setLanguage";
import './work.css';

function Work() {
    const lang = setLanguage();
    return (
        <div className="bg-primary work-container">
            <div className="container w-100 work-content text-center">
                <div className="position-absolute text-light w-100 start-0 d-flex justify-content-center align-items-center work-title">
                    <p>{lang.home.workflow.content}</p>
                </div>
                <div className="progress-bar bg-primary css">
                    <progress id="css" min="0" max="100" value="100"></progress>
                </div>
                <img src='/assets/img/works/1.png' alt="work1" className="worksImg1" />
                <img src='/assets/img/works/2.png' alt="work2" className="worksImg2" />
                <img src='/assets/img/works/3.png' alt="work3" className="worksImg3" />
                <img src='/assets/img/works/4.png' alt="work4" className="worksImg4" />
                <img src='/assets/img/works/5.png' alt="work5" className="worksImg5" />
                <img src='/assets/img/works/6.png' alt="work6" className="worksImg6" />
                <img src='/assets/img/works/7.png' alt="work7" className="worksImg7" />
                <img src='/assets/img/works/8.png' alt="work8" className="worksImg8" />
                <img src='/assets/img/works/9.png' alt="work9" className="worksImg9" />
                <img src='/assets/img/works/10.png' alt="work10" className="worksImg10" />
                <img src='/assets/img/works/circle.png' alt="circle" className="work-img-circle" />
            </div>
        </div>
    )
}

export default Work;