import { useState } from 'react'
import mockAccounts from '../data/Compte.json'
import { useSelector, useDispatch } from 'react-redux'
import { GestionConnexion, GestionToken, GestionUser } from '../redux/bankSlice.jsx'
import axios from 'axios'


function UserPage() {

  const [isEditing, setIsEditing] = useState(false)
  const [editFirst, setEditFirst] = useState('')
  const [editLast, setEditLast] = useState('')
  const [validationError, setValidationError] = useState('')

  const firstName = useSelector((state) => state.bank.user.firstName)
  const lastName = useSelector((state) => state.bank.user.lastName)
  const email = useSelector((state) => state.bank.user.email)
  const token = useSelector((state) => state.bank.token)

  const dispatch = useDispatch()


  //! Partie Deconnexion
  // TODO: replace with real token-based auth
  const handleSignOut = () => {
    dispatch(GestionToken(null))
    dispatch(GestionConnexion(false))
    dispatch(
      GestionUser({ firstName: null, lastName: null, email: null})
    )
  }


  //! Partie Update
  const handleSave = async () => {
    // TODO: call PUT /api/v1/user/profile to update name

    const trimmedFirst = editFirst.trim()
    const trimmedLast = editLast.trim()

    if (trimmedFirst.length < 2 || trimmedLast.length < 2) {
      setValidationError('First name and last name must be at least 2 characters long !')
      return
    }

    setValidationError('')

    const donneesUserMaj = await axios.put(
      'http://localhost:3001/api/v1/user/profile',
      {
        firstName: trimmedFirst,
        lastName: trimmedLast,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    dispatch(GestionUser(donneesUserMaj.data.body))
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditFirst(firstName)
    setEditLast(lastName)
    setValidationError('')
    setIsEditing(false)
  }

  const startEditing = () => {
    setEditFirst(firstName)
    setEditLast(lastName)
    setValidationError('')
    setIsEditing(true)
  }

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          {isEditing ? (
            <>
              <h1>Welcome back</h1>
              <div className="edit-name-form">
                <input
                  className="edit-name-input"
                  type="text"
                  value={editFirst}
                  onChange={(e) => setEditFirst(e.target.value)}
                  placeholder="First Name"
                />
                <input
                  className="edit-name-input"
                  type="text"
                  value={editLast}
                  onChange={(e) => setEditLast(e.target.value)}
                  placeholder="Last Name"
                />
                {validationError && (
                  <p className="error-message">{validationError}</p>
                )}
                <div className="edit-name-buttons">
                  <button className="edit-button" onClick={handleSave}>Save</button>
                  <button className="edit-button" onClick={handleCancel}>Cancel</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1>Welcome back<br />{firstName} {lastName}!</h1>
              <button className="edit-button" onClick={startEditing}>Edit Name</button>
            </>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        {mockAccounts.map((account) => (
          <section key={account.id} className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">{account.title}</h3>
              <p className="account-amount">{account.amount}</p>
              <p className="account-amount-description">{account.description}</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        ))}
      </main>
    </>
  )
}

export default UserPage