import React from 'react'
import setLanguage from '../../utils/setLanguage';
import './forget.css';

function Forget() {
    const lang = setLanguage();
    return (
        <div className='container'>
            <div className="forget-container bg-secondary text-center">
                <h1 className="text-primary fw-bold">{lang.forget.main.title}</h1>
                <h5 className="text-primary mt-3">{lang.forget.main.subtitle}</h5>
                <input type="text" className='mt-5 w-50 w-md-100' placeholder={lang.forget.main.emaildes} />
                <div className='mt-4'>
                    <button className='btn btn-primary w-50 w-md-100'>{lang.forget.main.button}</button>
                </div>
            </div>
        </div >
    )
}

export default Forget;