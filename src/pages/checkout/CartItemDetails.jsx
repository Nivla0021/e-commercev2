import axios from "axios"
import { useState } from "react"
import { moneyConvert } from "../../utils/money"
export function CartItemDetails( {cartItem, loadCart} ) {

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`)  
    await loadCart()
  }
  const updateQuantity = async () => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity: Number(quantity)
    })  
    await loadCart()
    setShowInput(false)
  }

  const [showInput, setShowInput] = useState(false)
  const [quantity, setQuantity] = useState(cartItem.quantity)

  return (
    <div className="cart-item-details">
      <div className="product-name">
        {cartItem.product.name}
      </div>
      <div className="product-price">
        {moneyConvert(cartItem.product.priceCents)}
      </div>
      <div className="product-quantity">
        <span>
          Quantity: 
          <input 
            className={`quantity-input ${showInput ? "visible" : ""}`} 
            type="text" 
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && quantity !== "") {
                updateQuantity()
              }else if (event.key === 'Escape') {
                setShowInput(false)
                setQuantity(cartItem.quantity)
              }
            }}
          />
          <span className="quantity-label">{cartItem.quantity}</span>
        </span>
        <span className="update-quantity-link link-primary"
          onClick={() => {
            if (showInput && quantity !== "") {
              updateQuantity()
            }else{
              setShowInput(!showInput)
            }
          }}>
          Update
        </span>
        <span className="delete-quantity-link link-primary"
          onClick={deleteCartItem}
        >
          Delete
        </span>
      </div>
    </div>
  )
}