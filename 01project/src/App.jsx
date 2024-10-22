import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [characterAllowed , setCharacterAllowed] = useState(false)
  const [password , setPassword] = useState("");


  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str += "1234567890";
    }
    
    if (characterAllowed) {
      str += "!@#$%^&*";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass);

  }, [length , numberAllowed , characterAllowed, setPassword])

  useEffect( () => {
    passwordGenerator()
  }, [length , numberAllowed , characterAllowed, passwordGenerator])

  const passwordRef = useRef(null) // this portion describes how to copy password.

  const copytexttoclipboard = useCallback( () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div style={{fontSize : "13px" , fontWeight : 600 , backgroundColor: "black", color: "white", paddingBottom: "4px", borderRadius : "10px"}}>
      <h1>Password Generator</h1>
      <div>
          <input style={{fontSize : "30px" , fontWeight : 600, borderRadius : "10px"}}
          type='text'
          value={password}
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copytexttoclipboard}  style={{fontSize : "18px" , fontWeight : 600, backgroundColor : "blue", color: "white" }}>Copy</button>
      </div>
      <div>
      <input  
          type='range'
          min={2}
          max={10}
          value={length}
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length : {length} </label>
      </div>
      <div style={{padding : "10px"}}>
      <label> Number : </label>
        <input 
        type='checkbox'
        defaultChecked = {numberAllowed}
        id='numberInput'
        onChange={ () => {setNumberAllowed( (prev) => !prev)}}
        />
      </div>
      <div style={{padding : "10px"}}>
      <label> Character : </label>
        <input 
        type='checkbox'
        defaultChecked = {characterAllowed}
        id='charInput'
        onChange={ () => {setCharacterAllowed( (prev) => !prev)}}
        />
      </div>
      </div>
    </>
  )
}

export default App
