import { createSlice } from "@reduxjs/toolkit";

const savedToken = localStorage.getItem("token");

const bankSlice = createSlice({
    name: "bank",
    initialState: {
        user: {
            firstName: null,
            lastName: null,
            email: null,
        },
        token: savedToken || null,
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

            if (action.payload) {
                localStorage.setItem("token", action.payload)
            } else {
                localStorage.removeItem("token")
            }
        },

        //! État de connexion
        GestionConnexion(state, action) {
            state.isLoggedIn = action.payload
        }
    }
})


export const { GestionUser, GestionToken, GestionConnexion } = bankSlice.actions


export default bankSlice.reducer
