import { StyleSheet,Button, Text, View } from 'react-native'
import React from 'react'

const Buttons = () => {

const Greeting=()=>{

    alert("Hello.., Good Morning")

}

  return (
    <View>

      <Button  title="Click Here"   color="blue"  onPress={Greeting}  />
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({})