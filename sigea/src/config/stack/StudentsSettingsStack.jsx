import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import StudentsSettings from '../../modules/admin/Students/adapters/screens/StudentsSettings'
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
                name='StudentsSettings'
                component={StudentsSettings}
                options={{ title: 'Ajustes' }}
            />
        </Stack.Navigator>
    )
}