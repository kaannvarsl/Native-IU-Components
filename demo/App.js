import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NativeModules
} from 'react-native';


const App =()=>{
   var OpenActivity = NativeModules.OpenActivity;
   
   const openFunc=() =>{
     OpenActivity.open();
   }
  return (
    <View style = {styles.container}>
        <TouchableOpacity style = {styles.button} onPress = {()=> {openFunc()}}>
          <Text style = {{color:'white'}}>Demo</Text>
        </TouchableOpacity>
    </View>
  )
};



const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
},
button:{
  height:40,
  width:170,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"green"
}
});


export default App;