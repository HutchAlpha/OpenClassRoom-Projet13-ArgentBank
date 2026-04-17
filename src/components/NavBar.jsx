import { Link, useNavigate } from 'react-router-dom'

function NavBar({ isLoggedIn, userName, onSignOut }) {
  const navigate = useNavigate()

  const handleSignOut = () => {
    if (onSignOut) onSignOut()
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
            <button className="main-nav-item main-nav-item-btn" onClick={handleSignOut}>
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

export default NavBar
