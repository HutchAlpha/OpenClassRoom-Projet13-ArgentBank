import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import UserPage from './pages/UserPage'
import Header from './components/Header'
import Footer from './components/Footer'

import { GestionConnexion, GestionUser, GestionToken } from './redux/bankSlice'

function App() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.bank.token)

  //! Sauvegarde du token dans le localStorage pour rendre la session persistante
  useEffect(() => {
    const fetchUserProfile = async () => {
    if (!token) return
      try {
      const donneesUser = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      {},
      {
      headers: {
      Authorization: `Bearer ${token}`,
      },
    }
  )

  dispatch(GestionUser(donneesUser.data.body))
  dispatch(GestionConnexion(true))

  } catch (error) {
    console.log('AUTO LOGIN ERROR:', error.response?.data || error.message)
    dispatch(GestionToken(null))
    dispatch(GestionConnexion(false))
    dispatch(
    GestionUser({firstName: null, lastName: null, email: null })
    )
  }
}

fetchUserProfile()
}, [token, dispatch])

return (
<>
<Header />

<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/login" element={<SignInPage />} />
<Route path="/user" element={<UserPage />} />
</Routes>

<Footer />
</>
)
}

export default App