import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import { SafeAreaView, TouchableOpacity, Image, TextInput, Text, View } from 'react-native'
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import { FontAwesome5, Ionicons, Entypo } from "@expo/vector-icons"
import { useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'

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
        <View style={{ flexDirection: "row", alignItems: "center", width: "90%", marginHorizontal: "5%", marginBottom: 10 }}>
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
        </View>
    )
}

function MyStack({ navigation, route }) {
    const tabHiddenRoutes = ["ProductDetails"]

    React.useLayoutEffect(()=>{
        const routeName = getFocusedRouteNameFromRoute(route)
        console.log("Route name is ",routeName)
        if(tabHiddenRoutes.includes(routeName)){
            navigation.setOptions({tabBarStyle:{display:"none"}})
        }
        else{
            console.log("Aç ",routeName)
            navigation.setOptions({tabBarStyle:{display:"true"}})
            
        }
    },[navigation,route])

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
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{
                    headerTransparent: true,
                    headerRight: () => (
                        <View style={{
                            backgroundColor: 'rgba(0,0,0,0.5', height: 36, width: 36, flexDirection: "row", justifyContent: "center",
                            alignItems: "center", borderRadius: 18, marginRight: 20
                        }}>
                            <Ionicons style={{ marginRight: -3 }} name="ios-arrow-redo-sharp" size={24} color="#FEFDFC" />
                        </View>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity style={{
                            backgroundColor: 'rgba(0,0,0,0.5', height: 36, width: 36, flexDirection: "row", justifyContent: "center",
                            alignItems: "center", borderRadius: 18, marginLeft: 20
                        }}
                            onPress={() => navigation.goBack()}
                        >
                            <Entypo name="cross" size={28} color="#FEFDFC" />
                        </TouchableOpacity>
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

export default function HomeNavigator({ navigation, route }) {
    return <MyStack navigation={navigation} route={route} />

}