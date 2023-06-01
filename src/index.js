import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { store } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from './redux/store';
import {App} from './components/App';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>

  <BrowserRouter basename="/so_yummy">
        <App />
      </BrowserRouter>

  // </Provider>
);
