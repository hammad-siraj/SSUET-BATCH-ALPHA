import React from 'react';
import {Text,StyleSheet,View} from 'react-native'


export default function TabA() {
  return (
    <View style={styles.conatiner}>

    <Text style={styles.font}>TAB A</Text>
    
    </View>
  );
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
