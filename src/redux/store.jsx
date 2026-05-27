import { createSlice } from "@reduxjs/toolkit";

function store() {

    const BankSlice = createSlice({
        name: "bank",
        initialState: {
            user: {
                firstName: null,
                lastName: null,
                email: null,
                password: null
            },
            token: null,
            isLoggedIn: false
        },

        reducers: { 

            //!Données de l'utilisateur
            GestionUser(state, action) {
                state.user = action.payload
            },

            //!Token JWT
            GestionToken(state, action) {
                state.token = action.payload
            },

            //!État de connexion
            GestionConnexion(state, action) {
                state.isLoggedIn = action.payload

            }
        }
    })
}

export default store