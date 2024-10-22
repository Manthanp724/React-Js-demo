import {createReducer} from '@reduxjs/toolkit'

const initalize = {
    
    c: 20, 
};

export const customReducer = createReducer(initalize, (builder) => {
    builder
        .addCase('increment', (state) => {
            state.c += 1;
        })
        .addCase('decrement', (state) => {
            state.c -= 1;
        })
        .addCase('IncrementByValue', (state, action) => {
            state.c += action.payload;
        })
        .addCase('DecrementByValue', (state, action) => {
            state.c -= action.payload;
        });
});

