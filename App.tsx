import React from 'react';

import RootProvider from './src/core/presenation/providers/root/root_provider';
import Routes from './src/core/application/routes/routes';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <RootProvider>
        <Routes />
      </RootProvider>
    </NavigationContainer>
  );
}

export default App;
