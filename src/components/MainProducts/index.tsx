import React from 'react'
import { View, Text } from 'react-native'
import { Product } from "../../models/index"
import styles from './styles'
import { AntDesign } from "@expo/vector-icons"
import FavouriteProductItem from '../FavouriteProductItem'

type mainProductsProps = {
    mainProducts: Product[];
    header: string;
    filtered: Boolean;
}

function index({ mainProducts, header, filtered }: mainProductsProps) {
    return (
        <View style={styles.productsContainer}>
            <View style={styles.titleProducts}>
                <Text style={filtered ? styles.topicTitleFiltered:styles.topicTitle}>
                    {header}
                </Text>
                {
                    !filtered &&
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={styles.detailTitle}>
                            Düzelt
                        </Text>
                        <AntDesign name="right" size={18} color="#F24E61" />
                    </View>
                }

            </View>
            <View style={styles.listContainer}>
                {mainProducts.map((item) => {
                    return (
                        <FavouriteProductItem prodType="main" key={item.id} product={item} />
                    )
                })

                }
            </View>
        </View>
    )
}

export default index