import React, { useState } from 'react'

const Contact = () => {
  const [data,setData] = useState({
    fullname : "" ,
    number : "",
    email : "",
    message : ""
  })

  const  storeValue = (e) => {
    setData((prevalue)=>{
      return {...prevalue,
      [e.target.name] : e.target.value}
    })
  }

  const submitFunction = (e) => {
    e.preventDefault()
   
    alert(`your data is send to the company :-
    yourname-- ${data.fullname} 
    number-- ${data.number} 
    Email-- ${data.email} and
    Your message-- ${data.message}`)
  }

  const style={
    backgroundColor : "transparent",
    display:"flex",
    flexDirection : 'column',
    // width : '40vw',
    height : '70vh',
    justifyContent : "center",
    color:"white",
    padding:'2rem',
    fontSize:'large',
    textShadow:'2px 5px 5px black'
    
  }
  const style2={
   display:'flex',
   justifyContent:'center',

  }

  const inputstyle={
    border:'none',
    borderRadius:'10px',
    textShadow: '1px 1px 5px red',
    boxShadow : '1px 4px 10px red',
    padding: '0.5em',
    marginBottom:'0.5rem',

  }
  return (
    <div  style={style2}>
      <form onSubmit={submitFunction}style={style}>
      <label htmlFor="fullname"  className='form-label'>FullName</label>
      <input type="text" 
      className="form-control form-control-lg"
      id='fullname'
      name='fullname'
      value={data.fullname} 
      onChange={storeValue}
      style={inputstyle}/>

      <label htmlFor="number" className='form-label'>phone number</label>
      <input type="number" 
      className="form-control form-control-lg"
      id='number' 
      name='number'
      value={data.number}
      onChange={storeValue}
      style={inputstyle}/>

      <label htmlFor="email" className='form-label'>Email</label>
      <input type="email" 
      className="form-control form-control-lg"
      id='email' 
      name='email' 
      value={data.email}
      onChange={storeValue}
      style={inputstyle}/>

      <label htmlFor="message" className='form-label'>Message</label>
      <textarea id="message" cols="30" rows="10"
      placeholder='enter your message here' 
      className="form-control form-control-lg"
      name="message"
      value={data.message}
      onChange={storeValue}
      style={inputstyle}></textarea>
      <button type='submit'  style={inputstyle}>sumbit</button>
      </form>
    </div>
  )
}

export default Contact