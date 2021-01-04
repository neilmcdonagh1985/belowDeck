import React from 'react';
import { Style, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';


export default function ReviewDetails({ route }) {

    return (
        <View style={globalStyles.titleText}>
            <Text>{route.params.title}</Text>
            <Text>{route.params.rating}</Text>
            <Text>{route.params.body}</Text>
        </View>
    )

    // return (
    //     <View style={globalStyles.container}>
    //         <Text>Review Details Screen</Text>
    //     </View>
    // )
}
