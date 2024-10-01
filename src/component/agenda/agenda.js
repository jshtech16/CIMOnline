import React from "react";
import setLanguage from "../../utils/setLanguage";
import './agenda.css'

function Agenda() {
    const lang = setLanguage();
    return (
        <div className="container">
            <div className="w-100 bg-secondary agenda-container">
                <h2 className="text-primary text-center fw-bold">{lang.agenda.title}</h2>
                <div className="bg-primary row agenda-webinar-container mt-5 p-5 pb-0">
                    <div className="col-lg-8">
                        <h2 className="text-light">{lang.agenda.subtitle}</h2>
                        <h4 className="text-light mt-3">{lang.agenda.content}</h4>
                        <h4 className="text-light border border-1 border-secondary w-fit p-3 agenda-date mt-3">10.Oct 2023. 10PM</h4>
                    </div>
                    <div className="col-lg-4 d-flex text-center d-flex">
                        <div className="d-flex justify-content-between flex-column w-100">
                            <div></div>
                            <img src='/assets/img/model for agenda.png' alt="model-2" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agenda;