import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name: "bank",
    initialState: {
        user: {
            firstName: null,
            lastName: null,
            email: null,
        },
        token: null,
        isLoggedIn: false
    },

    reducers: { 
        //! Données de l'utilisateur
        GestionUser(state, action) {
            state.user = action.payload
        },

        //! Token JWT
        GestionToken(state, action) {
            state.token = action.payload
        },

        //! État de connexion
        GestionConnexion(state, action) {
            state.isLoggedIn = action.payload
        }
    }
})


export const { GestionUser, GestionToken, GestionConnexion } = bankSlice.actions


export default bankSlice.reducer
