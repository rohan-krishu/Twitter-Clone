import { createSlice } from '@reduxjs/toolkit'

// const initialState = false

// const [data,setData] = useState('')
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userName: '',
        phone: '',
        email: '',
        month: '',
        day:'',
        year:''
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
        setDay: ((state, action) => {
            state.day = action.payload
        }),
        setMonth: ((state, action) => {
            state.month = action.payload
        }),
        setYear: ((state, action) => {
            state.year = action.payload
        }),

    }
})

const { setDay, setPhone, setEmail, setUserName, setMonth, setYear } = authSlice.actions

export default authSlice.reducer

export { setDay, setPhone, setEmail, setUserName, setMonth, setYear } 