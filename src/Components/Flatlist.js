import { StyleSheet,FlatList, Text, View } from 'react-native'
import React from 'react'

const FlatlistComp = () => {
  const list=[
    {name:'rizwan',id:1},
    {name:'iqbal',id:2},
    {name:'rabeeb',id:3},
    {name:'farooq',id:4},
    {name:'abdul hai',id:5},
    {name:'ali',id:6},
    {name:'zanaen',id:7},
    {name:'sumaan',id:8},
    {name:'mahinder',id:9},
    {name:'haris',id:10},
]
  return (
    <View>
      <FlatList showsVerticalScrollIndicator={false}   contentContainerStyle={{padding:10}}  data={list}   renderItem={((val,index)=>{
        console.log("check",val)
        return (
          <View style={styles.container}>
          <Text style={styles.text}>{val.item.id}</Text>
          <Text style={styles.text}>{val.item.name}</Text>
        </View>
        )
      })}  />
    </View>
  )
}

export default FlatlistComp

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:120,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    borderRadius:10
  }
  ,
  text:{
    color:'#fff',
    fontSize:22
  }
})