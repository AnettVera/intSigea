import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/config/stack/AuthStack';
import MainNavigation from './src/config/navigation/Navigation';
import Login from './src/modules/login/adapters/screens/Login'

export default function App() {
  

  return (
    <MainNavigation></MainNavigation>
  );
}
