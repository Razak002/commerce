import React from 'react';
import { PaystackButton } from 'paystack-react';

const Payment = () => {
  const publicKey = process.env.REACT_APP_API_KEY

  const paymentSuccess = (response) => {
    console.log('Payment successful!', response);
  };

  const paymentClose = () => {
    console.log('Payment canceled or closed.');
  };

  return (
    <div className=''>
      <p className='text-sm'>Make a Payment</p>
      <div className='bg-green-700 rounded-md'>
        <PaystackButton
          text="Pay Now"
          className="btn text-white"
          callback={paymentSuccess}
          close={paymentClose}
          disabled={false}
          embed={false}
          reference={Math.floor(100 + Math.random() * 100).toString()}
          email="aliyuabdulrazaks539@gmail.com"
          amount={100} // amount in kobo
          paystackkey={publicKey}
          tag="button"
        />
      </div>
    </div>
  );
};

export default Payment;
