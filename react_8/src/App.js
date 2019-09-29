import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { firebaseConfig, db } from './firebase';



export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      
      title:"",
      article:"",
      data:[]
    }

  }

  inputhandler=(e)=>{

this.setState({
  [e.target.name]:e.target.value
})
  }
componentDidMount(){
 let data=[];
  db.on("value",(snapshot)=>{
    var obj = snapshot.val();
  for(var props in obj)

  data.push(obj[props])

  this.setState({
    data:data
  })

  data=[]
  })

}
  
deleteData=()=>{
db.child('-Lok1ovExjhswtUyFrrS').remove()
}

updateData=()=>{
  db.child('-Lok2cP3tJlCv0-JqavE').set({
    title:"hey 5",
    article:"hello 5"
  })
}

  pushData =()=>{
    const {title,article}=this.state;
   const data ={
     title:title,
     article:article
   }
   db.push(data).then(()=>{
     this.setState({title:"",article:""})
   }).catch((err)=>{
  console.log(err)
   })
  }

  render() {

    // console.log(this.state.article,this.state.title)
    return (
      <div className="App-header">
        <h1>FIREBASE</h1>

   <label>Title:</label> <input name='title' onChange={this.inputhandler} value={this.state.title}/>
        <br/><br/>
    <label>Article:</label>    <input name='article' onChange={this.inputhandler} value={this.state.article}/>
        <br/><br/>
        <button onClick={this.pushData}>SUBMIT</button>
  <button onClick={this.deleteData}>Delete</button>
  <button onClick={this.updateData}>UPDATE</button>    
      {this.state.data.map((value,id)=>{
  return(
<div key={id}>
  <h1>{value.title}</h1>
  <p>{value.article}</p>
</div>
    )
      })}
      </div>
    )
  }
}
