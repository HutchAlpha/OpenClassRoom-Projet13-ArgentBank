import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { GestionConnexion, GestionToken, GestionUser } from '../redux/bankSlice.jsx'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state) => state.bank.isLoggedIn)
  const userName = useSelector((state) => state.bank.user.firstName)
  const token = useSelector((state) => state.bank.token)

  //! Sauvegarde du token dans le localStorage pour rendre la session persistante
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  //! Partie Deconnexion
  const handleSignOut = () => {
    console.log('User signed out')

    dispatch(GestionToken(null))
    dispatch(GestionUser({ firstName: null, lastName: null, email: null }))
    dispatch(GestionConnexion(false))

    localStorage.removeItem('token')

    navigate('/')
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {isLoggedIn ? (
          <>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {' '}{userName}
            </Link>

            <button
              className="main-nav-item main-nav-item-btn"
              onClick={handleSignOut}
            >
              <i className="fa fa-sign-out"></i>
              {' '}Sign Out
            </button>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            {' '}Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Header