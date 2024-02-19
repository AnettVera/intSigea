import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Switch } from '@rneui/themed';
import { Input } from '@rneui/base';


export default function Settings() {
    return (

        <View style={styles.container}>
            <Avatar
                size={80}
                rounded
                title={n}
                containerStyle={{ backgroundColor: "#052368", marginVertical: 20, borderColor: "#4480FF", borderWidth: 5 }}
            />

            <Switch
                rounded style={styles.switch}></Switch>


            <Input
                label='Nombre de usuario'
                labelStyle={styles.label}
                inputContainerStyle={styles.form}
                inputStyle={styles.input}
            />

            <Input
                label='Nombre'
                labelStyle={styles.label}
                inputContainerStyle={styles.form}
                inputStyle={styles.input}
            />

            <Input
                label='Apellido'
                labelStyle={styles.label}
                inputContainerStyle={styles.form}
                inputStyle={styles.input}
            />

            <Input
                label='CURP'
                labelStyle={styles.label}
                inputContainerStyle={styles.form}
                inputStyle={styles.input}
            />

            <Input
                label='Contraseña'
                labelStyle={styles.label}
                inputContainerStyle={styles.form}
                inputStyle={styles.input}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    input: {
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    label: {
        color: '#6B82B8',
        fontSize: 18,
        marginStart: 30,
        fontWeight: 'bold',
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginStart: 30,
    },
    switch: {

    }
})


