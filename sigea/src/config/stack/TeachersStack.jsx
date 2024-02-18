import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Teachers from '../../modules/admin/Teachers/adapters/screens/Teachers'

const Stack= createStackNavigator();

export default function TeachersStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4480FF', 
        },
        headerTintColor: '#FFF', 
      }}
    >
        <Stack.Screen
            name='Teachers'
            component={Teachers}
            options={{title:'Docentes'}}
        />
    </Stack.Navigator>
  )
}