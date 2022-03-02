import { View } from 'react-native';
import StackNavigation from './navigation/Stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export default function App() {
  return (
    <React.Fragment>
      <NavigationContainer>
          <StackNavigation />
      </NavigationContainer>
    </React.Fragment>
  );
}


