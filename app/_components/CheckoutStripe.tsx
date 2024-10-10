'use client';

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import FormStripe from './FormStripe';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY == undefined) {
  throw new Error('Stripe public key is not set');
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const CheckoutStripe = ({
  dict,
  amount,
  projectId,
  projectName
}: {
  dict: any;
  amount: number;
  projectId: string;
  projectName: string;
}) => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: 'payment',
        amount: amount,
        currency: 'jpy'
      }}
    >
      <FormStripe
        dict={dict}
        amount={amount}
        projectId={projectId}
        projectName={projectName}
      />
    </Elements>
  );
};

export default CheckoutStripe;
