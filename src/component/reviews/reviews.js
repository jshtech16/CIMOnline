import React, { useEffect, useState } from "react";
import setLanguage from "../../utils/setLanguage";
import './reviews.css'
import { toast } from "react-toastify";
import { axiosData, axiosUploadData } from "../../utils/axiosData";
import Cookies from "js-cookie";

function Reviews() {
    const lang = setLanguage();
    const [logo, setLogo] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [position, setPosition] = useState('');
    const [preview, setPreview] = useState('');
    const [afterview, setAfterview] = useState('');
    const [inputlang, setInputlang] = useState('nl');
    const [reviews, setReviews] = useState([]);

    const getData = async () => {
        const curLang = Cookies.get('lang') || 'nl';
        const res = await axiosData('getReview', { lang: curLang })
        console.log(res)
        setReviews(res);
    }

    useEffect(() => {
        getData()
    }, [])

    const addReview = () => {
        if (logo === '') {
            toast.error('Please attach company logo!');
        } else if (name === '') {
            toast.error('Please input company name!');
        } else if (contact === '') {
            toast.error('Please input contact person!');
        } else if (position === '') {
            toast.error('Please input the position of contact person!');
        } else if (preview === '') {
            toast.error('Please input the review!')
        } else {
            axiosData('addReview', {
                logo: logo.name,
                name: name,
                contact: contact,
                position: position,
                preview: preview,
                afterview: afterview,
                inputlang: inputlang
            });

            const data = new FormData();
            data.append('file', logo);
            axiosUploadData('uploadLogo', data);
        }
    }

    return (
        <div className="container">
            <div className="reviews-container bg-secondary">
                <h2 className="text-center text-primary fw-bold">{lang.reviews.title}</h2>
                <h4 className="text-center text-gray">{lang.reviews.subtitle}</h4>
                {
                    Cookies.get('permission') === 'allow' ?
                        <div className="w-100 text-end">
                            <button
                                className="btn btn-secondary pt-2 pb-2 ps-4 pe-4 w-fit"
                                data-bs-toggle="modal"
                                data-bs-target="#review-modal"
                            >
                                <h5 className="mb-0">Add Review</h5>
                            </button>
                        </div>
                        :
                        null
                }
                <div className="mt-5">
                    {
                        reviews.length !== 0 ?
                            reviews.map((review, i) => {
                                return (
                                    <div className="border-bottom border-secondary mt-5" key={i}>
                                        {
                                            console.log('sadfasdf')
                                        }
                                        <div className="row">
                                            <div className="col-lg-4 col-md-12 col-sm-12 d-flex">
                                                <div className="text-center w-75 mx-auto">
                                                    <img src={"/assets/img/review/" + review.image} alt="company" className="w-100 mb-3" />
                                                    <h5 className="text-primary mb-0">{review.company_name}</h5>
                                                    <h5 className="text-primary mb-0">{review.contact_person}</h5>
                                                    <h5 className="text-primary mb-0">{review.position}</h5>
                                                    <img src='/assets/img/stars.svg' alt="stars" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-12 col-sm-12">
                                                <h5 className="text-primary mb-0">
                                                    {review.preview}
                                                    <div id={"review" + (i + 1)} className="collapse">
                                                        {review.afterview}
                                                    </div>
                                                </h5>
                                            </div>
                                        </div>
                                        <h5 className="w-100 text-end cursor-pointer" data-bs-toggle="collapse" data-bs-target={"#review" + (i + 1)}>{lang.reviews.readMore}</h5>
                                    </div>
                                )
                            })
                            :
                            null
                    }
                    <div className="w-100 text-center mt-5">
                        <button className="btn btn-secondary pt-2 pb-2 ps-4 pe-4 w-fit w-min-0"><h5 className="mb-0">{lang.reviews.viewMore}</h5></button>
                    </div>
                </div>
                <div className="modal fade" id="review-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <h4 className="modal-title text-primary fw-bold">Add Review</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex mt-1">
                                    <h5 className="w-50">Company Logo:</h5>
                                    <input className="form-control" type="file" onChange={(e) => setLogo(e.target.files[0])} />
                                </div>
                                <div className="d-flex mt-3">
                                    <h5 className="w-50">Company Name:</h5>
                                    <input type="text" className="form-control" placeholder="CimOnline.eu" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="d-flex mt-3">
                                    <h5 className="w-50">Contact Person:</h5>
                                    <input type="text" className="form-control" placeholder="GF Hofman" onChange={(e) => setContact(e.target.value)} />
                                </div>
                                <div className="d-flex mt-3">
                                    <h5 className="w-50">Position:</h5>
                                    <input type="text" className="form-control" placeholder="CEO" onChange={(e) => setPosition(e.target.value)} />
                                </div>
                                <div className="mt-3">
                                    <h5>Preview:</h5>
                                    <textarea rows={5} className="w-100" placeholder="Preview" onChange={(e) => setPreview(e.target.value)}></textarea>
                                </div>
                                <div className="mt-3">
                                    <h5>Afterview:</h5>
                                    <textarea rows={5} className="w-100" placeholder="Afterview(Optional)" onChange={(e) => setAfterview(e.target.value)}></textarea>
                                </div>
                                <div className="d-flex mt-3">
                                    <h5 className="w-50">Language:</h5>
                                    <select className="form-select cursor-pointer" onChange={(e) => setInputlang(e.target.value)}>
                                        <option value="nl">NL</option>
                                        <option value="en">EN</option>
                                        <option value="sp">SP</option>
                                        <option value="fr">FR</option>
                                        <option value="du">DU</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer border-top-0">
                                <button type="button" className="btn bg-primary text-light w-100" onClick={addReview}>
                                    Add Review
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;