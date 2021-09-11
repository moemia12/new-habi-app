import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from 'expo-font'

// screens
import { PlantDetail, TakeAction } from "./screens/";
// extra screens
import Tabs from "./navigation/tabs";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="PlantDetail" component={PlantDetail} options={{ headerShown: false }} />
                <Stack.Screen name="TakeAction" component={TakeAction} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App
