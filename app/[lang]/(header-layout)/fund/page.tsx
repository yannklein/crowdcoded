import React from 'react';

// import CompletePayment from '@components/CompletePayment';
import CheckoutStripe from '@components/CheckoutStripe';
import { getDictionary } from '@/app/[lang]/dictionaries';
import ReactMarkdown from 'react-markdown';

const FundPage = async ({
  searchParams: { amount, id, title },
  params: { lang }
}) => {
  const dict = await getDictionary(lang);
  
  const amountInt = parseInt(amount || '0');
  // console.log('The converted amount', convertSubCurrency(amountInt));

  return (
    <>
      <div>
        <ReactMarkdown className="prose-strong:text-coralBlue prose-strong:font-normal lg:prose-h1:inline text-4xl lg:text-6xl text-center my-6 lg:my-10">
          {dict.fund.title}
        </ReactMarkdown>
      </div>

      <CheckoutStripe
        dict={dict}
        amount={amountInt}
        projectId={id}
        projectName={title}
      />
      {/* <CompletePayment /> */}
    </>
  );
};

export default FundPage;
