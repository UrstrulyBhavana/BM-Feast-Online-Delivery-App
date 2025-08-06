import React, { useState, useContext } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login")
    const { setIsLoggedIn } = useContext(StoreContext);

      const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);        
        setShowLogin(false);         
    };

    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='cross-icon'/>
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? null : <input type='text' placeholder='Enter Your Name...' required />}
                    <input type='email' placeholder='Enter Your Email...' required />
                    <input type='password' placeholder='Enter Your Password...' required />
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className='login-popup-condition'>
                  <input type='checkbox' required/>
                <p>By continuing, I consent to the Terms and Conditions and Privacy Policy.</p>
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



// import React, { useContext, useState } from 'react';
// import './LoginPopup.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../context/StoreContext';

// const LoginPopup = ({ setShowLogin }) => {
//     const [currState, setCurrState] = useState("Login");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const { handleLogin } = useContext(StoreContext);

//     const onSubmit = (e) => {
//         e.preventDefault();
//         if (currState === "Sign Up" && name.trim() === "") return;
//         handleLogin(name || "Guest");
//         setShowLogin(false);
//     };

//     return (
//         <div className='login-popup'>
//             <form className="login-popup-container" onSubmit={onSubmit}>
//                 <div className="login-popup-title">
//                     <h2>{currState}</h2>
//                     <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='close' />
//                 </div>

//                 <div className="login-popup-inputs">
//                     {currState === "Sign Up" && (
//                         <input type="text" placeholder="Enter Your Name..." required onChange={(e) => setName(e.target.value)} />
//                     )}
//                     <input type="email" placeholder="Enter Your Email..." required onChange={(e) => setEmail(e.target.value)} />
//                     <input type="password" placeholder="Enter Your Password..." required onChange={(e) => setPassword(e.target.value)} />
//                 </div>

//                 <button type="submit">
//                     {currState === "Sign Up" ? "Create Account" : "Login"}
//                 </button>

//                 <div className='login-popup-condition'>
//                     <input type='checkbox' required />
//                     <p>By continuing, I consent to the Terms and Conditions and Privacy Policy.</p>
//                 </div>

//                 <p>
//                     {currState === "Login" ? (
//                         <>Create a new Account? <span onClick={() => setCurrState("Sign Up")}>Click Here!..</span></>
//                     ) : (
//                         <>Already have an Account? <span onClick={() => setCurrState("Login")}>Login Here!..</span></>
//                     )}
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default LoginPopup;

























