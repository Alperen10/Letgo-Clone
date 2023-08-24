import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"

const { width, height } = Dimensions.get("window")

function index() {
    return (
        <View>
            <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 39.64917,
                    longitude: 27.88611,
                    latitudeDelta: 0,
                    longitudeDelta: 0.5,
                }}
                style={{ height: height * 0.18, borderRadius: 12, marginTop: 18 }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', height: height * 0.044, marginTop: -height * 0.04, borderColor: "#a6a6a6", borderBottomWidth: 0.2, borderRightWidth: 0.2, borderLeftWidth: 0.2, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'white' }}>
                <Text style={{ paddingHorizontal: 16 }}>10300, Edremit</Text>
            </View>

        </View >
    )
}

export default index