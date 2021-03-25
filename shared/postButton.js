import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

// const PostButton = () => {
//     return (
//         <View>
//             <Button title='Post Review'/>
//         </View>
//     )
// }

export default function PostButton() {

    return (
        <TouchableOpacity style={postButtonStyles.buttonContainer}>
            <Text style={postButtonStyles.buttonText}>Post Review</Text>
        </TouchableOpacity>
    )
}

const postButtonStyles = StyleSheet.create({
    buttonContainer: {        
        backgroundColor: '#fcdc00',
        backgroundColor: '#009688',
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 8,
        
    },
    buttonText: {
        fontSize: 12
    }

})
