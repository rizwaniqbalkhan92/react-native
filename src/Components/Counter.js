import { StyleSheet, Button, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'




const Counter = () => {
    const [count, setCount] = useState(0);



    return (

        <View>
            <Text style={styles.textCount}>{count}</Text>
            <View style={styles.btnContainer}>
                <Button title='Increment' onPress={() => setCount(count + 1)} />
                <Button title='Decrement' disabled={count <= 0 ? true : false} onPress={() => setCount(count - 1)} />
                <Button title='Clear' onPress={() => setCount(0)} />
            </View>

        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    btnContainer: {
        width: 300,
        alignSelf: 'center',
        justifyContent: 'space-between',
        height: 150,

    },
    textCount: {
        fontSize: 30,
        color: '#000',
        alignSelf: 'center'
    }
})