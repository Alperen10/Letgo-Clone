import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';


function index() {
    return (
        <View style={styles.productsContainer}>
            <View style={styles.titleProducts}>
                <Text style={styles.topicTitle}>
                    Vitrin İlanları
                </Text>
                <View>
                    <Text style={styles.detailTitle}>
                        Hepsini gör
                    </Text>
                    <AntDesign name="right" size={24} color="black" />
                </View>
            </View>
        </View>

    )
}

export default index