import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState();
  const [success, setSuccess] = useState();
  const [transactionId, setTransactionId] = useState();
  const [clientSecret, setClientSecret] = useState('');
  const { _id, name, email, price } = order;

  useEffect(() => {
    if (price) {
      fetch('https://gigitechbd.herokuapp.com/create-payment-intent', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ price })
      })
        .then(res => res.json())
        .then(data => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }

  }, [price]);



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    setCardError(error?.message || '');
    setSuccess('');
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      },
    );
    if (intentError) {
      setCardError(intentError?.message);
      success('');
    }
    else {
      setCardError('');
      setSuccess('Your payment is completed');
      setTransactionId(paymentIntent.id);
      console.log(transactionId);
      // storage payment on database
      const payment = {
        order: _id,
        transactionId: paymentIntent.id
      }

      fetch(`https://gigitechbd.herokuapp.com/order/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payment)
      }).then(res => res.json())
        .then(data => {
          // 
        })
    }


  }
  return (
    <div className='p-5 border-2'>
      <form className='my-3' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-md btn-primary text-white my-3' type="submit" disabled={!stripe || !clientSecret}>
          Pay Now
        </button>
      </form>
      {cardError && <div className='bg-red-500 text-white p-2 rounded-sm text-center'><p>{cardError}</p></div>}
      {success && <div className='boderp-2 p-2 rounded-sm text-center'>
        <p>{success}</p>
        <p>Your Transaction Id: <span className='text-green-500 font-semibold'>{transactionId}</span></p>
      </div>}
    </div>
  );
};

export default CheckoutForm;