import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/store.js'
import { Provider } from 'react-redux'
import ContextComponent from './Context/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <ContextComponent>
  <BrowserRouter> 
    <React.StrictMode>
    <App />
   </React.StrictMode>
  </BrowserRouter>
    </ContextComponent>
  </Provider>
)
