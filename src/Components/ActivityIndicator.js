import { StyleSheet,ActivityIndicator, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'



const ActivityIndicatorComponent = () => {
  const [loading,setLoading]=useState(true);
useEffect(()=>{
setTimeout(()=>{
  setLoading(!loading);
},7000)
},[])

  return (
    <View >
{
  loading ?  
  <ActivityIndicator size="large" color="#000" />
:
<Text>HELLO WORLD.......!!!!</Text>
}


    </View>
  )
}

export default ActivityIndicatorComponent

const styles = StyleSheet.create({
  indicator:{
    flexDirection:'row',
    justifyContent:'space-around'
  }
})