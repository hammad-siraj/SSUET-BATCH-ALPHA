import React from 'react';
import {ScrollView,View,Text,StyleSheet,Dimensions,TextInput} from 'react-native'

export default HorizontalView  =()=>(
<ScrollView horizontal={true} pagingEnabled={true}>
    <View style={[style.container,style.grey]}>
        <Text style={style.font}>HTML AND CSS</Text>
        <TextInput 
        placeholder="name"
        autoCapitalize="words"
/>
        
    </View>

    <View style={[style.container,style.purple]}>
        <Text style={style.font}>JAVASCRIPT ES-6</Text>
    </View>

    <View style={[style.container,style.grey]}>
        <Text style={style.font}>REACT.JS AND REACT NATIVE</Text>
    </View>



</ScrollView>

)






const style = StyleSheet.create({
    container :{
        flex:1,
        alignItems:"center",
        width:Dimensions.get("window").width,
        height:Dimensions.get('window').height
    },
    font:{
        textAlign:"center",
        fontSize:20,
        marginTop:100,
    },
    blue:{
        backgroundColor:"white",
    },
    grey:{
        backgroundColor:"grey"
    },
    purple:{
        backgroundColor:"purple"
    }
})
