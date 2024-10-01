import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from "react-toastify";

import Layout from './component/includes/layout';
import HomePage from './pages/home';
import O365Page from './pages/O365';
import AboutAppPage from './pages/aboutapp';
import WorkFlowPage from './pages/workflow';
import ERPPage from './pages/erp';
import AgendaPage from './pages/agenda';
import PricePage from './pages/price';
import ReviewsPage from './pages/reviews';
import AboutUsPage from './pages/aboutus';
import ContactPage from './pages/contact';
import PartnerUpPage from './pages/partnerup';
import KnowCenterPage from './pages/knowCenter';
import TryFreePage from './pages/tryfree';
import LogInPage from './pages/login';
import ForgetPage from './pages/forget';
import PartnerLogInPage from './pages/partnerlogin';
import CookieMng from './pages/setCookio';
import SignupPage from './pages/signup';
import PrivacyPage from './pages/privacy';
import DownloadKnowCenterPage from './pages/download-knowCenter';

import './App.css';
import DownloadVideoPage from './pages/download-video';
import AdminDashboardPage from './pages/admindashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/o365" element={<O365Page />} />
            <Route path="/aboutapp" element={<AboutAppPage />} />
            <Route path='/workflow' element={<WorkFlowPage />} />
            <Route path='/erp' element={<ERPPage />} />
            <Route path='/agenda' element={<AgendaPage />} />
            <Route path='/price' element={<PricePage />} />
            <Route path='/reviews' element={<ReviewsPage />} />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/partnerup' element={<PartnerUpPage />} />
            <Route path='/webinar' element={<KnowCenterPage />} />
            <Route path='/whitepaper' element={<KnowCenterPage />} />
            <Route path='/video' element={<KnowCenterPage />} />
            <Route path='/brochures' element={<KnowCenterPage />} />
            <Route path='/tryfree' element={<TryFreePage />} />
            <Route path='/login' element={<LogInPage />} />
            <Route path='/forget' element={<ForgetPage />} />
            <Route path='/partnerlogin' element={<PartnerLogInPage />} />
            <Route path='/cookiemng' element={<CookieMng />} />
            <Route path='/privacy' element={<PrivacyPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/download-webinar' element={<DownloadKnowCenterPage />} />
            <Route path='/download-whitepaper' element={<DownloadKnowCenterPage />} />
            <Route path='/download-video' element={<DownloadVideoPage />} />
            <Route path='/download-brochures' element={<DownloadKnowCenterPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={7000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} closeButton={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover theme="light" />
    </div>
  );
}

export default App;
