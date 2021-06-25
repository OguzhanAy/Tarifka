import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../components/hooks/useFetch';

import Error from '../../components/Error';
import Loading from '../../components/Loading';
import CategoryCard from '../../components/CategoryCard';

function Category({navigation}) {
  const {data, loading, error} = useFetch(Config.API_URL);
  const {categories} = data;

  const handleList = name => {
    navigation.navigate('CategoryListPage', {name});
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const renderItem = ({item}) => (
    <CategoryCard
      product={item}
      onSelect={() => handleList(item.strCategory)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.idCategory.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

export default Category;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffa500'},
});
