import * as React from 'react';
import { Style, View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {

    const openMenu = () => {
        // navigation.openDrawer()
    }

    
    return (
        <View style={headerStyles.bar}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={headerStyles.icon}/>

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
    },
    icon: {
        position: 'absolute',
        left: 16
    } 
})