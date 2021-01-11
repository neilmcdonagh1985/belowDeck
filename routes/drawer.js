import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './AppNavigator';
import { AboutStack } from './aboutStack';
import React, {Component} from 'react';
// import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={AppNavigator} />
            <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
    );
}

export default RootDrawerNavigator;

// }

// export default createAppContainer(RootDrawerNavigator);

// const RootDrawerNavigator = createDrawerNavigator({
//     Home: {
//         screen: AppNavigator,
//     },
//     About: {
//         screen: AboutStack,
//     }
// })

// export default createAppContainer(RootDrawerNavigator);
