'use client';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// import CompletePayment from '@components/CompletePayment';
import CheckoutStripe from '@components/CheckoutStripe';
import { convertSubCurrency } from '@/lib/convertSubCurrency';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY == undefined) {
  throw new Error('Stripe public key is not set');
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function FundPage({
  searchParams: { amount }
}: {
  searchParams: { amount: string };
}) {
  const amountInt = parseInt(amount || '0');
  console.log('The converted amount', convertSubCurrency(amountInt));

  return (
    <>
      <div>
        <h1>Fund : {amount}</h1>
      </div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: 'payment',
          amount: amountInt,
          currency: 'jpy'
        }}
      >
        <CheckoutStripe amount={amountInt} />
        {/* <CompletePayment /> */}
      </Elements>
    </>
  );
}
