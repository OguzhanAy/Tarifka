import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Category from './pages/Category';
import CategoryList from './pages/CategoryList';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoryPage"
          component={Category}
          options={{
            headerTitleStyle: {color: '#ffa500'},
          }}
        />
        <Stack.Screen
          name="CategoryListPage"
          component={CategoryList}
          options={{
            headerTitleStyle: {color: '#ffa500'},
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            headerTitleStyle: {color: '#ffa500'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
