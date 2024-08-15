import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Login")

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type='text' placeholder='Enter Your Name...' required />}
                    <input type='email' placeholder='Enter Your Email...' required />
                    <input type='password' placeholder='Enter Your Password...' required />
                </div>
                <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className='login-popup-condition'>
                  <input type='checkbox' required/>
                  <p>By continuing, i consent to the Terms and Conditions and Privacy Policy.</p>
                </div>
                { currState === "Login"
                ?<p>Create a new Account ? <span onClick={() => setCurrState("Sign Up")}>Click Here!..</span></p>
                :<p>Already have an Account ? <span onClick={() => setCurrState("Login")}>Login Here!..</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup


























// import React, { useContext, useState } from 'react'
// import './LoginPopup.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext'
// import axios from 'axios'

// const LoginPopup = ({ setShowLogin }) => {

//     const {url,setToken} = useContext(StoreContext)

//     const [currState, setCurrState] = useState("Login")

//     const [data,SetData] = useState({
//         name:"",
//         email:"",
//         password:""
//     })

//          const onChangeHandler = (event) => {
//             const name = event.target.name
//             const value = event.target.value
//             SetData(data=>({...data, [name] : value}))
//          }

//          const onLogin = async (event) => {
//           event.preventDefault()
//            let newUrl = url
//            if(currState==="Login"){
//               newUrl += "/api/user/login"
//            }
//            else{
//             newUrl += "/api/user/register"
//            }
//            const response = await axios.post(newUrl,data)
          
//             if(response.data.success){
//               setToken(response.data.token)
//               localStorage.setItem("token",response.data.token)
//               setShowLogin(false)
//             }
//             else{
//               alert(response.data.message)
//             }

//          }

        

//         //  useEffect(()=>{
//         //    console.log(data)
//         //  },[data])
     
//     return (
//         <div className='login-popup'>
//             <form onSubmit={onLogin} className="login-popup-container">
//                 <div className="login-popup-title">
//                     <h2>{currState}</h2>
//                     <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
//                 </div>
//                 <div className="login-popup-inputs">
//                     {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Enter Your Name...' required />}
//                     <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Enter Your Email...' required />
//                     <input name='password' onChange={onChangeHandler} value={data.password}  type='password' placeholder='Enter Your Password...' required />
//                 </div>
//                 <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
//                 <div className='login-popup-condition'>
//                   <input type='checkbox' required/>
//                   <p>By continuing, i consent to the Terms and Conditions and Privacy Policy.</p>
//                 </div>
//                 { currState === "Login"
//                 ?<p>Create a new Account ? <span onClick={() => setCurrState("Sign Up")}>Click Here!..</span></p>
//                 :<p>Already have an Account ? <span onClick={() => setCurrState("Login")}>Login Here!..</span></p>
//                 }
//             </form>
//         </div>
//     )
// }

// export default LoginPopup