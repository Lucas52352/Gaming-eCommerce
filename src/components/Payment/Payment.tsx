import { useState, useEffect } from 'react';
import { CreatePaymentMethodData } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css';
import { useSelector } from 'react-redux';
import img from '../NavBar/assets/Radtek1.png';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function Payment() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    adress: '',
    postal: 0,
  });
  const { user }: any = useAuth0();
  const [dataUser, setDataUser] = useState<DataUser>({
    id: 0,
    name: '',
    email: '',
    picture: '',
    createdAt: '',
    updatedAt: '',
  });

  const email: string = user?.email;

  const local = JSON.parse(localStorage.getItem('carrito'));

  const idProds: number[] = [];
  local.forEach((element: any) => idProds.push(element.prodById[0].id));

  interface DataUser {
    id: number;
    name: string;
    email: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
  }

  useEffect(() => {
    getDataUser();
  }, [email]);

  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector((state: any) => state.cart.cartProducts);

  const total = cart.map((item: any) => {
    return item.product.map((prod: any) => {
      return prod.price * item.cant;
    });
  });
  const correo: any = { email: email };
  console.log(correo, 'CORREO');

  const getDataUser = async () => {
    const response = await axios.post(
      `http://localhost:3001/user/email`,
      correo
    );
    console.log(response.data);
    setDataUser(response.data);
  };

  const buyProduct = async () => {
    await axios.post(`http://localhost:3001/history/create/${dataUser.id}`, {
      id: idProds,
    });
  };

  const handleValue = (event: any) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  let numbers = 0;
  for (let i = 0; i < total.length; i++) {
    const element = total[i];
    if (element) {
      numbers += Math.floor(element[0]);
    }
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: 'card',
      card: elements!.getElement(CardElement),
    } as CreatePaymentMethodData);

    if (!error) {
      console.log(paymentMethod);
      const { id } = paymentMethod;

      const { data } = await axios.post(
        'http://localhost:3001/create-checkout-session',
        {
          id,
          amount: +numbers,
          email: form.email,
          adress: form.adress,
          postal: form.postal,
        }
      );
      console.log(data, 'PAGO EXITOSO');

      elements?.getElement(CardElement)?.clear();
    }
  };

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <div className='labelContainer'>
          <label>
            Name/Last Name:
            <input
              type='text'
              name='name'
              className='inputForm'
              placeholder='Enter your name'
              onChange={handleValue}
            />
          </label>
          <label>
            Email:
            <input
              type='email'
              name='email'
              className='inputForm'
              placeholder='Enter your email'
              onChange={handleValue}
            />
          </label>
          <label>
            Adress:
            <input
              type='text'
              name='adress'
              className='inputForm'
              placeholder='Enter your Adress'
              onChange={handleValue}
            />
          </label>
          <label>
            Postal code:
            <input
              type='number'
              name='postal'
              className='inputForm'
              placeholder='Enter your Postal Code'
              onChange={handleValue}
            />
          </label>
        </div>
        <div className='cardContainer'>
          <CardElement
            options={{
              style: {
                base: {
                  iconColor: 'white',
                  color: 'white',
                  padding: '50px',
                  '::placeholder': {
                    color: '#a3a3a3', // Cambia el color del texto del marcador de posición
                  },
                },
              },
            }}
          />
          <hr className='white' />
        </div>
        <button className='buyBtn' onClick={buyProduct}>
          BUY
        </button>
      </form>
      <div>
        {cart ? (
          <div className='checkout'>
            <img src={img} alt='' height={200} />
            {cart.map((item: any) => {
              return (
                <div className='containerPP'>
                  {item.product.map((prod: any) => {
                    return (
                      <div className='containerCheck'>
                        <p className='checkoutP'>{prod.name}</p>
                        <p className='checkoutP'>x{item.cant}</p>
                        <p className='checkoutP'>${prod.price * item.cant}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <div className='checkoutPTotal'>
              <p className='totalP'>TOTAL: ${+numbers}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Payment;
