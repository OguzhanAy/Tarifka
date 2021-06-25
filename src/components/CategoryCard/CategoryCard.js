import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';

function CategoryCard({product, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.strCategoryThumb}} />
        <View style={styles.inner_container}>
          <Text style={styles.title}>{product.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryCard;
