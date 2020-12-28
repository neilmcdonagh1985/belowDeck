import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

export const AppNavigator = () => (
    <NavigationContainer initialRouteName='Home'>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ title: ""}} />
            <Stack.Screen name="Details" component={ReviewDetails} options={{ title: ""}}/>
        </Stack.Navigator>
    </NavigationContainer>
)






