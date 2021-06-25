import React from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({products}) => {
  const openUrl = () => {
    Linking.openURL(products.strYoutube);
  };
  return (
    <View>
      <Image style={styles.image} source={{uri: products.strMealThumb}} />
      <Text style={styles.title}>{products.strMeal}</Text>
      <Text style={styles.region}>{products.strArea}</Text>
      <View style={styles.border} />
      <Text style={styles.desc}>{products.strInstructions}</Text>
      <TouchableOpacity style={styles.button} onPress={openUrl}>
        <Text style={styles.button_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;
