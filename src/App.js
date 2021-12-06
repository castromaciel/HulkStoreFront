import { Routes, Route } from 'react-router';
import Login from './Components/Login/Login'
import HomePage from './Pages/HomePage'
import InventoryPage from './Pages/InventoryPage';
import AddProductsPage from './Pages/AddProductsPage';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/inventory' element={<InventoryPage/>} />
      <Route path='/addproduct' element={<AddProductsPage/>} />
      <Route path='/cart' element={<CartPage />} />
    </Routes>
  )
}

export default App;
