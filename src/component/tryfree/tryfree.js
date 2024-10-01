import React from "react";
import setLanguage from "../../utils/setLanguage";
import './tryfree.css';

function Tryfree() {
    const lang = setLanguage();
    return (
        <div className="container">
            <div className="tryfree-container bg-secondary">
                <h2 className="text-primary fw-bold">{lang.try.main.title}</h2>
                <h5 className="text-primary">{lang.try.main.subtitle}</h5>
                <div className="row w-100">
                    <div className="col-lg-6 col-md-12 col-sm-12 ps-0 pe-2">
                        <input type="text" className="w-100 mt-5" placeholder={lang.try.main.inputcompany} />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 ps-2 pe-0">
                        <input type="text" className="w-100 mt-5" placeholder={lang.try.main.address} />
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col-lg-6 col-md-12 col-sm-12 ps-0 pe-2">
                        <input type="text" className="w-100 mt-5" placeholder={lang.try.main.postal} />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 ps-2 pe-0">
                        <input type="text" className="w-100 mt-5" placeholder={lang.try.main.city} />
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col-lg-6 col-md-12 col-sm-12 ps-0 pe-2">
                        <input type="text" className="w-100 mt-5" placeholder={lang.try.main.phone} />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 ps-2 pe-0">
                        <input type="text" className="w-100 mt-5" placeholder={lang.try.main.contact} />
                    </div>
                </div>
                <div className="row w-100 mt-5">
                    <div className="col-lg-6 col-md-12 col-sm-12 ps-0 pe-2">
                        <select className="form-select">
                            <option value="M">M</option>
                            <option value="V">V</option>
                            <option value="X">X</option>
                        </select>
                    </div>
                </div>
                <h5 className="text-primary mt-5">{lang.try.main.invoice}</h5>
                <input type="text" className="w-100 mt-3" placeholder={lang.try.main.invoiceres} />
                <h5 className="text-primary mt-5">{lang.try.main.purchase}</h5>
                <input type="text" className="w-100 mt-3" placeholder={lang.try.main.invoiceres} />
                <h5 className="text-primary mt-5">{lang.try.main.cost}</h5>
                <input type="text" className="w-100 mt-3" placeholder={lang.try.main.invoiceres} />
                <h5 className="text-primary mt-5">{lang.try.main.recognition}</h5>
                <form className="d-flex gap-5">
                    <div className="form-check">
                        <input type="radio" className="form-check-input radio-btn" id="radio1" name="optradio" value="option1" defaultChecked/>{lang.try.main.yes}
                        <label className="form-check-label"></label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input radio-btn" id="radio2" name="optradio" value="option2" />{lang.try.main.no}
                        <label className="form-check-label"></label>
                    </div>
                </form>
                <h5 className="text-primary mt-5">{lang.try.main.experience}</h5>
                <input type="text" className="w-100 mt-3" placeholder={lang.try.main.invoiceres} />
                <h5 className="text-primary mt-5">{lang.try.main.expect}</h5>
                <input type="text" className="w-100 mt-3" placeholder={lang.try.main.invoiceres} />
                <div className="w-100 text-center mt-5">
                    <button className="btn btn-primary submit-btn">{lang.try.main.submit}</button>
                </div>
            </div>
        </div>
    )
}

export default Tryfree;