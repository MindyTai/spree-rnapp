import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dae4e9',
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5
  },
  card: {
    backgroundColor: 'white',
    borderRadius:3,
    padding: 10,
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

const ProductDetailScreen = ({route, navigation}) => {
  const { data } = route.params;
  const { name, price, description } = data.attributes
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Product Name
      </Text>
      <Text style={styles.card}>
       { name }
      </Text>
      <Text style={styles.title}>
        Description
      </Text>
      <Text style={styles.card}>
       { description }
      </Text>
      <Text style={styles.title}>
        Price
      </Text>
      <Text style={styles.card}>
       { price }
      </Text>
    </View>
  )
}

export default ProductDetailScreen