import React,{Component} from 'react';
import logo from './logo.svg';
import {connect} from "react-redux"
import './App.css';
import { Increment, Decrement } from './REDUX/actionCreator';


const mapStateToProps =(state)=>({
 myCount:state.myCount
})

const mapDispatchToProps =(dispatch)=>({
  Increment:()=>dispatch(Increment()),
  Decrement:()=>dispatch(Decrement())
})

class App extends React.Component {
  render() {
console.log(this.props.myCount)
    return (
              <div className="App-header">
              
                   <h1>COUNTER</h1>
                   <div>{this.props.myCount.count}</div>
                  <button onClick={this.props.Increment}>INCREMENT</button>
                  <br/>
                  <button onClick={this.props.Decrement}>DECREMENT</button>              
            </div>

    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)