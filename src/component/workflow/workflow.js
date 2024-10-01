import React from "react";
import setLanguage from "../../utils/setLanguage";
import './workflow.css';

function Wordflow() {
    const lang = setLanguage();
    return (
        <div>
            <div className="container">
                <div className='efficiency-container bg-secondary'>
                    <h2 className='text-primary text-center fw-bold'>{lang.workflow.main.title}</h2>
                    <h5 className='text-gray text-center mt-3'>{lang.workflow.main.subtitle}</h5>
                    <div className='w-100 text-center'>
                        <img src='/assets/img/laptop2.png' alt='laptop2' className='w-75' />
                    </div>
                    <h6 className='text-primary text-center'>{lang.workflow.main.content}</h6>
                </div>
            </div>

            <div className="container">
                <div className='approach-container'>
                    <h2 className='text-light text-center fw-bold'>{lang.workflow.approach.title}</h2>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-12 d-flex justify-content-center align-items-center'>
                            <img src='/assets/img/laptop2.png' alt='cim' className='w-100' />
                        </div>
                        <div className='col-xl-6 col-lg-12 d-flex justify-content-center align-items-center'>
                            <h5 className='text-light'>{lang.workflow.approach.content}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='control-container bg-primary'>
                    <h2 className='text-light text-center fw-bold'>{lang.workflow.control.title}</h2>
                    <h5 className='text-light'>{lang.workflow.control.content}</h5>
                    <div className='row mt-3'>
                        <div className='col-md-4 col-sm-12 text-center mt-5'>
                            <h2><i className='fa fa-users text-light'></i></h2>
                            <h4 className='text-light'>{lang.workflow.control.tags[0]}</h4>
                        </div>
                        <div className='col-md-4 col-sm-12 text-center mt-5'>
                            <h2><i className='fa fa-file-text text-light'></i></h2>
                            <h4 className='text-light'>{lang.workflow.control.tags[1]}</h4>
                        </div>
                        <div className='col-md-4 col-sm-12 text-center mt-5'>
                            <h2><i className='fa fa-lock text-light'></i></h2>
                            <h4 className='text-light'>{lang.workflow.control.tags[2]}</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='logging-container bg-secondary'>
                    <h4 className='text-primary'>
                        <span className="fw-bold">{lang.workflow.logdoc.logtitle}</span>&nbsp;&nbsp;&nbsp;
                        {lang.workflow.logdoc.logcontent}
                    </h4>
                    <h4 className='text-primary pt-4'>
                        <span className="fw-bold">{lang.workflow.logdoc.doctitle}</span>&nbsp;&nbsp;&nbsp;
                        {lang.workflow.logdoc.doccontent}
                    </h4>
                </div>
            </div>

            <div className="container">
                <div className='offer-container bg-primary'>
                    <h2 className='text-light text-center fw-bold'>{lang.workflow.offer.title}</h2>
                    <h5 className='text-light pt-3'>{lang.workflow.offer.content}</h5>
                </div>
            </div>

            <div className="container">
                <div className='dashboard-container'>
                    <h4 className='text-light pt-4'>
                        <span className="fw-bold">{lang.workflow.dashboard.title[0]}</span>&nbsp;&nbsp;&nbsp;
                        {lang.workflow.logdoc.logcontent}
                    </h4>
                    <h4 className='text-light pt-4'>
                        <span className="fw-bold">{lang.workflow.dashboard.title[1]}</span>&nbsp;&nbsp;&nbsp;
                        {lang.workflow.logdoc.doccontent}
                    </h4>
                </div>
            </div>

            <div className="container">
                <div className='security-container bg-secondary'>
                    <h2 className='text-primary text-center fw-bold'>{lang.workflow.security.title}</h2>
                    <h5 className='text-primary security-text mt-3'>{lang.workflow.security.content}</h5>
                </div>
            </div>

            <div className="container">
                <div className='conclusion-container bg-primary'>
                    <h2 className='text-light text-center fw-bold'>{lang.workflow.conclusion.title}</h2>
                    <h5 className='text-light mt-3'>
                        <i className='fa fa-warning text-header'></i>&nbsp;&nbsp;&nbsp;
                        {lang.workflow.conclusion.content}
                    </h5>
                </div>
            </div>
        </div >
    )
}

export default Wordflow;