import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryListCard.style';

function CategoryListCard({products, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: products.strMealThumb}} />
        <View style={styles.inner_container}>
          <Text style={styles.text}>{products.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryListCard;
