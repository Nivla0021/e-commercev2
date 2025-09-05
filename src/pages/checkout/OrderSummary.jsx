import { CartItemDetails } from './CartItemDetails'
import { DeliveryDate } from './DeliveryDate'
import { DeliveryOptions } from './DeliveryOptions'

export function OrderSummary( {cart, deliveryOptions, loadCart} ) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {

        const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
          return deliveryOption.id === cartItem.deliveryOptionId
        })  

        return (
          <div key={cartItem.productId} className="cart-item-container">
            <DeliveryDate 
              selectedDeliveryOption={selectedDeliveryOption} 
            />

            <div className="cart-item-details-grid">
              <img 
                className="product-image"
                src={cartItem.product.image} 
              />

              <CartItemDetails 
                cartItem={cartItem}
                loadCart={loadCart}
              />

              <DeliveryOptions 
                cartItem={cartItem}
                loadCart={loadCart} 
                deliveryOptions={deliveryOptions} 
              />
            </div>
          </div>
        )
      })}
          
    </div>
  )
}