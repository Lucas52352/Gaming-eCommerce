
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux/store';
import './index.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe("pk_test_51NORIxCelYUlowq6q2AGvya8lJ8xQvmoU2Q7lkwxaF4Kj0lvfi7ingHgn6pTysiVlAyTgfd1p0r05QAcGDFvktSB00g4xOI53P");


ReactDOM.render(
  <Auth0Provider
  domain="dev-zlnjdju728eaecdq.us.auth0.com"
  clientId="ipVtGdvuEvGmfC7CJ2epvbZHlAqJIv8Q"
  authorizationParams={{
    redirect_uri: "http://localhost:5173/"
  }}
>
<Elements stripe={stripePromise}>

<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </Elements>
</Auth0Provider>,
  document.getElementById('root')
);