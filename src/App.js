import { Routes, Route, Navigate } from 'react-router';
import HomePage from './Pages/HomePage'
import InventoryPage from './Pages/InventoryPage';
import AddProductsPage from './Pages/AddProductsPage';
import CartPage from './Pages/CartPage';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import PurchasePage from './Pages/PurchasePage';

function App() {
  const token = JSON.parse(localStorage.getItem('token'))
  const checkCart = localStorage.getItem('cart');
  const cart = [];
  
  if (!checkCart) localStorage.setItem('cart', JSON.stringify(cart))

  return (
    <Routes>
      <Route exact path='/' element={token? <Navigate from='/' to='/home'/> : <Login />} />
      <Route path="/login" element={token? <Navigate from='/login' exact to='/home'/> : <Login />} />
      <Route path="/register" element={token? <Navigate from='/register' exact to='/home'/> : <Register />} />
      <Route path='/home' element={token? <HomePage/> : <Navigate from='/home' exact to='/'/>} />
      <Route path='/inventory' element={token? <InventoryPage/> : <Navigate from='/inventory' exact to='/'/>} />
      <Route path='/addproduct' element={token? <AddProductsPage/> : <Navigate from='/addproduct' exact to='/'/>} />
      <Route path='/cart' element={token? <CartPage /> : <Navigate from='/cart' exact to='/'/>} />
      <Route path='/cart/purchase' element={token? <PurchasePage /> : <Navigate from='/cart' exact to='/'/>} />
    </Routes>
  )
}

export default App;
