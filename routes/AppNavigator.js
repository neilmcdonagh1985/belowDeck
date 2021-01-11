import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

export const AppNavigator = () => (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#00bfff',
                    height: 80
                },
                headerTintColor: '#2f44f4'
            }}
            >
            <Stack.Screen name="Home" component={Home} options={{ title: "Home"}} />
            <Stack.Screen name="Details" component={ReviewDetails} options={{ title: "Details"}}/>
        </Stack.Navigator>
)






