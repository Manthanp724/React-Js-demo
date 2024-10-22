import { useState } from 'react'
import './App.css'
import Count from './components/Count'
import { useDispatch } from 'react-redux';



function App() {

  const dispatch = useDispatch()
  

  return (
    <>
      <button onClick={(e) => dispatch({ type : 'Increment'})}>Increment</button>
      <Count/>
      <button onClick={(e) => dispatch({ type : 'Decrement'})} disabled ={Count <-3}>Decrement</button>
    </>
  )
}

export default App
