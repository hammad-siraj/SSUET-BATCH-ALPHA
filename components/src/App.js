import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';





export const App = function  (){
return(
  <div>
<h1>hello world</h1>
{1+2}
  </div>
)

}

export const App2 = function  (){
  return(
    <div>
  <h1>hello world</h1>
  {1+2}
    </div>
  )
  
  }
 

export const App3 =(props)=><h1>hello{props.stName}</h1>




export class App4 extends React.Component{
constructor(){
  super();
  this.state={
    studentName:"Nabeel",
    st2:"xyz"
  }
}


changeData =()=>{
this.setState({
  studentName:"new student",
  st2:"new student"
})
}

render(){
console.log(this.state.st2)
  return(
    <>
    <h1>hello class component</h1>
   <App3 stName={this.state.studentName} stName2={this.state.st2}/>
   <input type="button" value="change state" onClick={this.changeData}/>
  </>
  )
}


}































// import {Navbar,NavbarBrand,Media,} from 'reactstrap'

// class App extends React.Component{
// constructor(props){
//   super(props);
//   this.state={
//     mobileSelected:null,
//     mobileCollection:[
//     {
//       id:0,
//       name:"iphone",
//       price:"200$",
//       description:"xyz",
//       image:"/assets/images/1.jpg"
//     },
  
//     {
//       id:1,
//       name:"iphone",
//       price:"200$",
//       description:"xyz",
//       image:"/assets/images/1.jpg",
//     },
//     {
//       id:2,
//       name:"iphone",
//       price:"200$",
//       description:"xyz",
//       image:"/assets/images/1.jpg"
//     }
  
  
//   ]

//   }
// }

// select =(mob)=>{
// this.setState({
//   mobileSelected:mob
// })

// }
// render(){
//   console.log(this.state.mobileSelected)
// const mobile = this.state.mobileCollection.map((mob)=>{
// return(  
// <div key={mob.id} onClick={()=>this.select(mob)}>
// <Media tag="li">
// <Media left middle>
// <Media object src={mob.image}/>
// </Media>

// <Media heading>
// {mob.name}
// </Media>




// </Media>


// </div>



// )

// })


//   return(
// <div>




//    <Navbar color="dark" >
// <NavbarBrand>
//   Mobile Shop
// </NavbarBrand>

//    </Navbar>



// {mobile}


// </div>

//     )
// }

// }

// export default App;
