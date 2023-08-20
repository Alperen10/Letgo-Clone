import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { SafeAreaView, TouchableOpacity, Image, TextInput, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PostScreen from "../screens/PostScreen"
import {MaterialCommunityIcons,Ionicons} from "@expo/vector-icons"

const Stack = createStackNavigator()


function PostNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={PostScreen}
                options={{
                    headerStyle:{backgroundColor:"#F1F1F1"},
                    headerTitle:()=>(
                        <Text style={{fontWeight:"bold",fontSize:15}}>İlanlarım</Text>
                    ),
                    headerLeft:()=>(
                        <MaterialCommunityIcons style={{marginLeft:15}} name="lightbulb-on" size={24} color="#919191"/>
                    ),
                    headerRight:()=>(
                        <Ionicons style={{marginRight:15}} name="ios-arrow-redo-sharp" size={24} color="#919191"/>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default PostNavigator