import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

  const navigate = useNavigate()

  const subtotal = getTotalCartAmount();
  const delivery = subtotal === 0 ? 0 : 2;
  const total = subtotal === 0 ? 0 : subtotal + delivery;

  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format;

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-title  cart-items-item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>                 
                  <button
                    type="button"
                    className="cross"
                    aria-label={`Remove ${item.name}`}
                    title={`Remove ${item.name}`}     
                    onClick={() => removeFromCart(item._id)}
                  >
                    ×
                  </button>
                </div>
                <hr />
              </div>
            )
          } else {
            return null;
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{currency(subtotal)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>{currency(delivery)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>{currency(total)}</b>
            </div>
          </div>
          <button
            onClick={() => navigate('/order')}
            disabled={subtotal === 0}
            aria-disabled={subtotal === 0}
            title={subtotal === 0 ? 'Add items to your cart to checkout' : 'Proceed to checkout'}
          >
            PROCEED TO CHECKOUT
          </button>

        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promo code, Enter it here!...</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart