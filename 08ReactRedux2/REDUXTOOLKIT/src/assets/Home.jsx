import React from 'react'
import { useDispatch , useSelector } from 'react-redux';


const Home = () => {

    const dispatch = useDispatch()

    const value = useSelector(state => state.customReducer.c)


    const addBtn = () => {
        dispatch({
            type : 'increment'
        })
    }
    const subBtn = () => {
        dispatch({
            type : 'decrement'
        })
    }
    const addByPayloadBtn = () => {
        dispatch({
            type : 'IncrementByValue',
            payload : 20
        })
    }
    const subByPayloadBtn = () => {
        dispatch({
            type : 'DecrementByValue',
            payload : 10
        })
    }


  return (
    <div>
        <h2>{value}</h2>
        <div style={{display : 'flex' , gap : '10px'}}>
        <button onClick={addByPayloadBtn}>AddValueByPayload: 20</button>
        <button onClick={addBtn}>Increment</button>
        <button onClick={subBtn}>Decrement</button>
        <button onClick={subByPayloadBtn}>SubValueByPayload: 10</button>
        </div>
    </div>
  )
}

export default Home
