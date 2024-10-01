import React from "react";
import setLanguage from "../../utils/setLanguage";

function Privacy () {
    const lang = setLanguage();
    return(
        <div className="container">
            <div className="mt-5 w-100">
                <h2 className="text-primary fw-bold">{lang.privacy.title}</h2>
                <div className="mt-5 text-primary">
                    {
                        lang.privacy.content.map((ele, idx) => {
                            return(
                                <h5 className="mb-0 mt-3" key={idx}>{ele}</h5>
                            )
                        })
                    }

                    <ul className="pt-5 pb-3 text-primary">
                        <li className="pt-1 pb-1 cursor-pointer">Internet Explorer</li>
                        <li className="pt-1 pb-1 cursor-pointer">Google Chrome</li>
                        <li className="pt-1 pb-1 cursor-pointer">Firefox</li>
                        <li className="pt-1 pb-1 cursor-pointer">Safari</li>
                    </ul>

                    <h5>{lang.privacy.footer}</h5>

                </div>
            </div>
        </div>
    )
}

export default Privacy;