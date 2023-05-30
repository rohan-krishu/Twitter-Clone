import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

// const initialState = false

// const [data,setData] = useState('')
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userName: '',
        phone: '',
        email: '',
        date: '',
    }, //initialValue

    reducers: {  //settlerFunction
        setUserName: ((state, action) => {
            state.userName = action.payload
        }),
        setPhone: ((state, action) => {
            state.phone = action.payload
        }),
        setEmail: ((state, action) => {
            state.email = action.payload
        }),
        setDate: ((state, action) => {
            state.date = action.payload
        }),

    }
})

const { setDate, setPhone, setEmail, setUserName } = authSlice.actions

export default authSlice.reducer

export { setDate, setPhone, setEmail, setUserName } 