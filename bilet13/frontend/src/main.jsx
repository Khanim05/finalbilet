import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import persistor, { store } from './redux/store/Store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
             <App />
        </PersistGate>
       
    </Provider>
    
    </BrowserRouter>
    
  
)
