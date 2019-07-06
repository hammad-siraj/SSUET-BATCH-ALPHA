import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,NavbarBrand,Media,} from 'reactstrap'

class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    mobileSelected:null,
    mobileCollection:[
    {
      id:0,
      name:"iphone",
      price:"200$",
      description:"xyz",
      image:"/assets/images/1.jpg"
    },
  
    {
      id:1,
      name:"iphone",
      price:"200$",
      description:"xyz",
      image:"/assets/images/1.jpg",
    },
    {
      id:2,
      name:"iphone",
      price:"200$",
      description:"xyz",
      image:"/assets/images/1.jpg"
    }
  
  
  ]

  }
}

select =(mob)=>{
this.setState({
  mobileSelected:mob
})

}
render(){
  console.log(this.state.mobileSelected)
const mobile = this.state.mobileCollection.map((mob)=>{
return(  
<div key={mob.id} onClick={()=>this.select(mob)}>
<Media tag="li">
<Media left middle>
<Media object src={mob.image}/>
</Media>

<Media heading>
{mob.name}
</Media>




</Media>


</div>



)

})


  return(
<div>




   <Navbar color="dark" >
<NavbarBrand>
  Mobile Shop
</NavbarBrand>

   </Navbar>



{mobile}


</div>

    )
}

}

export default App;
