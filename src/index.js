import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import FAQ from './pages/FAQ';
import HelpCenter from './pages/HelpCenter';
import LearnAI from './pages/LearnAI';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/my-app-showcase' : '/'}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/learn-ai" element={<LearnAI />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
