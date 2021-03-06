import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';
import PostForm from "../screens/postForm";

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
            <Stack.Screen name="Home" component={Home} options={{ header: () => <Header title='Revive' />}} />
            <Stack.Screen name="Details" component={ReviewDetails} options={{ title: "Details"}}/>
            <Stack.Screen name="PostForm" component={PostForm} options={{ title: "PostForm"}} />
        </Stack.Navigator>
)






