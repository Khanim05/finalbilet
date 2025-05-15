import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import persistor, { store } from './redux/store/store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App /> 
        </PersistGate>
       
    </Provider>
    </BrowserRouter>
    

)
