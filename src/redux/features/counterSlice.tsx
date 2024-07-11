// createSlice : ko used krtay huvay hum slice create krtay hay, e.g: counterSlice, AuthSlice.

import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    Value: number
}

// initialState: hamaray pass kush bhi hosakti hay jo app chaheen. (object {}, array [])
const initialState: CounterState = {
    Value: 0
}

// createSlice ka function hay or is may hum object pass krtay hay.
// createSlice: ki ya 3 define keys hay (name, initialState, reducers)
// reducers: ko hum actions bhi khtay hay, action yani local functions
// initialState ka jo data hay wo humay reducers kay increment kay parameter may milta hay.
// .. jub may increment ko call kroon ga to mughay apni state ko update krna hay, parameter may mughay wo state milay gi or us kay through may is ko update kroon ga.
const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    // actions
    reducers: {
        increment: (state) => {
            state.Value += 1
        },
        decrement: (state) => {
            state.Value -= 1
        },
        // is may hum apni marzi ki amount add kr kay value ko increment kr saktay hay, is may hum value bhejain gay. value kha mil gi phlay parameter may hamesha initialState milti hay or dorsaray parameter may humay action milta hay.
        // yaha hum name kush bhi likh saktay hay q kay ya parameter hay function kay is kay name change bhi ho saktay hay. (state, actions)
        // action kay ander humay payload milta hay.
        // payload : jo bhi value is function say pass krain gay wo is payload may ayee gi, wo (array, number ho string ho kush bhi ho) wo payload kay ander mili gi jo action kay ander hay

        // Simple words
        // counterSlice aik object hay, us object kay ander actions hay or us kay ander 3 values or hay increment, decrement and incrementByAmount.
        // .. or har aik ko separate separate export na krna pray is leyee destructure kya hay.
        IncrementByAmount: (state, actions) => {
            state.Value = actions.payload
        }
    }
})

export const {increment, decrement, IncrementByAmount} = counterSlice.actions

// store may add krnay kay leyee ab hum isay export default krain gay

export default counterSlice.reducer;