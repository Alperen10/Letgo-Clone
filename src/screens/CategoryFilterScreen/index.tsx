import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import productsAssets from '../../../assets/products';
import { Category, Product } from "../../models/index"
import FavouriteProducts from "../../components/FavouriteProducts"
import MainProducts from "../../components/MainProducts"
import CategoryFilter from '../../components/CategoryFilter';
import MessageNotification from '../../components/MessageNotification';
import FilteringCategory from '../../components/FilteringCategory';

function index(props) {
    const [products, setProducts] = useState<Product[]>([])
    const [category,setCategory] = useState<Category>(props.route.params.category)
    useEffect(() => {
        setProducts(productsAssets)
    }, [])


    return (
        <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
            <FilteringCategory category={category}/>
            <MessageNotification />
            <MainProducts mainProducts={products} filtered={true} header={"Arama sonuçları (101408)"}/>
        </ScrollView>
    )
}

export default index