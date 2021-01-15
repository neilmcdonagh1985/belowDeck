import * as React from 'react';
import { Style, View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={headerStyles.bar}>
            <Text>this is the header</Text>
            
        </View>
    )
}

const headerStyles = StyleSheet.create({
    bar: {
        backgroundColor: '#fa8072',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',     

    }
})