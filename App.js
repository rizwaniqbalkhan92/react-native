import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatlistComp from './src/Components/Flatlist'


const App = () => {
  return (
    <View>
      <Text style={{alignSelf:'center'}}>FLATLIST</Text>
    <FlatlistComp/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})