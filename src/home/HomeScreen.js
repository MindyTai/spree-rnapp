import React, { useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from './fetchProducts'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dae4e9',  
  },
  product: {
    margin:  20,
    height: '100%'
  },
  card: {
    backgroundColor: 'white',
    borderRadius:3,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})

const ProductItem = ({ data, onPress }) => {
  const { name, price } = data.attributes

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text> { name } </Text>
      <Text>$ { price } </Text>
    </TouchableOpacity>
  )
}

const HomeScreen = ({ navigation }) => {
  const products = useSelector(state => state.productsReducer.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  })

  return (
    <SafeAreaView>
      <Button
        title='Log In'
        onPress={()=> { navigation.navigate('Account') }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.product}>
          { products?.map((data, idx) => 
            <ProductItem data={data} key={idx} onPress={() => navigation.navigate('ProductDetail',{ data }) }/>) }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen