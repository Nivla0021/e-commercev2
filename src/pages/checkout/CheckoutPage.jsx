import axios from 'axios'
import { useEffect, useState } from 'react'
import './CheckoutHeader.css'
import './CheckoutPage.css'
import { CheckoutHeader } from './CheckoutHeader'
import { OrderSummary } from './OrderSummary'
import { PaymentSummary } from './PaymentSummary'

export function CheckoutPage({cart, loadCart}) {
  const [deliveryOptions, setDeliveryOptions] = useState([])
  const [paymentSummary, setPaymentSummary] = useState(null)

  useEffect(() => {

    const fetchCheckoutData = async () => {
      const deliveryOptionsResponse = await axios.get('api/delivery-options?expand=estimatedDeliveryTime')
      setDeliveryOptions(deliveryOptionsResponse.data)
    }

    fetchCheckoutData()
  }, [])

  useEffect(() => {
    const fetchPaymentSummary = async () => {
      const paymentSummaryResponse = await axios.get('api/payment-summary')
      setPaymentSummary(paymentSummaryResponse.data)
    }
    fetchPaymentSummary()
  }, [cart])

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="/cart.png" />
      <CheckoutHeader />

    <div className="checkout-page">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
        <OrderSummary 
          cart={cart} 
          loadCart={loadCart}
          deliveryOptions={deliveryOptions} 
        />

        <PaymentSummary
          paymentSummary={paymentSummary}
          loadCart={loadCart}
        />
      </div>
    </div>
    </>
  )
}