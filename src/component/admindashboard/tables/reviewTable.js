import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { axiosData, axiosUploadData } from '../../../utils/axiosData';
import { toast } from 'react-toastify';
import $ from 'jquery';

function ReviewTable() {
    const [displayData, setDisplayData] = useState([]);
    const [logo, setLogo] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [position, setPosition] = useState('');
    const [preview, setPreview] = useState('');
    const [afterview, setAfterview] = useState('');
    const [inputlang, setInputlang] = useState('nl');
    const [delID, setDelID] = useState(0);

    const getData = async () => {
        const curLang = Cookies.get('lang') || 'nl';
        const res = await axiosData('getReview', { lang: curLang })
        setDisplayData(res);
    }

    useEffect(() => {
        getData();
    }, []);

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

    const delReivew = (id) => {
        setDelID(id);
        $('#delete-review-modal').show();
    }

    return (
        <div>
            <div className='w-100 text-end'>
                <button
                    className='btn btn-primary px-5 pt-2 pb-1'
                    data-bs-toggle="modal"
                    data-bs-target="#review-modal"
                >
                    <span className='fa fa-plus pe-3'></span>Add
                </button>
            </div>
            <div className='table-responsive mt-4'>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th style={{ minWidth: '150px' }}>Company Image</th>
                            <th style={{ minWidth: '140px' }}>Company Name</th>
                            <th style={{ minWidth: '150px' }}>Contact Person</th>
                            <th>Position</th>
                            <th style={{ minWidth: '400px' }}>Preview</th>
                            <th style={{ minWidth: '400px' }}>Afterview</th>
                            <th>Language</th>
                            <th style={{ minWidth: '50px', textAlign: 'center' }}>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='cursor-pointer'>
                        {
                            displayData.length !== 0 ?
                                displayData.map((ele, idx) => {
                                    return (
                                        <tr>
                                            <td>{idx + 1}</td>
                                            <td>{ele.image}</td>
                                            <td>{ele.company_name}</td>
                                            <td>{ele.contact_person}</td>
                                            <td>{ele.position}</td>
                                            <td>{ele.preview.slice(0, 200)}...</td>
                                            <td>{ele.afterview.slice(0, 200)}...</td>
                                            <td className='text-center' style={{ textTransform: 'uppercase' }}>{ele.language}</td>
                                            <td
                                                className='text-center text-danger'
                                                onClick={() => delReivew(ele.id)}
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete-review-modal"
                                            >
                                                <span className='fa fa-trash'></span>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                null
                        }
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="review-modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h3 className="modal-title text-primary fw-bold mb-0">Add Review</h3>
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

            <div className="modal fade" id="delete-review-modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h3 className="modal-title text-danger text-center flex-grow-1 pt-3 mb-0">Are you sure delete it?</h3>
                        </div>
                        <div className="modal-footer border-top-0">
                            <button type="button" className="btn bg-primary text-light ps-5 pe-5">Yes</button>
                            <button type="button" className="btn bg-danger text-light ps-5 pe-5" data-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewTable;