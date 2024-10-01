import React from 'react';
import './admindashboard.css';
import { useNavigate } from 'react-router';

function AdminSidebar() {
    const navigate = useNavigate();

    const setTab = (param) => {
        navigate('/admin?tab=' + param);
    }

    return (
        <div className='adminsidebar-container'>
            <h5 className='cursor-pointer' onClick={() => setTab('user')}><span className='fa fa-user pe-2'></span>User</h5>
            <h5 className='cursor-pointer' onClick={() => setTab('review')}><span className='fa fa-thumbs-up pe-2'></span>Review</h5>
            <h5 data-bs-toggle="collapse" data-bs-target="#Knowcenter" className='cursor-pointer'><span className='fa fa-cloud-download pe-2'></span>Knowcenter</h5>
            <div id="Knowcenter" class="collapse ps-4">
                <h5 className='cursor-pointer' onClick={() => setTab('brochures')}><span className='fa fa-map pe-2'></span>Brochures</h5>
                <h5 className='cursor-pointer' onClick={() => setTab('video')}><span className='fa fa-video-camera pe-2'></span>Video</h5>
                <h5 className='cursor-pointer' onClick={() => setTab('whitepaper')}><span className='fa fa-file-text pe-2'></span>WhitePaper</h5>
                <h5 className='cursor-pointer' onClick={() => setTab('webinar')}><span className='fa fa-window-restore pe-2'></span>Webinar</h5>
            </div>
        </div>
    )
}

export default AdminSidebar;