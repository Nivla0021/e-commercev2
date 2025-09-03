import axios from "axios"
import {useState} from "react"
import { moneyConvert } from "../../utils/money"
import CheckMark from '../../assets/images/icons/checkmark.png'
export function Product({product, loadCart}) {
  const [quantity, setQuantity] = useState(1)
  const [showMessage, setShowMessage] = useState(false)

  const handleAddToCart = () => {
    setShowMessage(true);

    // Hide after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const addToCart = async () => {
    await axios.post('/api/cart-items', {
      productId: product.id,
      quantity
    })
    await loadCart()
  }

  

  const quanitySelected = (event) => {
    const quantitySelected = Number(event.target.value)
    setQuantity(quantitySelected)
  }
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image"
          src={product.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">
        {product.name}
      </div>

      <div className="product-rating-container">
        <img className="product-rating-stars"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">
        {moneyConvert(product.priceCents)}
      </div>

      <div className="product-quantity-container">
        <select 
          value={quantity}
          onChange={quanitySelected}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className={`added-to-cart ${showMessage ? "visible" : ""}`}>
        <img src={CheckMark} />
        Added
      </div>

      <button className="add-to-cart-button button-primary"
        onClick={() => {
          addToCart()
          handleAddToCart()
        }}>
        Add to Cart
      </button>
    </div>
  )
}