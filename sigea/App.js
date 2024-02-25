import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/config/stack/AuthStack';
import MainNavigation from './src/config/navigation/Navigation';
import Login from './src/modules/login/adapters/screens/Login'
import NavigationStudent from './src/config/navigation/NavigationStudent';

export default function App() {
  

  return (
    <NavigationStudent></NavigationStudent>
  );
}
