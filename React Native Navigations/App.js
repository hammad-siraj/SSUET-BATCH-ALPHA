import React, { Component } from 'react'
import {
  StyleSheet, Text
} from 'react-native';
import { AppNavigator } from './navigations/navigationScreen';

 class App extends Component {
   
  render() {
    return (
      <>
      <AppNavigator/>
     
      </>
    
    )
  }
}
const style =StyleSheet.create({
  textDesign:{
    fontSize:60
  }
})

export default App;
