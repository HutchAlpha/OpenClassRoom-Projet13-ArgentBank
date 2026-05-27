import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/main.css'

import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import { Provider } from 'react-redux'
import store from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}      <>
        <Header />
        <App />
        <Footer />
      </>
    {/* </Provider> */}
  </StrictMode>
)