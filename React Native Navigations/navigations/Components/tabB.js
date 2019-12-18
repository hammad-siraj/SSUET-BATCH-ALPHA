import React from 'react';
import {Text,StyleSheet,View} from 'react-native'


export default function TabB() {
  return (
    <View style={styles.conatiner}>

    <Text style={styles.font}>TAB B</Text>
    
    </View>
  );
}


const styles = StyleSheet.create({
    conatiner:{
        backgroundColor:"blue",
        justifyContent:"center",
        alignItems:"center"

    },
    font:{
      fontSize:30
    }
})
