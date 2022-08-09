import { StyleSheet, Text, ImageBackground, Image, View, FlatList } from 'react-native'
import React from 'react'
import Car1 from '../Asset/car1.jpg';
import Car2 from '../Asset/car2.jpg';
import Car3 from '../Asset/car3.jpg';

const ImageBackgroundComp = () => {
    const carData = [
        { id: 1, image: Car1 },
        { id: 2, image: Car2 },
        { id: 3, image: Car3 },
        { id: 4, image: Car1 },
        { id: 5, image: Car2 },
        { id: 6, image: Car3 },
        { id: 7, image: Car1 },
        { id: 8, image: Car2 },
        { id: 9, image: Car3 },
    ]
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} resizeMode='cover' source={{ uri: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg" }} >
                <FlatList contentContainerStyle={{ pqadding: 10 }} data={carData} renderItem={((val, index) => (
                    <View style={styles.listContainer}>
                        <Text style={styles.text}>{val.item.id}</Text>
                        <Image style={styles.img} resizeMode='contain' source={val.item.image} />
                    </View>
                ))} />
            </ImageBackground>
        </View>
    )
}

export default ImageBackgroundComp

const styles = StyleSheet.create({
    listContainer: {
        width: 300,
        height: 200,
        marginTop: 12,
        alignSelf: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12


    },
    text: {
        fontSize: 22,
        color: '#000'
    },
    img: {
        width: 200,
        borderRadius: 10
    },
    container: {
        flex: 1,

    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItem: 'center'
    }
})