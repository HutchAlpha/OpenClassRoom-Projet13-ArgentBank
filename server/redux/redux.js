import { createSlice } from "@reduxjs/toolkit";
const User = require('../database/models/userModel')

const BankSlice = createSlice({
    name: "bank",
    initialState: {
        user: {
            firstName: serviceData.firstName,
            lastName: serviceData.lastName,
            email: serviceData.email,
            password: hashPassword
        },
        token: null,
        isLoggedIn: false
    },

    reducers: { 

        //Données de l'utilisateur
        GestionUser(state, action) {
            state.user = action.payload

        },

        //Token JWT
        GestionToken(state, action) {
            state.token = action.payload
        },

        //état de connexion
        GestionConnexion(state, action) {
            state.isLoggedIn = action.payload

        }
    }
})
console.log(User)
export const { } = BankSlice.actions