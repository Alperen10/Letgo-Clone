import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeNavigator from './HomeNavigator'
import { Foundation, Ionicons, MaterialCommunityIcons, AntDesign, FontAwesome } from "@expo/vector-icons"
import PostNavigator from './PostNavigator'
import ChatNavigator from './ChatNavigator'


const Tab = createBottomTabNavigator()
function RootNavigator() {
    const CustomTabBarButton = ({ children }) => {
        return (
            <TouchableOpacity
            style={{
                width:70,
                height:70,
                backgroundColor:"#F23F5A",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:35,
                borderWidth:5,
                borderColor:"white",
                marginTop:-22
            }}
            >
                <FontAwesome name="camera" size={20} color="white" />
                <Text style={{color:"white",marginTop:2,fontWeight:"600"}}>Sat</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Tab.Navigator
            initialRouteName="Ana Sayfa"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#F24E61",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
            }}
        >

            <Tab.Screen
                name="Ana Sayfa"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Bildirimler"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Ionicons name="notifications" size={24} color={color} />
                            <View style={{
                                width: 16, height: 16, borderRadius: 8, backgroundColor: "#F24E61",
                                flexDirection: "row", alignItems: "center", justifyContent: "center",
                                position: "absolute", top: -4, right: -10
                            }}>
                                <Text style={{ fontSize: 12, color: "white" }}>2</Text>
                            </View>
                        </View>

                    )
                }}
            />
            <Tab.Screen
                name="Sat"
                component={HomeNavigator}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton {...props} />
                }}
            />
            <Tab.Screen
                name="Sohbet"
                component={ChatNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="message-processing" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="İlanlarım"
                component={PostNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="appstore1" size={24} color={color} />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default RootNavigator