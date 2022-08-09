import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageComponent from './src/Components/ImageComponent'


const App = () => {

  return (
    <View>
      <Text style={{ alignSelf: 'center' }}>IMAGE</Text>
      <ImageComponent />
    </View>
  )

}

export default App

const styles = StyleSheet.create({})