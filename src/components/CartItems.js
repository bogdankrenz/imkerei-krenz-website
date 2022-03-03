import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import Honeyjar from "../images/honey.png"

const CartItems = () => {
  const { setItemQuantity, removeItem, cartDetails } = useShoppingCart()
  
  const entries = []
    for (const sku in cartDetails) {
    const entry = cartDetails[sku]
    
    const options = []
    for (let quantity = 1; quantity <= 20; ++quantity)
    options.push(<option value={quantity}>{quantity}</option>)

      entries.push(
        <div className="columns is-variable is-3 is-mobile">
          <div className="column is-narrow">
            <figure className="image" style={{ width: '40px' }}>
              <img src={Honeyjar} alt={entry.name} />
            </figure>
          </div>
          <div className="column">
            <h5 className="title is-5">{entry.name}</h5>
            <p className="subtitle is-6 mb-3">{entry.quantity} × 500 g • {entry.formattedValue}</p>
            <div className="select quantity">
            <select
                id="quantity-select"
                defaultValue={entry.quantity}
                onChange={(event) => {setItemQuantity(sku, event.target.value)}}
            >
            {options}
          </select>
            </div>
          </div>
          <div className="column is-narrow">
            <button className="delete is-medium" onClick={() => removeItem(sku)}
            aria-label={`Remove ${entry.name} from your cart`}/>
          </div>
        </div>
    )
  }
  if (entries.length) return entries
  return <div className="notification is-danger is-light">
  <div className="columns is-variable is-2 is-vcentered is-mobile">
    <div className="column is-narrow">
        <figure className="image">
            <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 43C24.2843 43 31 36.2843 31 28C31 19.7157 24.2843 13 16 13C7.71573 13 1 19.7157 1 28C1 36.2843 7.71573 43 16 43Z" stroke="#8B384B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                <path d="M10 34H22" stroke="#8B384B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                <path d="M10 28C11.1046 28 12 27.1046 12 26C12 24.8954 11.1046 24 10 24C8.89543 24 8 24.8954 8 26C8 27.1046 8.89543 28 10 28Z" fill="#8B384B"/>
                <path d="M22 28C23.1046 28 24 27.1046 24 26C24 24.8954 23.1046 24 22 24C20.8954 24 20 24.8954 20 26C20 27.1046 20.8954 28 22 28Z" fill="#8B384B"/>
            </svg>
        </figure>
    </div>
    <div className="column">
      Der Warenkorb ist leer.
    </div>
  </div>
</div>
}
export default CartItems