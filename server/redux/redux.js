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
        GestionUser(state, action) {},

        //Token JWT
        GestionToken(state, action) {},

        //état de connexion
        GestionConnexion(state, action) {}
        }
})
console.log(User)
export const { } = BankSlice.actions