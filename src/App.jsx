import { Routes, Route } from 'react-router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { HomePage } from './pages/homepage/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrderPage } from './pages/orders/OrderPage'
import { TrackingPage } from './pages/tracking/TrackingPage'
import { PageNotFound } from './pages/page-not-found/PageNotFound'

import './App.css'

function App() {
  const [cart, setCart] = useState([])

  const loadCart = async () => {
      const response = await axios.get('api/cart-items?expand=product')
      setCart(response.data)
    }

  useEffect(() => {
    
    loadCart()
  }, [])

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrderPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
