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
    <div>
      <h1>Make a Payment</h1>
      <PaystackButton
        text="Pay Now"
        className="btn"
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
  );
};

export default Payment;
