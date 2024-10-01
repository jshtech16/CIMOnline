import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";
import axios from "axios";
import setLanguage from "../../utils/setLanguage";
import './downloadKnowCenter.css';
import Cookies from "js-cookie";

function DownloadKnowCenter() {
    const lang = setLanguage();
    const [pdf, setPdf] = useState('');
    const [image, setImage] = useState('');
    const [brochures, setBrochures] = useState([])

    const getData = async () => {
        const res = await axios.post('https://expenses.cimonline.eu/getPaper',
            {
                title: 'brochures'
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        setBrochures(res.data)
    }

    useEffect(() => {
        getData();
    }, [])

    const downloadHandler = async (pdfTitle) => {
        const pdfName = pdfTitle + ".pdf";
        try {
            const response = await fetch("/assets/whitepaper/" + pdfName);
            const blob = await response.blob();
            saveAs(blob, pdfName);
        } catch (error) {
            console.error("Error downloading PDF:", error);
        }
    };

    const addBrochures = async () => {
        if (pdf === '') {
            toast.error('Please upload PDF!');
        } else {
            await axios.post('https://expenses.cimonline.eu/addPaper',
                {
                    image: image.name,
                    pdf: pdf.name,
                    title: pdf.name.split('.')[0]
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const data = new FormData();
            data.append('file', pdf);
            data.append('file', image)
            await axios.post('https://expenses.cimonline.eu/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                // }).then(async (result) => {
                //     toast.success('Added successfully!')
                // }).catch((err) => {
                //     toast.error('err')
            })
        }
    }

    return (
        <div className="container">
            <div className="w-100 bg-secondary download-knowcenter-container mt-100 mt-md-50">
                <h2 className="text-primary text-center fw-bold">
                    {lang.downloadKnowCenter.main.title[0]}
                </h2>
                <div className="w-100 mt-5 text-center row">
                    {
                        brochures && brochures.length !== 0 ?
                            brochures.map((ele, idx) => {
                                return (
                                    <div className="col-lg-4 col-md-6 mt-3" key={idx}>
                                        <div className="p-3 bg-primary text-center whitepaper-chd-content">
                                            <div className="d-flex w-100">
                                                <img src={"/assets/img/whitepaper/" + ele.image} alt="whitepaper" className="w-100" />
                                            </div>
                                            <h4 className="text-light mt-2">{ele.title}</h4>
                                            <h4
                                                className="text-light cursor-pointer"
                                                onClick={() => downloadHandler(ele.title)}
                                            >
                                                Download
                                            </h4>
                                        </div>
                                    </div>
                                );
                            })
                            :
                            null
                    }
                    {
                        Cookies.get('permission') === 'allow' ?
                            <div
                                className="col-lg-4 col-md-6 mt-3 cursor-pointer"
                                style={{ height: "100%" }}
                            >
                                <div
                                    className="p-3 p-xl-5 pb-2 bg-primary text-center border-radius-10"
                                    style={{ height: "100%" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#brocures-add-modal"
                                >
                                    <h1 className="text-light">+</h1>
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
            </div>

            <div className="modal fade" id="brocures-add-modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{ borderBottom: '0px' }}>
                            <h4 className="modal-title text-primary">Add Brochures</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body pt-0">
                            <div>
                                <label className="form-label text-primary">Brochures PDF</label>
                                <input className="form-control" type="file" onChange={(e) => setPdf(e.target.files[0])} />
                            </div>
                            <div className="mt-3">
                                <label className="form-label text-primary">Brochures Image</label>
                                <input className="form-control" type="file" onChange={(e) => setImage(e.target.files[0])} />
                            </div>
                        </div>
                        <div className="modal-footer border-top-0">
                            <button type="button" className="btn bg-primary text-light w-100" onClick={addBrochures}>
                                Add Brochures
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadKnowCenter;
