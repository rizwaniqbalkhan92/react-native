import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageComponent from './src/Components/ImageComponent'
import ImageBackgroundComponent from './src/Components/ImageBackgroundComp'


const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <ImageBackgroundComponent />
    </View>
  )

}

export default App

const styles = StyleSheet.create({})