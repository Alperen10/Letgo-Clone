import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Product } from "../../models"
import styles from "../../components/FavouriteProductItem/style"
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"

type productProps = {
    product: Product,
    prodType: string,
}

function index({ product, prodType }: productProps) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails",{product:product})} style={prodType === "favourite" ? styles.favourite : styles.main}>
            <View style={prodType === "favourite" ? styles.favouriteView : styles.mainView}>
                <Image
                    source={{ uri: product.image }}
                    resizeMode="stretch"
                    style={prodType === "favourite" ? styles.favouriteImage : styles.mainImg}
                />
                {prodType === "favourite" && parseInt(product.id) % 2 == 1 && (
                    <View style={styles.labeledFav}>
                        <Text style={{ fontSize: 9 }}>Öne Çıkan</Text>
                    </View>)
                }


                <TouchableOpacity>
                    <AntDesign style={{ position: "absolute", right: 4, bottom: 5 }} name="heart" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default index