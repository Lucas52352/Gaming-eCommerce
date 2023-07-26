import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement } from '@stripe/react-stripe-js'
import "./Payment.css"

function Payment() {

    const stripePromise = loadStripe("pk_test_51NORIxCelYUlowq6q2AGvya8lJ8xQvmoU2Q7lkwxaF4Kj0lvfi7ingHgn6pTysiVlAyTgfd1p0r05QAcGDFvktSB00g4xOI53P")
  return (
    <div className='formContainer'>
      <Elements stripe={stripePromise}>
        <form>
          <div className="labelContainer">
        <label>Name:
            <input type="text" className='inputForm' placeholder='Enter your name'/>
            </label>
            <label>Last Name:
            <input type="text" className='inputForm' placeholder='Enter your LastName'/>
            </label>
              <label>
              Email:
              <input type="email" className='inputForm' placeholder='Enter your email' />
              </label>
            <label>
              Adress:
              <input type="text"  className='inputForm' placeholder='Enter your Adress'/>
            </label>
            <label>
              Postal code:
              <input type="number" className='inputForm' placeholder='Enter your Postal Code' />
              </label>
          </div>
          <div className='cardContainer'>
          <CardElement options={{style:{  base: {
                  iconColor:"white",
                  color: 'white',
                  padding:"50px",
                  '::placeholder': {
                    color: '#a3a3a3', // Cambia el color del texto del marcador de posición
                  }
                }}}}/>
                <hr className='white'/>
          </div>
        </form>
      </Elements>
    </div>
  )
}

export default Payment