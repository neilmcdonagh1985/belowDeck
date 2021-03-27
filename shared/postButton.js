import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

// const PostButton = () => {
//     return (
//         <View>
//             <Button title='Post Review'/>
//         </View>
//     )
// }

export default function PostButton({ navigation }) {

    


    return (
        
        // in touchableopacity below: onPress={() => navigation.navigate('PostForm', item)}
        <View style={postButtonStyles.buttonContainer} >
            <Text style={postButtonStyles.buttonText}>Post Review</Text>
        </View>
    )
}

const postButtonStyles = StyleSheet.create({
    buttonContainer: {        
        // backgroundColor: '#fcdc00',
        backgroundColor: '#4b4f4d',
        height: '100%',
        justifyContent: 'center',
        padding: 5
        


    },
    buttonText: {
        fontFamily: 'nunito-bold',
        fontSize: 15,
        color: '#fa8072'
    }

})
