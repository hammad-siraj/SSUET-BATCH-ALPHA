import React, { Component } from 'react'
import {Route,Switch,Link} from "react-router-dom"
import "./App.css";

export default class App  extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>Mobile Shop</h1>

        <Link to="/home">Home</Link>
       <Link to="/mobilelist">Mobile list</Link>
       <Link to="/about">About</Link>

      <Switch>
      <Route exact path="/home" render={()=>{return (<Home data={"props"}/>)}}/> 
     <Route  path="/home2" render={()=>{return (<About/>)}}/>
     <Route path="/about" render={()=>{return(<About/>)}}/>
     <Route path="/mobilelist" component={MobileList}/>
     </Switch>
     


      </div>
    )
  }
}

const Home = (props)=>(
  <div>
    <h1>Home 1</h1>
    {/* <h2>{props.data}</h2> */}
  </div>)


const MobileList = ({match})=>(
  <div>
    <h1>
      Mobile list
    </h1>

    <ol>
      <li><Link to={`${match.url}/iphone`}>Iphone</Link></li>
      <li><Link to={`${match.url}/samsung`}>Samsung</Link></li>
      <li><Link to={`${match.url}/qmobile`}>Q-mobile</Link></li>

    </ol>
  <Route path={`${match.path}/:brandName`}
  render={(props)=>{return (<BranDetails {...props}/>)}}
   />
  
  </div>
)

const BranDetails =({match})=>{
return(
  <div>
<h1>ALL {match.params.brandName} list</h1> 
{match.params.brandName === "iphone" ? 
<ul>
  <li>Iphone 6</li>
  <li>iphone 7</li>
  <li>iphone 8</li>

</ul>:null
} 
  
  
  </div>
)

}


const About =()=>(
  <div>
    <h1>About</h1>
  </div>
)

const Contact = ()=>(
  <div>
    <h1>Contact</h1>
  </div>
)



