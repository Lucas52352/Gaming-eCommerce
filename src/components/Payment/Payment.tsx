import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement } from '@stripe/react-stripe-js'
function Payment() {

    const stripePromise = loadStripe("pk_test_51NORIxCelYUlowq6q2AGvya8lJ8xQvmoU2Q7lkwxaF4Kj0lvfi7ingHgn6pTysiVlAyTgfd1p0r05QAcGDFvktSB00g4xOI53P")
  return (
    <Elements stripe={stripePromise}>
        <form>
            <CardElement/>
        </form>
    </Elements>
  )
}

export default Payment