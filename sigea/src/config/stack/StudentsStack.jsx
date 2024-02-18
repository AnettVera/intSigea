import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Students from '../../modules/admin/Students/adapters/screens/Students'

const Stack = createStackNavigator();

export default function StudentsStack() {
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
            name='Students'
            component={Students}
            options={{title:'Estudiantes'}}
        />
    </Stack.Navigator>
  )
}