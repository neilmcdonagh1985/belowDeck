import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';

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
            {/* <Stack.Screen name="Home" component={Home} options={{ title: "Home"}} /> */}
            {/* <Stack.Screen name="Home" component={Home} options={{ title: <Header></Header>}} /> */}
            {/* <Stack.Screen name="Home" component={Home} options={{ headerTitle: props => <Header />}} /> */}
            <Stack.Screen name="Home" component={Home} options={{ header: () => <Header />}} />
            <Stack.Screen name="Details" component={ReviewDetails} options={{ title: "Details"}}/>
        </Stack.Navigator>
)






