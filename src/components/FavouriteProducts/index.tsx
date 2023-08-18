import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import productsAssets from '../../../assets/products';
import { Product } from "../../models/index"
import FavouriteProductItem from "../../components/FavouriteProductItem"


function index() {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        setProducts(productsAssets)
    }, [])


    return (
        <View style={styles.productsContainer}>
            <View style={styles.titleProducts}>
                <Text style={styles.topicTitle}>
                    Vitrin İlanları
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.detailTitle}>
                        Hepsini gör
                    </Text>
                    <AntDesign name="right" size={18} color="#F24E61" />
                </View>
            </View>

            <ScrollView bounces={true} horizontal={true} showsHorizontalScrollIndicator={false}>
                {products.map((item) => {
                    return <FavouriteProductItem prodType="favourite" key={item.id} product={item}/>
                })}
            </ScrollView>
        </View>

    )
}

export default index