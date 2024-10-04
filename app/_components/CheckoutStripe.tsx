'use client';

import React, { useState, useEffect } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement
} from '@stripe/react-stripe-js';
import { convertSubCurrency } from '@/lib/convertSubCurrency';

const CheckoutStripe = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessages, setErrorMessages] = useState<string>();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchClientSecret = async () => {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: amount })
      });
      const data = await response.json();
      setClientSecret(data.client_secret);
      // console.log(data);
    };
    fetchClientSecret();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessages(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?amount=${amount}`
      }
    });

    if (error) {
      setErrorMessages(error.message);
    } else {
      // TODO: redirect to success page
    }
    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    // TODO: Improve loading state
    return <div>Loading...</div>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-cream p-12 w-3/4 mx-auto rounded-md my-10"
    >
      {clientSecret && <PaymentElement />}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="btn-primary w-full mt-4"
      >
        {loading ? 'Loading...' : `Contribute with ¥${amount}`}
      </button>
      {errorMessages && <div>{errorMessages}</div>}
    </form>
  );
};

export default CheckoutStripe;
