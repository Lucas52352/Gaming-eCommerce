
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux/store';
import './index.css';


ReactDOM.render(
  <Auth0Provider
  domain="dev-zlnjdju728eaecdq.us.auth0.com"
  clientId="ipVtGdvuEvGmfC7CJ2epvbZHlAqJIv8Q"
  authorizationParams={{
    redirect_uri: "http://localhost:5173/home"
  }}
>

<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
</Auth0Provider>,
  document.getElementById('root')
);