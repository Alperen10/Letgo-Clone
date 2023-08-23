import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import DetailsTextBox from '../../components/DetailsTextBox'
import ImageCarousel from '../../components/ImageCarousel'
import MappingComponent from '../../components/MappingComponent'
import MessageBox from '../../components/MessageBox'
import SellerProfile from '../../components/SellerProfile'
import SocialMedias from '../../components/SocialMedias'
import { Product } from '../../models'

function index(props) {
  const [product, setProduct] = useState<Product>(props.route.params.product)

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "white", marginBottom: '32%' }} showsVerticalScrollIndicator={false}>
        {/* Image Carousel*/}
        <ImageCarousel images={product.images} />
        <View style={{ paddingHorizontal: 20, paddingVertical: 14 }}>
          <DetailsTextBox
            price={product.price}
            name={product.name}
            description={product.description}
          />
          <SellerProfile averageRating={product.rating} />
          <MappingComponent />
          <SocialMedias />
        </View>
      </ScrollView>
      <MessageBox />
    </View>

  )
}

export default index