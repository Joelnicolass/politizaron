import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const RootProvider = ({children}: Props) => {
  return <>{children}</>;
};

export default RootProvider;
