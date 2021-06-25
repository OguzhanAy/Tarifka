import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../components/hooks/useFetch';
import CategoryListCard from '../../components/CategoryListCard';

import Error from '../../components/Error';
import Loading from '../../components/Loading';

function CategoryList({route, navigation}) {
  const {name} = route.params;

  const {data, loading, error} = useFetch(
    `${Config.API_URLTWO}=${name.toUpperCase()}`,
  );
  const {meals} = data;

  const handleDetail = id => {
    navigation.navigate('DetailPage', {id});
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const sortItem = ({item}) => (
    <CategoryListCard
      products={item}
      onSelect={() => handleDetail(item.idMeal)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={item => item.idMeal.toString()}
        renderItem={sortItem}
      />
    </View>
  );
}

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
  },
});
