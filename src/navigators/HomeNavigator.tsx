import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import { SafeAreaView, TouchableOpacity, Image, TextInput, Text } from 'react-native'
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import { FontAwesome5 } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

const Stack = createStackNavigator()

const MainHeaderComponent = () => {
    return (
        <SafeAreaView style={{ flexDirection: "row", alignItems: "center", width: "90%", marginHorizontal: "5%", marginBottom: 10 }}>
            <TouchableOpacity>
                <Image
                    source={{ uri: "https://www.looper.com/img/gallery/why-the-professor-from-money-heist-looks-so-familiar/intro-1587390568.jpg" }}
                    style={{ width: 38, height: 38, borderRadius: 19 }}
                />
            </TouchableOpacity>
            <TextInput
                placeholder="Ara..."
                style={{ backgroundColor: "#e5e5e5", flex: 1, marginHorizontal: 10, height: 35, borderRadius: 10, paddingLeft: "32%", fontSize: 15 }}
            />
            <Text style={{ color: "#FF184D", fontSize: 18 }}>Filtrele</Text>
        </SafeAreaView>
    )
}

const CategoryHeaderComponent = () => {
    const navigation_user = useNavigation()

    return (
        <SafeAreaView style={{ flexDirection: "row", alignItems: "center", width: "90%", marginHorizontal: "5%", marginBottom: 10 }}>
            <TouchableOpacity onPress={() => navigation_user.goBack()}>
                <FontAwesome5
                    name="arrow-left"
                    size={24}
                    color="#989898"
                />
            </TouchableOpacity>
            <TextInput
                placeholder="Ara..."
                style={{ backgroundColor: "#e5e5e5", flex: 1, marginHorizontal: 10, height: 35, borderRadius: 10, paddingLeft: "32%", fontSize: 15 }}
            />
            <Text style={{ color: "#FF184D", fontSize: 18 }}>Filtrele (1)</Text>
        </SafeAreaView>
    )
}

function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    header: () => (
                        <MainHeaderComponent />
                    )
                }}
            />
            <Stack.Screen
                name="CategoryFiltering"
                component={CategoryFilterScreen}
                options={{
                    header: () => (
                        <CategoryHeaderComponent />
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator