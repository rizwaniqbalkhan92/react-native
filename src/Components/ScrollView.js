import { StyleSheet,ScrollView, Text, View } from 'react-native'
import React from 'react'

const ScrollViewComp = () => {
  const data=[1,2,3,4,5,6,7,8,9,22,3,4,44,55,66,77,88,99,44,22,33];

    return (
    <View>
      <Text >ScrollView</Text>
      <ScrollView    contentContainerStyle={{padding:10}} showsVerticalScrollIndicator={false}>

        {data.map((val,index)=>(
            <View  key={index} style={styles.container}>
                <Text style={styles.text}>{val}</Text>
            </View>
        ))}
        </ScrollView>
    </View>
  )
}

export default ScrollViewComp

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:130,
        backgroundColor:'blue',
        borderRadius:10,
        marginTop:12,justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#fff',
        fontSize:22
    }
})