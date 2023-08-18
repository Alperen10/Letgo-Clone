import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import productsAssets from '../../../assets/products';
import { Product } from "../../models/index"
import FavouriteProducts from "../../components/FavouriteProducts"
import MainProducts from "../../components/MainProducts"
import CategoryFilter from '../../components/CategoryFilter';
import MessageNotification from '../../components/MessageNotification';



function index() {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        setProducts(productsAssets)
    }, [])


    return (
        <ScrollView style={{backgroundColor:"white",height:"100%"}}>
            <MessageNotification/>
            <CategoryFilter/>
            <FavouriteProducts/>
            <MainProducts mainProducts={products}/>
        </ScrollView>
    )
}

export default index