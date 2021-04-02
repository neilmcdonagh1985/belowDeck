import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { StackRouter } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../shared/card';
import JSONDATA from '../MOCK_DATA.json';

export default function Home({ navigation }) {

    // const reviewData = JSONDATA;
    const [reviewData, setReviewData] = useState(JSONDATA);


    // const [reviews, setReviews] = useState([
    //     { title: 'August 21', rating: 4, body: 'Hipsters little bit', key: 'One' },
    //     { title: 'The Beaten Dockett', rating: 4, body: 'Loud mad fellas in corner', key: 'Two' },
    //     { title: 'City Cafe', rating: 3, body: 'Americany looking and beer and burgers', key: 'Three' },
    // ])

    // const onPressHandler = (review) => {
    //     console.log(review)
    //     navigation.navigate('Details', {
    //         rating: review.rating,
    //         body: review.body
    //     });
    // }

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
        </View>
    )

    // return (
    //     <View style={globalStyles.container}>
    //         <FlatList
    //         data={reviews}
    //         renderItem={({ item }) =>
    //             <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
    //                 <Card>
    //                 <Text style={globalStyles.titleText}>{item.title}</Text>
    //                 </Card>
    //             </TouchableOpacity>}
    //     />

    //     </View>
    // )


}