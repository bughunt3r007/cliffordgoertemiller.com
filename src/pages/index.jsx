import Layout from "./Layout.jsx";

import resume from "./resume";

import portfolio from "./portfolio";

import 404 from "./404";

import Resume from "./Resume";

import Portfolio from "./Portfolio";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    resume: resume,
    
    portfolio: portfolio,
    
    404: 404,
    
    Resume: Resume,
    
    Portfolio: Portfolio,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<resume />} />
                
                
                <Route path="/resume" element={<resume />} />
                
                <Route path="/portfolio" element={<portfolio />} />
                
                <Route path="/404" element={<404 />} />
                
                <Route path="/Resume" element={<Resume />} />
                
                <Route path="/Portfolio" element={<Portfolio />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}