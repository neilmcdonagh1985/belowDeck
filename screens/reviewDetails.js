import React from 'react';
import { Style, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';


export default function ReviewDetails({ route, navigation }) {

    return (
        <View>
            <Text>{route.params.rating}</Text>
        </View>
    )

    // return (
    //     <View style={globalStyles.container}>
    //         <Text>Review Details Screen</Text>
    //     </View>
    // )
}
