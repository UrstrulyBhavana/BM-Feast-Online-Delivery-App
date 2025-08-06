import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import Swal from 'sweetalert2';

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  const handleProceedToPayment = () => {
  const total = getTotalCartAmount();
  if (total === 0) {
    Swal.fire({
      title: 'Cart is Empty!',
      text: 'Please add items to your cart before proceeding.',
      icon: 'warning',
      confirmButtonText: 'Go Back',
      confirmButtonColor: '#ff6347',
    });
  } else {
    Swal.fire({
      title: 'Order Placed Successfully!',
      text: 'Your delicious food will arrive shortly.',
      icon: 'success',
      confirmButtonText: 'Okay',
      confirmButtonColor: '#ff6347',
    });
  }
};

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type='email' placeholder='Email Address' />
        <input type='text' placeholder='Street' />
        <div className='multi-fields'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip Code' />
          <input type='text' placeholder='Country' />
        </div>
        <input type='text' placeholder='Phone' />
      </div>

      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="button" onClick={handleProceedToPayment}>
            PROCEED TO PAYMENT
          </button>

        </div>

      </div>
    </form>
  )
}

export default PlaceOrder