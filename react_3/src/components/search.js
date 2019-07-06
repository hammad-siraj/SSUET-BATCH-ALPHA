import React from 'react';

export  class Search extends React.Component{
constructor(props){
    super(props);
    this.state={
        mobiles:["iphone x","samsung note 8","oppo f11"," nokia 6"," q-mobile","blackberry","amazon","infinix","vivo","huwei"],
        
   
   
    }



}

search =(e)=>{
const {mobiles} = this.state;
const text = e.target.value;
// console.log(text)
 const result =mobiles.filter((mob)=>{

const lowerText = text.toLowerCase();
const lowerMob = mob.toLowerCase();


return  lowerMob.substring(0,lowerText.length).indexOf(lowerText) !== -1;


 })


 this.setState({
     text,
     result
 })


}

renderHeader =()=>{

    return(<input type="text" placeholder="search for mobile ?"  onChange={this.search} />)
}

renderBody =()=>{

    let {mobiles,text,result} = this.state;
   const item = text ? result:mobiles; 
   return(
       <div>
            {text ? <h1>{`you are searching for ${text}`}</h1>:null}
           
           {item.map((it,id)=>{
             return(<li key={id}>{it}</li> )
           })}
       </div>

   )

}


render(){
    return(<div>

    {this.renderHeader()}

    {this.renderBody()}
    </div>)
}

}