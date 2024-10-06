'use client';

import React, { useState, useEffect } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement
} from '@stripe/react-stripe-js';
import { convertSubCurrency } from '@/lib/convertSubCurrency';

const CheckoutStripe = ({ amount, projectId, projectName }: { amount: number, projectId: string, projectName: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessages, setErrorMessages] = useState<string>();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [donator, setDonator] = useState('');

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
      console.log(data);
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
        return_url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/send-confirmation?amount=${amount}&to=${email}&name=${donator}&projectId=${projectId}&projectName=${projectName}`
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
      className="bg-cream p-4 sm:p-12 w-3/4 mx-auto rounded-md my-10"
    >
      <div className="mb-3">
        <label htmlFor="email">Your e-mail</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="p-2 w-full" type="email" name="email" placeholder="adriana@crowdcoded.org"/>
      </div>
      <div className="mb-3">
        <label htmlFor="donator">Your name (optional)</label>
        <input value={donator} onChange={(e) => setDonator(e.target.value)} id="donator" className="p-2 w-full" type="text" name="donator" placeholder="Adriana Ito" />
      </div>
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
