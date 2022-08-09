import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Counter from './src/Components/Counter'
import ActivityIndicatorComponent from './src/Components/ActivityIndicator'
import Button from './src/Components/Button'
import ScrollView from './src/Components/ScrollView'

const App = () => {
  return (
    <View>

      {/* <Counter /> */}
      {/* <ActivityIndicatorComponent />
      <Button/> */}
      <ScrollView/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})