import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { Product } from '../../models'
import { FontAwesome, Ionicons } from '@expo/vector-icons'


const { width, height } = Dimensions.get("window")
type favouriteItemProps = {
    product: Product
}

function index({ product }: favouriteItemProps) {
    return (
        <View style={{
            height: height * 0.18, borderColor: "#EAEAEA", borderWidth: 2, shadowColor: "gray", shadowOpacity: 0.14,
            borderRadius: 10, marginBottom: 18, padding: 14
        }}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingBottom: 18, borderBottomWidth: 1.2, borderBottomColor: "#dcdee0" }}>
                <Image style={{ width: width * 0.17, height: width * 0.17, borderRadius: 8 }} source={{ uri: product.image }} />
            </View>
            <View style={{ width: "80%", marginLeft: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <FontAwesome name="turkish-lira" size={15} color="black" />
                        <Text style={{ fontWeight: "bold", fontSize: 14, marginLeft: 3 }}>{product.price}</Text>
                    </View>
                    <Ionicons name="ios-trash-sharp" size={21} color="#919191" />
                </View>
                <Text style={{ fontSize: 14, fontWeight: "500", color: "#646464" }}>
                    {product.description}
                </Text>
            </View>
            <View style={{ width: "74%", flexDirection: "row", justifyContent: "center", marginHorizontal: "13%", marginTop: 18, alignItems: "center" }}>
                <Text style={{ color: "#7A7A7A", fontWeight: "bold", fontSize: 14 }}>Paylaş</Text>
                <Text style={{ color: "#FF3E55", fontWeight: "bold", fontSize: 14 }}>Sohbet Et</Text>
            </View>
        </View>
    )
}

export default index