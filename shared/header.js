import * as React from 'react';
import { Style, View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title }) {
    const navigation = useNavigation();

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={headerStyles.bar}>
            {/* <MaterialIcons name='menu' size={28} style={headerStyles.icon} onPress={() => navigation.openDrawer()} /> */}
            <MaterialIcons name='menu' size={28} style={headerStyles.icon} onPress={openMenu} />

            <Text>{ title }</Text>           
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
        left: 18,
        color: '#fff'
        
    } 
})