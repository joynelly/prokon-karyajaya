import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './webpage/LandingPage/LandingPage';
import AboutUsPage from './webpage/AboutUsPage/AboutUsPage';
import DetailProductPage from './webpage/DetailProductPage/DetailProductPage';
import AdminLoginPage from './webpage/AdminLoginPage/AdminLoginPage';
import AdminLandingPage from './webpage/AdminLandingPage/AdminLandingPage';
import AdminProductPage from './webpage/AdminProductPage/AdminProductPage';
import AdminCategoryPage from './webpage/AdminCategoryPage/AdminCategoryPage';
import AdminBrandPage from './webpage/AdminBrandPage/AdminBrandPage';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading Karyajaya...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path="/detailproduct" element={<DetailProductPage/>}/>
          <Route path="/adminlogin" element={<AdminLoginPage/>}/>
          <Route path="/adminlandingpage" element={<AdminLandingPage/>}/>
          <Route path="/adminproductpage" element={<AdminProductPage/>}/>
          <Route path="/admincategorypage" element={<AdminCategoryPage/>}/>
          <Route path="/adminbrandpage" element={<AdminBrandPage/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
