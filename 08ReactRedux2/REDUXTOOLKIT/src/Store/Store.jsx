import {configureStore} from '@reduxjs/toolkit'
import { customReducer } from './Reducer'
export const store = configureStore({
    reducer : {
        customReducer: customReducer,
    }
})

