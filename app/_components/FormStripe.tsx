'use client';

import React, { useState, useEffect } from 'react';

import {
  useStripe,
  useElements,
  PaymentElement
} from '@stripe/react-stripe-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';


const FromStripe = ({
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
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessages, setErrorMessages] = useState<string>();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [donator, setDonator] = useState('');
  const [showDonator, setShowDonator] = useState('');

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
        className="bg-cream p-4 sm:p-12 lg:w-3/4 lg:mx-auto mx-2 rounded-md my-6 lg:my-10"
      >
        <div className="mb-3 font-light">
          <label htmlFor="email">{dict.fund.checkout.emailTitle}</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="p-2 w-full rounded shadow"
            type="email"
            name="email"
            placeholder="adriana@crowdcoded.org"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="lg:w-1/2">
            <div className="mb-3 font-light">
              <label htmlFor="donator">{dict.fund.checkout.nameTitle}</label>
              <input
                value={donator}
                onChange={(e) => setDonator(e.target.value)}
                id="donator"
                className="p-2 w-full rounded shadow"
                type="text"
                name="donator"
                placeholder="Adriana Ito"
              />
            </div>
          </div>
          <div className="flex items-center lg:w-1/2">
            <div className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                id="show-donator"
                className="h-7 w-8 accent-coralBlue shadow"
                value={showDonator}
                onChange={(e) => setShowDonator(e.target.value)}
              />
              <label
                htmlFor="show-donator"
                className="inline-flex items-center justify-between w-full py-2 px-4 text-gray-500 bg-white border-2 border-gray-200 rounded-md cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 shadow"
              >
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon
                    className="text-coralBlue text-4xl"
                    icon={faAward}
                  />
                  <div>
                    <div className="text-md font-semibold">
                      {dict.fund.checkout.supporterTitle}
                    </div>
                    <div className="text-sm">
                      {dict.fund.checkout.supporterText}
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
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

export default FromStripe;
