import { Routes, Route } from 'react-router'
import { HomePage } from './pages/homepage/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrderPage } from './pages/orders/OrderPage'
import { TrackingPage } from './pages/tracking/TrackingPage'
import { PageNotFound } from './pages/page-not-found/PageNotFound'

import './App.css'

function App() {
  

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
