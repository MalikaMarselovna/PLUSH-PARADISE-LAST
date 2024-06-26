import React, { Component } from "react";

export default class Login extends Component {

    state = {
        username : 'malika',
        pass : '676907',
    }

    handleChange =(evt)=>{
        const fields = Object.assign({}, this.state);
        fields[evt.target.name] = evt.target.value
        this.setState({...fields})
    } 
  render() {
    return (
      <div className="flex justify-center w-[100%] h-[100%]">
        <div className="flex flex-col  shadow-lg border-2 rounded-lg w-[60%] rounded-lg p-5  h-[100%">
          <text className="text-2xl text-[#f92e9e]">Login</text>
          <div className="flex mt-3 ">
            <input type="text"
             placeholder="username" 
             className="border-[2px] rounded-lg w-[100%] p-2 outline-[#f92e9e] hover:border-[#f92e9e] ease-linear duration-500 cursor-pointer" 
             name="username"
             value={this.state.username}
             onChange={this.handleChange}/>
          </div>
          <div className="flex mt-3">
            <input type="text"
             placeholder="password" 
             className="border-[2px] rounded-lg w-[100%] p-2 outline-[#f92e9e] hover:border-[#f92e9e] ease-linear duration-500 cursor-pointer"
             name="pass"
            value={this.state.pass}
            onChange={this.handleChange}
            required />
          </div>

          <input type="button" value="Login" className="btn mt-7 hover:scale-[1.01]"/>
        </div>
      </div>
    );
  }
}
