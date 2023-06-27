import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import Redeem from './Redeem/Redeem';
import Packges from './Packges/Packges';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>} />
                <Route path="/redeem" element={<Redeem/>} />
                <Route path="/packges" element={<Packges/>} />
                {/*<Route component={NotFound} />*/}
            </Routes>
        </Router>
    );
};

export default AppRouter;
