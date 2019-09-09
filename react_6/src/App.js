import React from 'react';
import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {
  constructor() {
    super()
    console.log("constructor")
    this.state = {
      data: null,
      user: null,
      isStopped: false
    }
  }

  renderHeader = () => {
    return (
      <div>
        <h1>MY WEBSITE</h1>
      </div>
    )
  }

  componentDidMount() {


    setTimeout(() => {
      this.setState({
        data: "data fetch successfully",
        user: "new user"
      })
    }, 2000)

    console.log("component did mount")
  }
  stop = () => {
    this.setState({
      isStopped: !this.state.isStopped
    })
  }

  render() {

    // this.setState({
    //   data:"change"
    // }) // we cant do this because render is a pure function and call on every setState.

    console.log("render")
    return (
      <div className="App-header">
        {this.renderHeader()}
        {this.state.data ? <h1>{this.state.data}</h1> : <h1>LOADING...</h1>}
        <UserList user={this.state.user} />
        {this.state.isStopped ? <h1>TIMER STOP</h1> : <Timer />}
        <button onClick={this.stop}>STOP TIMER</button>
      </div>
    )
  }
}

export class UserList extends React.Component {
  constructor() {
    super()
    this.state = {
      upadte: "not update"
    }
  }


  componentDidUpdate(NextProps) {
    console.log("component did update", NextProps)
    if (this.props.user !== NextProps.user) {
      this.setState({
        upadte: "updated"
      })

    }
    // this.setState({
    //   upadte:"updated"
    // })

  }

  shouldComponentUpdate(props){
    console.log("should",props)
    
    return true
  }

  render() {
    return (
      <div>
        {this.state.upadte}
        <li>USER 1</li>
        <li>USER 2</li>
        <li>USER 3</li>
        <li>{this.props.user}</li>

      </div>
    )
  }
}

export class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      timer: 0
    }
  }


componentDidMount(){
  this.time = window.setInterval(()=>{
    this.setState({
      timer:this.state.timer +1,
    })
  },2000)
}


// componentWillUnmount(){
//   window.clearInterval(this.time)
// }


//   componentWillUnmount(){
//     console.log("component will unmount")
// window.clearInterval(this.time)
//   }

//   componentDidMount() {
//  this.time=window.setInterval(() => {
//       this.setState({
//         timer: this.state.timer + 1
//       })
//     }, 1000)
//   }

  render() {
    console.log(this.state.timer)
    return (
      <div>
        <h1>TIMER:{this.state.timer}</h1>

      </div>
    )
  }

}



