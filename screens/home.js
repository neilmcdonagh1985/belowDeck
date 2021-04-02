import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { StackRouter } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../shared/card';
import JSONDATA from '../MOCK_DATA.json';

export default function Home({ navigation }) {

    const [reviewData, setReviewData] = useState(JSONDATA);

    return (
        
        
        <View>
            <FlatList
            data={reviewData}
            renderItem={({ item }) =>
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.first_name}</Text>
                    </Card>
                </TouchableOpacity>}
             />
            <Text>{console.log(reviewData + 'this is the end of theeeee data')}</Text>
        </View>
   
    )
    
}