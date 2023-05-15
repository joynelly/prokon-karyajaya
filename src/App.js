import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './webpage/LandingPage/LandingPage';
import AboutUsPage from './webpage/AboutUsPage/AboutUsPage';
import ProductPage from './webpage/ProductPage/ProductPage';
import DetailProductPage from './webpage/DetailProductPage/DetailProductPage';
import JasaPage from './webpage/JasaPage/JasaPage';
import DetailJasaPage from './webpage/DetailJasaPage/DetailProductPage';
import AdminLoginPage from './webpage/AdminLoginPage/AdminLoginPage';
import AdminLandingPage from './webpage/AdminLandingPage/AdminLandingPage';
import AdminProductPage from './webpage/AdminProductPage/AdminProductPage';
import AdminCategoryPage from './webpage/AdminCategoryPage/AdminCategoryPage';
import AdminBrandPage from './webpage/AdminBrandPage/AdminBrandPage';
import AddProductPage from './webpage/AdminProductPage/AddProductPage';
import AddCategoryPage from './webpage/AdminCategoryPage/AddCategoryPage';
import AddBrandPage from './webpage/AdminBrandPage/AddBrandPage';
import ListPeminjaman from './webpage/PeminjamanPage/ListPeminjaman';
import ListPenjualan from './webpage/PenjualanPage/ListPenjualan';
import AddPeminjaman from './webpage/PeminjamanPage/AddPeminjaman';
import AddPenjualan from './webpage/PenjualanPage/AddPenjualan';
import UpdatePenjualan from './webpage/PenjualanPage/UpdatePenjualan';
import UpdatePeminjaman from './webpage/PeminjamanPage/UpdatePeminjaman';
import UpdateProduct from './webpage/AdminProductPage/UpdateProductPage';
import UpdateCategory from './webpage/AdminCategoryPage/UpdateCategoryPage';
import UpdateBrand from './webpage/AdminBrandPage/UpdateBrandPage';
import AdminDetailProduct from './webpage/AdminProductPage/AdminDetailProductPage';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading Karyajaya...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/detailproduct" element={<DetailProductPage />} />
          <Route path="/jasa" element={<JasaPage />} />
          <Route path="/detailjasa" element={<DetailJasaPage />} />
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/adminlandingpage" element={<AdminLandingPage />} />
          <Route path="/adminproductpage" element={<AdminProductPage />} />
          <Route path="/adminproductpage/:id" element={<AdminDetailProduct />} />
          <Route path="/admincategorypage" element={<AdminCategoryPage />} />
          <Route path="/adminbrandpage" element={<AdminBrandPage />} />
          <Route path="/addproductpage" element={<AddProductPage />} />
          <Route path="/addcategorypage" element={<AddCategoryPage />} />
          <Route path="/addbrandpage" element={<AddBrandPage />} />
          <Route path="/adminpeminjaman" element={<ListPeminjaman />} />
          <Route path="/adminpenjualan" element={<ListPenjualan />} />
          <Route path="/addpeminjaman" element={<AddPeminjaman />} />
          <Route path="/addpenjualan" element={<AddPenjualan />} />
          <Route path="/updatepenjualan/:id" element={<UpdatePenjualan />} />
          <Route path="/updatepeminjaman/:id" element={<UpdatePeminjaman />} />
          <Route path='/updateproduct/:id' element={<UpdateProduct />} />
          <Route path='/updatecategory/:id' element={<UpdateCategory />} />
          <Route path='/updatebrand/:id' element={<UpdateBrand />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
