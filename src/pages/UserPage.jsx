import { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const mockAccounts = [
  {
    id: 1,
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
  },
  {
    id: 2,
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
  },
  {
    id: 3,
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
  },
]

function UserPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('Tony')
  const [lastName, setLastName] = useState('Jarvis')
  const [editFirst, setEditFirst] = useState(firstName)
  const [editLast, setEditLast] = useState(lastName)

  // TODO: replace with real token-based auth
  const handleSignOut = () => {
    // clear stored token here
  }

  const handleSave = () => {
    // TODO: call PUT /api/v1/user/profile to update name
    setFirstName(editFirst)
    setLastName(editLast)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditFirst(firstName)
    setEditLast(lastName)
    setIsEditing(false)
  }

  const startEditing = () => {
    setEditFirst(firstName)
    setEditLast(lastName)
    setIsEditing(true)
  }

  return (
    <>
      <NavBar isLoggedIn={true} userName={firstName} onSignOut={handleSignOut} />
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
      <Footer />
    </>
  )
}

export default UserPage
