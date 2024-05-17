// import React, { Component } from "react";

// export default class Register extends Component {

//     state = {
//         first:'',
//         last :'',
//         username : 'malika',
//         pass : '676907',
//     }

//     handleChange =(evt)=>{
//         const fields = Object.assign({}, this.state);
//         fields[evt.target.name] = evt.target.value
//         this.setState({...fields})
//     }
//   render() {
//     return (
//       <div className="flex justify-center">
//         <div className="flex flex-col absolute top-[30%] shadow-lg border-2 rounded-lg w-[60%] rounded-lg p-5">
//           <text className="text-2xl text-[#f92e9e]">Register</text>
//           <div className="flex mt-3 ">
//             <input type="text"
//              placeholder="username"
//              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#f92e9e] hover:border-[#f92e9e] ease-linear duration-500 cursor-pointer"
//              name="username"
//              value={this.state.username}
//              onChange={this.handleChange}/>
//           </div>
//           <div className="flex mt-3">
//             <input type="text"
//              placeholder="password"
//              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#f92e9e] hover:border-[#f92e9e] ease-linear duration-500 cursor-pointer"
//              name="pass"
//             value={this.state.pass}
//             onChange={this.handleChange}
//             required />
//           </div>

//           <input type="button" value="Login" className="btn mt-7 hover:scale-[1.01]"/>
//         </div>
//       </div>
//     );
//   }
// }

import { create } from "@mui/material/styles/createTransitions";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {auth} from "../Firebase"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");
  function register() {
    e.preventDefault();
    if (copyPassword !== password) {
      setError("Passwords didn't match");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setCopyPassword("");
        setPassword("");
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <form onSubmit={register}>
        <text className="text-2xl text-[#f92e9e]">Create an account</text>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <input
          value={copyPassword}
          onChange={(e) => setCopyPassword(e.target.value)}
          type="passwotd"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default Register;
