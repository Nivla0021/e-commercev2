import { moneyConvert } from "../../utils/money"
export function CartItemDetails( {cartItem} ) {
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
          Quantity: <span className="quantity-label">{cartItem.product.quantity}</span>
        </span>
        <span className="update-quantity-link link-primary">
          Update
        </span>
        <span className="delete-quantity-link link-primary">
          Delete
        </span>
      </div>
    </div>
  )
}