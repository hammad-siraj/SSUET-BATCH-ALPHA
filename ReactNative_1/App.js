import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation'
import Home from './components/home';
import Detail from './components/detail';
import HorizontalView from './component/horizontalView';

export default class App extends Component {
  render() {
    return (

<HorizontalView/>
      );
  }
}

const styles =StyleSheet.create({
container:{
  flex:1,
 alignItems:"center",


},
font:{
  fontSize:30,
  color:"black"
}


})

