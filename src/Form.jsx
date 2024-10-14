import React, { useState } from 'react'

const Form = () => {
let [inputvalue,setInputvalue]=useState("")

let [todolist,setTodolist]=useState([])
console.log(todolist);

let addtodo =()=>{
    if (inputvalue ==="") {
        alert('write something')
        return
    }
    setTodolist((pren)=>[...pren,inputvalue])
    setInputvalue("")  
}
const [username,setUsername]=useState("")
const [userlastname,setuserlastname]=useState("")
const [useremail,setuseremail]=useState("")
const [password,setpassword]=useState("")
const [conformpassword,setconformpassword]=useState("")

const [userNameerr,setuserNameerr]=useState(false);
let [userlastnameerr,setuserlastnameerr]=useState(false)
let [useremailerr,setuseremailerr]=useState(false)
let [passworderr,setpassworderr]=useState(false)
let [conformpassworderr,setconformpassworderr]=useState(false)

let singinhandler=(ev)=>{
    if (username === "") {
        setuserNameerr(true);
      } 
       if (userlastname === "") {
        setuserlastnameerr(true);
      } 
      
    if (useremail === "") {
        setuseremailerr(true);
      } 
       if (password === "") {
        setpassworderr(true);
      } 
       if (conformpassword === "") {
        setconformpassworderr(true);
      } 
      
      else {
       alert('its worked successfully')
      }
      
      
ev.preventDefault();
console.log(username);

}

  return (
  <>
  
<form onSubmit={singinhandler} className="form ">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input style={{border: userNameerr &&'2px solid red',}} value={username} onChange={(ex)=>{setUsername(ex.target.value)

            }}  placeholder="" type="text" className="input "/>
            <span>Firstname</span>
            {userNameerr && <span>something wrong</span>}
        </label>

        <label>
            <input style={{border: userlastnameerr &&'2px solid red',}} value={userlastname} onChange={(exE)=>{setuserlastname(exE.target.value)

}}
             placeholder="" type="text" className="input"/>
            <span>Lastname</span>
       { userlastnameerr && <span>something wrong</span>}
        </label>
    </div>  
            
    <label>
        <input style={{border: useremailerr &&'2px solid red',}} value={useremail} onChange={(exE)=>{setuseremail(exE.target.value)

}}  
        placeholder="" type="email" className="input"/>
        <span>Email</span>
        {useremailerr && <span>something wrong</span> }
    </label> 
        
    <label>
        <input style={{border: passworderr &&'2px solid red',}} value={password} onChange={(exE)=>{setpassword(exE.target.value)

}}  
         placeholder="" type="password" className="input"/>
        <span>Password</span>
        {passworderr && <span>something wrong </span>}
    </label>
    <label>
        <input  style={{border: conformpassworderr &&'2px solid red',}} value={conformpassword} onChange={(exE)=>{setconformpassword(exE.target.value)
}}  
         placeholder="" type="password" className="input"/>
        <span>Confirm password</span>
        {conformpassworderr && <span>something wrong </span>}
    </label>
    <button className="submit">Submit</button>
    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
<div >



    {/* <span>+</span> */}
    {/* <h1 className='text-center'>toda App</h1> */}
{/* <div className='d-flex justify-content-center mt-5'>
    <input value={inputvalue}
     onChange={(e)=>{setInputvalue(e.target.value);
    }} type="text" />
    <button onClick={addtodo}>Add+</button>
</div> */}


</div>
<ul className='list-unstyled'>
{
    todolist.map((items)=>{
return(
    <li>{items}</li>
)
    })

    }

   
</ul>
  </>
  )
}

export default Form