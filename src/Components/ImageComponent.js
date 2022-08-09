import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import Car from '../Asset/car1.jpg';

const ImageComponent = () => {
  return (
    <View>
     <Image source={Car}  width={400}   resizeMode='contain'     />
     <Image source={require('../Asset/car2.jpg')}   style={styles.image}  resizeMode='contain'     />
    </View>
  )
}

export default ImageComponent

const styles = StyleSheet.create({
    image:{
        width:300,
        alignSelf:'center',

    }
})