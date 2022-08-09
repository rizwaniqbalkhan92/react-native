import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Counter from './src/Components/Counter'
import ActivityIndicatorComponent from './src/Components/ActivityIndicator'
import Button from './src/Components/Button'

const App = () => {
  return (
    <View>

      <Counter />
      {/* <ActivityIndicatorComponent />
      <Button/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})