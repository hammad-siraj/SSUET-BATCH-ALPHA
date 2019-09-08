import React, { Component } from 'react'
import {Route,Switch,Link} from "react-router-dom"
import "./App.css";

export default class App  extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>Mobile Shop</h1>

  
        <Link active to="/home">Home</Link>
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
    <h1>{props.data}</h1>
    {/* <h2>{props.data}</h2> */}
  </div>)


const MobileList = ({match})=>(
  <div>
    <h1>
      Mobile list
    </h1>
 
     <ul>
      <li><Link to={`${match.url}/iphone`}>Iphone</Link></li>
      <li><Link to={`${match.url}/samsung`}>Samsung</Link></li>
      <li><Link to={`${match.url}/qmobile`}>Q-mobile</Link></li>

    </ul>



  <Route path={`${match.path}/:brandName`}
  component={BranDetails}
   />
    
  </div>
)

const BranDetails =({match})=>{
return(
  <div>


{match.params.brandName==="iphone" ?
<ul>
  <li>iphone 1</li>
  <li>iphone 2</li>
  <li>iphone 3</li>

</ul>:null
}

  </div>
)

}



const Home2 =()=>{
  return (
    <h1>
      HOME2
    </h1>
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



