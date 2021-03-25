import * as React from 'react';
import { Style, View, Text, StyleSheet, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import PostButton from '../shared/postButton';


export default function Header({ title }) {
    const navigation = useNavigation();

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={headerStyles.bar}>
            {/* <MaterialIcons name='menu' size={28} style={headerStyles.icon} onPress={() => navigation.openDrawer()} /> */}
            <MaterialIcons name='menu' size={28} style={headerStyles.icon} onPress={openMenu} />

            <Text style={headerStyles.text}>{ title }</Text>
            <PostButton />
                     
        </View>
    )
}

const headerStyles = StyleSheet.create({
    bar: {                        
        backgroundColor: '#fa8072',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // justifyContent: 'space-evenly'        
    },
    icon: {
        position: 'absolute',
        left: 18,
        color: '#fff'
        
    },
    text: {
        
        fontFamily: 'nunito-bold',
        fontSize: 15,
        paddingLeft: 15
    //     paddingRight: 60
    }

    
})