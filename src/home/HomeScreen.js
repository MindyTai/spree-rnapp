import React, { useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from './fetchProducts'

const styles = StyleSheet.create({
  container: {
  },
  product: {
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 20
  }
})

const ProductItem = ({ data }) => {
  const { name, price } = data.attributes

  return (
    <View style={styles.product}>
      <View>
        <View>
        <Text>{ name }</Text>
          <Text>
          $ { price }
          </Text>
        </View>
      </View>
    </View>
  )
}

const HomeScreen = ({ navigation }) => {
  const products = useSelector(state => state.productsReducer.products)
  const page = useSelector(state => state.productsReducer.page)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts(page))
  },[page])

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title='Log In'
        onPress={()=> { navigation.navigate('Account') }}
      />
      <ScrollView>
      { products?.map((data, idx) => <ProductItem data={data} key={idx}/>) }
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen