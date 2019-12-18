import React, { Component } from 'react'
import {Text,View,StyleSheet,TouchableOpacity,Picker,Button} from 'react-native'


const items =[{
    item:"item1"
},{
    item:"item2"
},{
    item:"item3"
}]


export default class ItemList extends Component {
  state={
      language:"hello"
  }
    render() {
    return (
      <View >
    
     {items.map((value,id)=>{
   return( 
    <TouchableOpacity key={id}>
     <Text style={styles.font} onPress={()=>this.props.navigation.navigate('Item',{item:value.item})}> {value.item}</Text>
     </TouchableOpacity>
   )
    })}

<Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>

<Button title="open drawer" onPress={()=>this.props.navigation.openDrawer()}></Button>
      
      </View>
    )
  }
}


const styles = StyleSheet.create({
    conatiner:{
        backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center"

    },
    font:{
      fontSize:30
    }
})
