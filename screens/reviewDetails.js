import React from 'react';
import { Style, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';


export default function ReviewDetails({ route }) {

    return (
        <View style={globalStyles.titleText}>
            <Card>
            <Text>{route.params.last_name}</Text>
            <Text>{route.params.email}</Text>
            <Text>{route.params.id}</Text>           
            </Card>
        </View>
    )

    // return (
    //     <View style={globalStyles.container}>
    //         <Text>Review Details Screen</Text>
    //     </View>
    // )
}
