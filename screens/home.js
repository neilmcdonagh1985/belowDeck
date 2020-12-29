import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Hotel Pyramida', rating: 4, body: 'nice decor and mostly clean and good haircuts', key: 1 },
        { title: 'The Globe', rating: 4, body: 'Barman talked about movies too much', key: 2 },
        { title: 'The Red Rooms', rating: 3, body: 'Not enough people in the Irish band were Irish', key: 3 },
    ])

    const onPressHandler = () => {
        navigation.navigate('Details', {
            rating: reviews[].rating
            // rating: reviews[0].rating
        });
    }

    return (
        <View>
           {reviews.map((review, key) => 
           <Text>{review.title}<Button onPress={onPressHandler} title='click for details' />
           </Text>)}
        </View>
    )

    // return (
    //     reviews.map((review, index) => {
    //         <View style={globalStyles.container}>
    //             <Text style={globalStyles.titleText}>{review.title}</Text>
    //         </View>
    //     })
    // )


    // return (
    //     <View style={globalStyles.container}>
    //         <Text style={globalStyles.titleText}>Home Screen</Text>

    //     </View>
    // )
}