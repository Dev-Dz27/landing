import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import ContactUs from './pages/ContactUs';

import Home from './pages';

function App() {
  return (
    <Router>
     <Routes>
     <Route path="/" element={<Home />}  exact /> 
     <Route path="/contact"  element={<ContactUs />} exact />
     </Routes> 
    </Router>
  );
}

export default App;
