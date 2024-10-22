import React, { useEffect, useState } from 'react'
import img from '../Images/pic1.svg'
import '../Body/body.css'

const Body = () => {

    const [name, setName] = useState("manthan")
    const [email , setEmail] = useState("manthan12@gmail.com")
    const [text , setText] = useState("Patel")

    const enterName = (e) => {
       setName(e.target.value)
    }

    const enterEmail = (e) => {
       setEmail(e.target.value)
    }

    const enterText = (e) => {
       setText(e.target.value)
    }

    const submitinfo = (event) => {
        event.preventDefault();
        // Handle the form submission
        console.log("Form submitted with data: ", { name, email, text});
    };


  return (
    <>  
    <div className='body-part'>
    <div className="form">
        <form onSubmit={submitinfo}>
            <div className="buttons">
                <button>VIA SUPPORT CHAT</button>
                <button>VIA CALL</button>
            </div>

            <div className="emailbtn">
                <button>VIA EMAIL FORM</button>
            </div>

            <div className="input">
                <input onChange={enterName} value={name}   className='name' type="text" placeholder='Enter Your name' />
                <input onChange={enterEmail} value={email} className='email' type="email" placeholder='Enter Email Address' />
                <input onChange={enterText} value={text} className='text' type="text" placeholder='Text' />
            </div>

            <div className="submit-btn">
                <button onClick={submitinfo}>Submit</button>
            </div>
        </form>

        <p style={{marginTop : '20px'}}>My name is {name} my email id is {email} and surname is {text} </p>
  
    </div>

    <div className="ing">
    <img src={img} className='img1'  style={{height : '450px', width : '450px'}}/>
    </div>
    </div>
    </>
  )
}

export default Body
