import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import React from 'react';
import './stripe.css'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51N3JDRSExQZ0lqDLNrxOBdn2vVFe1yTuEB41IkUXOwlMy7s3gTijEJZKtB5DH6lM6ctTnWMBcMhWHQ6Rkh92ZMKi00Y8D7UJlc');

export default function Stripepayment() {


    return (
        <Elements stripe={stripePromise}

        >
            <CheckoutForm />
        </Elements>
    );
};