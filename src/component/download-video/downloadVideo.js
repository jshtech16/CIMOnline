import React, { useState } from "react";
import { saveAs } from 'file-saver';
import './downloadVideo.css';
import setLanguage from "../../utils/setLanguage";

function DownloadVideo({ selType }) {
    const lang = setLanguage();

    const whitepaper = [
        'LLM Model (AI) voor document herkenning',
        'LLM (KI) Rechnungserkennung',
        'AI Recognition LLM (English)',
        'Efficiëntie door AI',
        'Efficiency through AI',
        'Peppol  als oplossing',
        'Geintegreerde Peppol Oplossing',
        'Microsoft Office 365 Samenvoeg App',
        'Microsoft Office 365 Merge App'
    ];
    const videos = [
        {
            video: 'https://youtu.be/eCZk-1c_fYw'
        }
    ]

    const downloadHandler = async (pdfTitle) => {
        const pdfName = pdfTitle + '.pdf';
        try {
            const response = await fetch('/assets/whitepaper/' + pdfName);
            const blob = await response.blob();
            saveAs(blob, pdfName);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    }

    return (

        <div className="container" >
            <div className="w-100 bg-secondary cim-container mt-100 mt-md-50">
                <h2 className="text-primary text-center fw-bold">{lang.downloadKnowCenter.main.title[selType]}</h2>
                <div className="w-100 mt-5 text-center row">
                    {
                        selType == 0 || selType == 2 ?
                            whitepaper.map((ele, idx) => {
                                return (
                                    <div className="col-lg-4 col-md-6 mt-3" key={idx}>
                                        <div className="p-3 p-xl-5 pb-2 bg-primary text-center border-radius-10">
                                            <div className="d-flex w-100">
                                                <img src={'/assets/whitepaper/' + ele + '.png'} className="w-100" />
                                            </div>
                                            <h4 className="text-light mt-4">{ele}</h4>
                                            <h4 className="text-light mt-3 cursor-pointer" onClick={() => downloadHandler(ele)}>Download</h4>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            videos.map((ele, idx) => {
                                return (
                                    <div className="col-lg-4 col-md-6 mt-3">
                                        <iframe
                                            src='https://www.youtube.com/embed/eCZk-1c_fYw'
                                            frameborder='0'
                                            allow='autoplay; encrypted-media'
                                            allowfullscreen
                                            title='video'
                                        />
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default DownloadVideo;