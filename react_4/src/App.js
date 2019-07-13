import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{
constructor(props){
  super(props)
  this.state={
    todos:["go to gym","go for prayer","assignment"],
    text:"",
    currentIndex:null

  }



}




delete =(id)=>{
  let newTodo = this.state.todos.slice();
  newTodo.splice(id,1)
  this.setState({
    todos:newTodo
  })

}
            add=(text)=>{
              console.log(text)
              let newTodo = this.state.todos;
              newTodo.push(text)
              this.setState({
                todos:newTodo
              })
            }

            edit =(index)=>{
              let {todos,text,currentIndex} =this.state;

              this.setState({
                text:todos[index],
                currentIndex:index

              })


            }

                  inputHandler =(e)=>{
                  
                    const text = e.target.value;
                    console.log(text)
                    this.setState({
                      text:text
                    })
                  }
                





renderHeader =()=>(
  <div>
    <input type="text" onChange={this.inputHandler} value={this.state.text}/>
    <button onClick={()=>{this.add(this.state.text)}}>ADD</button>
   <br/>
   {this.state.currentIndex ==null ?<div></div>:<button>UPDATE</button> }
  </div>
)


render(){
  let {text,todos,currentIndex} =this.state;

  const renderTodos = <ol>
    
    {todos.map((todo,id)=>{
        return(
          <li key={id}>{todo}
          
          <button onClick={()=>this.edit(id)}>EDIT</button>
          <button onClick={()=>{this.delete(id)}}>Delete</button>
          
          </li>
          

        )
    }) }

  </ol> 


  return(
 
   <div className="App-header"> 
           <h1> 2-Do</h1>
      {this.renderHeader()}
      {renderTodos}
    </div>

)

}


}



export default App;
