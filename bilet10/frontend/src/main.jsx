import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import persistor, { store } from './redux/store/Store.js';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
   <App />
   </PersistGate>
   </Provider>
   </BrowserRouter>
    
  
)
