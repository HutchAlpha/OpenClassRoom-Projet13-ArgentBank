import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { GestionToken, GestionConnexion, GestionUser } from '../redux/bankSlice'

function SignInPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    //! Connexion + Récupération du token JWT
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        {
          email: username,
          password: password,
        }
      )

      const token = response.data.body.token

      console.log(response.data)

      localStorage.setItem('token', token)

      //!Envoie a Redux 
      dispatch(GestionToken(token))
      dispatch(GestionConnexion(true))

      //! Récupération des données de l'utilisateur
      const donneesUser = await axios.get(
        'http://localhost:3001/api/v1/user/profile', 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }) 
      
      console.log(donneesUser.data)
      
      //!Envoie a Redux 
      dispatch(GestionUser(donneesUser.data.body))

      navigate('/user')

    } catch (error) {
     console.log('LOGIN ERROR:', error.response?.data || error.message)    
    }
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  )
}

export default SignInPage