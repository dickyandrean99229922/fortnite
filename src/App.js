import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Merch = lazy(() => import('./Merch'));
const Register = lazy(() => import('./Register'));
const Download = lazy(() => import('./Download'));
const Product = lazy(() => import('./Product'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Merch" element={<Merch />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/Product" element={<Product />} />

      </Routes>
    </Suspense>
  </Router>
);

export default App;