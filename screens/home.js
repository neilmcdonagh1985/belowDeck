import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { StackRouter } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Hotel Pyramida', rating: 4, body: 'nice decor and mostly clean and good haircuts', key: 1 },
        { title: 'The Globe', rating: 4, body: 'Barman talked about movies too much', key: 2 },
        { title: 'The Red Rooms', rating: 3, body: 'Not enough people in the Irish band were Irish', key: 3 },
    ])

    // const onPressHandler = (review) => {
    //     console.log(review)
    //     navigation.navigate('Details', {
    //         rating: review.rating,
    //         body: review.body
    //     });
    // }

    return (
        <View style={globalStyles.container}>
            <FlatList
            data={reviews}
            renderItem={({ item }) =>
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </TouchableOpacity>}
        />

        </View>
    )


}