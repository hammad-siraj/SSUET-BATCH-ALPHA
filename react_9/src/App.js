import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import { saveTodo } from './REDUX/actionCreator';

const mapStateToProps =(state)=>{
  return {
   TODOS:state.TODOS
  }
}

const mapDispatchToProps =(dispatch)=>({
  saveTodo:(todo)=>{dispatch(saveTodo(todo))}
})

 class App extends React.Component {
constructor(props){
  super(props)

  this.state={
    text:"",
  }
}

inputHandler =(e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })

}

  render() {
console.log(this.props.TODOS)
    return (
      <div className="App-header">

 <h1>MY TODO APP WITH FIREBASE</h1>        
<label>TODOS</label>

<input name="text" value={this.state.text} onChange={this.inputHandler}/>
<br/>
<button onClick={()=>this.props.saveTodo(this.state.text)}>SUBMIT</button>

      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
