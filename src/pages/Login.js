import React, { Component } from 'react';

import twitterLogo from '../img/twitter.svg'

import './Login.css' 

export default class Login extends Component {
  state = {
      username:'',
      senha:''
  }

  handleSubmit = e =>{
      e.preventDefault()

      const { username } = this.state

      if(!username.length)return

      localStorage.setItem('@RangelTwitter:username',username);

      this.props.history.push("/timeline")
  }

   handleInputChange = e =>{
       this.setState({ username: e.target.value })
   }
  
    render() {
    return (
        <div className="login-wrapper">
            <img src={twitterLogo} alt="Rangel@Twitter"/>
            <form onSubmit={this.handleSubmit}> 
                <input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    placeholder="Nome de usuario"
                />
                <button type="submit">Entrar</button>
            </form>

        </div>
    )
  }
}
