import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserTable from './tables/userTable';
import ReviewTable from './tables/reviewTable';
import BrochuresTable from './tables/brochuresTable';
import VideoTable from './tables/videoTable';
import WhitePaperTable from './tables/whitepaperTable';
import WebinarTable from './tables/webinarTable';

function AdminTable() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const [tableName, setTableName] = useState('');

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'user') {
            setTableName('User');
        } else if (tab === 'review') {
            setTableName('Review');
        } else if (tab === 'brochures') {
            setTableName('Brochures');
        } else if (tab === 'video') {
            setTableName('Video');
        } else if (tab === 'whitepaper') {
            setTableName('Whitepaper');
        } else if (tab === 'webinar') {
            setTableName('Webinar');
        } else {
            navigate('/admin?tab=user');
        }
    }, [searchParams, navigate]);

    const renderTable = () => {
        const tab = searchParams.get('tab');
        switch (tab) {
            case 'user':
                return <UserTable />;
            case 'review':
                return <ReviewTable />;
            case 'brochures':
                return <BrochuresTable />;
            case 'video':
                return <VideoTable />;
            case 'whitepaper':
                return <WhitePaperTable />;
            case 'webinar':
                return <WebinarTable />;
            default:
                return null;
        }
    };

    return (
        <div className='adminTable-container'>
            <h2 className='text-primary fw-bold'>{tableName}</h2>
            <div id='adminTable'>
                {renderTable()}
            </div>
        </div>
    );
}

export default AdminTable;