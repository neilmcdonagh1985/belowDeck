import * as React from 'react';
import { Style, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import PostButton from '../shared/postButton';
import PostForm from '../screens/postForm';


export default function Header({ title }) {
    const navigation = useNavigation();

    const openMenu = () => {
        navigation.openDrawer();
    }

    const openPostForm = () => {
        navigation.navigate('PostForm')
    }

    // const openPostForm = () => {
    //     navigation.navigate('PostForm')

    // }

    return (
        <View style={headerStyles.bar}>
            {/* <MaterialIcons name='menu' size={28} style={headerStyles.icon} onPress={() => navigation.openDrawer()} /> */}
            <MaterialIcons name='menu' size={28} style={headerStyles.icon} onPress={openMenu} />

            <Text style={headerStyles.text}>{ title }</Text>
            <TouchableOpacity onPress={openPostForm}>
                <PostButton />
            </TouchableOpacity>
            
                     
        </View>
    )
}

const headerStyles = StyleSheet.create({
    bar: {                        
        backgroundColor: '#fa8072',
        height: 80,
        flexDirection: 'row',
        
        alignItems: 'center',
        flexDirection: 'row',
        
        width: '100%',
        alignContent: 'center',
        justifyContent: 'flex-end'
        
        // justifyContent: 'space-evenly'        
    },
    icon: {
        position: 'absolute',
        left: 18,
        color: '#fff'
        
    },
    text: {       
        fontFamily: 'nunito-bold',
        fontSize: 18,
        paddingRight: 50,
        color: '#4b4f4d'
        
        
    //     paddingRight: 60
    }

    
})