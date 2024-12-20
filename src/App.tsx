import { Routes, Route } from 'react-router-dom';
import HomePage from './page/home/HomePage';
import ProductsPage from './page/products/ProductsPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage/>} />
    </Routes>
  )
}

export default App