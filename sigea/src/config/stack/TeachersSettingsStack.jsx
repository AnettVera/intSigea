import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import TeachersSettings from '../../modules/admin/Teachers/adapters/screens/TeachersSettings'
const Stack = createStackNavigator();

export default function StudentsSettingsStack() {
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
                name='TeachersSettings'
                component={TeachersSettings}
                options={{ title: 'Ajustes' }}
            />
        </Stack.Navigator>
    )
}