import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import useFetch from '../../components/hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import DetailCard from '../../components/DetailCard';

function Detail({route}) {
  const {id} = route.params;

  const {data, loading, error} = useFetch(`${Config.API_URLTHREE}=${id}`);

  const renderItem = ({item}) => <DetailCard products={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        keyExtractor={item => item.idMeal.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {backgroundColor: '#f2f2f2'},
});
