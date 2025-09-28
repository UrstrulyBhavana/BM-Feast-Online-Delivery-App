import React, { useContext, useRef, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import Swal from 'sweetalert2';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  phone: '',
};

export default function PlaceOrder() {
  const { getTotalCartAmount, clearCart } = useContext(StoreContext);
  const total = getTotalCartAmount();

  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.street ||
      !form.city ||
      !form.state ||
      !form.zip ||
      !form.country ||
      !form.phone
    ) return 'Please fill in all fields.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.';
    if (!/^\d{5,6}$/.test(form.zip)) return 'Please enter a valid ZIP/Pin code.';
    if (!/^\+?\d{7,15}$/.test(form.phone.replace(/\s|-/g, ''))) return 'Please enter a valid phone number.';
    return null;
  };

  const handleProceedToPayment = async () => {
    if (isSubmitting) return;

    if (total === 0) {
      await Swal.fire({
        title: 'Cart is Empty!',
        text: 'Please add items to your cart before proceeding.',
        icon: 'warning',
        confirmButtonText: 'Go Back',
        confirmButtonColor: '#ff6347',
        scrollbarPadding: false,
        heightAuto: false,
      });
      return;
    }

    const err = validate();
    if (err) {
      await Swal.fire({
        title: 'Incomplete Details',
        text: err,
        icon: 'info',
        confirmButtonText: 'Okay',
        confirmButtonColor: '#ff6347',
        scrollbarPadding: false,
        heightAuto: false,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await Swal.fire({
        title: 'Order Placed Successfully!',
        text: 'Your delicious food will arrive shortly.',
        icon: 'success',
        confirmButtonText: 'Okay',
        confirmButtonColor: '#ff6347',
        scrollbarPadding: false,
        heightAuto: false,
      });

      // clear cart + form after success
      clearCart();
      setForm(initialForm);
      if (formRef.current) formRef.current.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const delivery = total === 0 ? 0 : 2;
  const grandTotal = total + delivery;
  const fmt = (n) => `$${n}`;

  return (
    <form className="place-order" ref={formRef} onSubmit={(e) => e.preventDefault()}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input
            name="firstName"
            value={form.firstName}
            onChange={onChange}
            type="text"
            placeholder="First Name"
            autoComplete="given-name"
          />
          <input
            name="lastName"
            value={form.lastName}
            onChange={onChange}
            type="text"
            placeholder="Last Name"
            autoComplete="family-name"
          />
        </div>

        <input
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          placeholder="Email Address"
          autoComplete="email"
        />
        <input
          name="street"
          value={form.street}
          onChange={onChange}
          type="text"
          placeholder="Street"
          autoComplete="address-line1"
        />

        <div className="multi-fields">
          <input
            name="city"
            value={form.city}
            onChange={onChange}
            type="text"
            placeholder="City"
            autoComplete="address-level2"
          />
          <input
            name="state"
            value={form.state}
            onChange={onChange}
            type="text"
            placeholder="State"
            autoComplete="address-level1"
          />
        </div>

        <div className="multi-fields">
          <input
            name="zip"
            value={form.zip}
            onChange={onChange}
            type="text"
            inputMode="numeric"
            placeholder="Zip / Pin Code"
            autoComplete="postal-code"
          />
          <input
            name="country"
            value={form.country}
            onChange={onChange}
            type="text"
            placeholder="Country"
            autoComplete="country-name"
          />
        </div>

        <input
          name="phone"
          value={form.phone}
          onChange={onChange}
          type="tel"
          inputMode="tel"
          placeholder="Phone"
          autoComplete="tel"
        />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>{fmt(total)}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p><p>{fmt(delivery)}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>{fmt(grandTotal)}</b></div>
          </div>

          <button
            type="button"
            onClick={handleProceedToPayment}
            disabled={total === 0 || isSubmitting}
            aria-disabled={total === 0 || isSubmitting}
          >
            {isSubmitting ? 'PROCESSING…' : 'PROCEED TO PAYMENT'}
          </button>
        </div>
      </div>
    </form>
  );
}
