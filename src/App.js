import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './webpage/LandingPage/LandingPage';
import AboutUsPage from './webpage/AboutUsPage/AboutUsPage';
import ProductPage from './webpage/ProductPage/ProductPage'
import DetailProductPage from './webpage/DetailProductPage/DetailProductPage';
import JasaPage from './webpage/JasaPage/JasaPage';
import DetailJasaPage from './webpage/DetailJasaPage/DetailProductPage';
import AdminLoginPage from './webpage/AdminLoginPage/AdminLoginPage';
import AdminLandingPage from './webpage/AdminLandingPage/AdminLandingPage';
import AdminProductPage from './webpage/AdminProductPage/AdminProductPage';
import AdminCategoryPage from './webpage/AdminCategoryPage/AdminCategoryPage';
import AdminBrandPage from './webpage/AdminBrandPage/AdminBrandPage';
import AddProductPage from './webpage/AddProductPage/AddProductPage';
import AddCategoryPage from './webpage/AddCategoryPage/AddCategoryPage';
import AddBrandPage from './webpage/AddBrandPage/AddBrandPage';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading Karyajaya...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/detailproduct" element={<DetailProductPage/>}/>
          <Route path="/jasa" element={<JasaPage/>}/>
          <Route path="/detailjasa" element={<DetailJasaPage/>}/>
          <Route path="/adminlogin" element={<AdminLoginPage/>}/>
          <Route path="/adminlandingpage" element={<AdminLandingPage/>}/>
          <Route path="/adminproductpage" element={<AdminProductPage/>}/>
          <Route path="/admincategorypage" element={<AdminCategoryPage/>}/>
          <Route path="/adminbrandpage" element={<AdminBrandPage/>}/>
          <Route path="/addproductpage" element={<AddProductPage/>}/>
          <Route path="/addcategorypage" element={<AddCategoryPage/>}/>
          <Route path="/addbrandpage" element={<AddBrandPage/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
