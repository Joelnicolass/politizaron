import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameView from '../../../features/game/presentation/views/game_view/game_view';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="game_view">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="game_view"
        component={GameView}
      />
    </Stack.Navigator>
  );
};

export default Routes;
