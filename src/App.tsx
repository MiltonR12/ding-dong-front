import { Routes, Route } from 'react-router-dom';
import HomePage from './page/home/HomePage';
import ProductsPage from './page/products/ProductsPage';
import Navbar from './components/navbar/Navbar';
import LoginPage from './page/public/login/LoginPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  )
}

export default App