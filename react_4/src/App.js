import React from 'react';
import logo from './logo.svg';
import './App.css';

 class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos:["go for prayer","go to gym","do assignments"],
      text:"",
      currentIndex:null




    }
  }

  Add =(text)=>{
    let newTodo = this.state.todos.slice();
    newTodo.push(text)
    this.setState({
      todos:newTodo
    })

  }

  delete =(id)=>{
let newTodo =this.state.todos.slice();
newTodo.splice(id,1);
// this.state.todos=newTodo;

this.setState({
  todos:newTodo
})
  }

  inputHandler =(e)=>{
    let text =e.target.value;
    console.log(text)
    this.setState({
      text:text
    })

  }

update =()=>{
  let {currentIndex,todos}=this.state;
  let newTodo= todos.slice();
  
}

Edit =(id)=>{
  this.setState({
    text:this.state.todos[id],
    currentIndex:id
  })

}

renderHeader =()=>{

  return(
    <div>
    <input type="text" onChange={this.inputHandler} value={this.state.text} />
    <button onClick={()=>{this.Add(this.state.text)}} >ADD</button>
    <br/>
    {this.state.currentIndex==null ?<div></div>:<button>Update</button>}
</div>  
  )
}


  
  render() {
    let {todos}=this.state;
    
    const renderTodos = <ol>
      {todos.map((todo,id)=>{
        return(
          <li key={id}>
            {todo} {" "}
            <button onClick={()=>{this.Edit(id)}}> EDIT </button>{ "  "}
            <button onClick={()=>{this.delete(id)}}> DELETE </button>
          </li>
        )

      })}

    </ol>
    return (
      <div className="App-header">
      <h1>2-DO</h1>
      {this.renderHeader()}

    {renderTodos}
      </div>
    )
  }
}





export default App;
