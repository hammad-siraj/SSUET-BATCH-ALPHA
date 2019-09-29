import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'
import SignIn from './signIn';

export default class App extends Component {
 constructor(){
   super()
   this.state={
     email:"",
     password:"",
     error:"",
     name:"",
     bio:""
   }
 }
 

componentDidMount(){
  fetch("https://api.github.com/users/hammad-siraj").then((response)=>{
return response.json();
}).then((user)=>{
this.setState({
  name:user.name,
  bio:user.bio
})

})

}

 inputHandler =(e)=>{
this.setState({
  [e.target.name]:e.target.value
})
 }

createUser =()=>{
firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
  alert("user created sucessfully")
}).catch((error)=>{
  console.log(error)
this.setState({
  error:error.message
})
})  
}

  render() {
console.log(this.state.bio,this.state.name)
    return (
      <div className="App-header">
        <h1>SIGN-UP</h1>
        <br/>
        <p>{this.state.error}</p>
           <label> EMAIL  <input  name="email" type="email" onChange={this.inputHandler} value={this.state.email}/>
              </label>
              <br/>
              <br/>
<label>PASSWORD <input name="password" type="password" onChange={this.inputHandler} value={this.state.password}/>        
      </label>
      <button onClick={this.createUser}>SUBMIT</button>
      <SignIn email={this.state.email} password={this.state.password}/>

      </div>

    )
  }
}



