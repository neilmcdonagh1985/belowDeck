import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import About from '../screens/about';

const Stack = createStackNavigator();

export const AboutStack = () => (   
        <Stack.Navigator
            initialRouteName='About'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#00bfff',
                },
                headerTintColor: '#2f44f4'
            }}
            >
            <Stack.Screen name="About" component={About} options={{ title: "About Below Deck"}} />            
        </Stack.Navigator>
)