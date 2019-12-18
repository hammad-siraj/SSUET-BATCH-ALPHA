import React from 'react';
import {Text,StyleSheet,View} from 'react-native'


export default function TabC() {
  return (
    <View style={styles.conatiner}>

    <Text style={styles.font}>TAB C</Text>
    
    </View>
  );
}


const styles = StyleSheet.create({
    conatiner:{
        backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center"

    },
    font:{
      fontSize:30
    }
})
