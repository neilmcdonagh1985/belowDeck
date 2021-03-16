import React from 'react';
import { Style, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';


export default function ReviewDetails({ route }) {

    return (
        <View style={globalStyles.titleText}>
            <Card>
            <Text>{route.params.title}</Text>
            <Text>{route.params.body}</Text>
            <Text>{route.params.rating}</Text>           
            </Card>
        </View>
    )

    // return (
    //     <View style={globalStyles.container}>
    //         <Text>Review Details Screen</Text>
    //     </View>
    // )
}
