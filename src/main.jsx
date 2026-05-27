import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/main.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import store from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Header />
      <StrictMode>
        <App />
      </StrictMode>
    <Footer />
  </Provider>
)
