import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { StackRouter } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../shared/card';
import JSONDATA from '../MOCK_DATA.json';
import { Fragment } from 'react';
import Search from 'react-native-searchbar';

export default function Home({ navigation }) {

    const [reviewData, setReviewData] = useState(JSONDATA);

    // write the searchFilter function here. See video: youtube.com/watch?v=ToEd3ss4beA

    return (

    
        
        <View>
            {/* make a TextInput here with an onChangeText prop which takes in the input text and calls a searchFilter 
            function written above */}
            <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={reviewData}
            renderItem={({ item }) =>
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.first_name}</Text>
                    </Card>
                </TouchableOpacity>}
             />
            <Text>{console.log(reviewData + 'this is the end of the data')}</Text>
        </View>

        
   
    )
    
}