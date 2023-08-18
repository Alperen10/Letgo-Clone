import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeNavigator from './HomeNavigator'
import { Foundation } from "@expo/vector-icons"


const Tab = createBottomTabNavigator()
function RootNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Ana Sayfa"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#F24E61",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                },
            }}
        >

            <Tab.Screen
                name="Ana Sayfa"
                component={HomeNavigator}
                options={{
                    tabBarIcon:({color})=>(
                        <Foundation name="home" size={24} color={color}/>
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default RootNavigator