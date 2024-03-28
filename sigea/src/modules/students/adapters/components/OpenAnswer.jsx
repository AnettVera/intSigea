import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { Card } from 'react-native-elements';

export default function OpenAnswer() {
    return (
        <Card
            containerStyle={styles.cardContainer}
        >
            <Card.Title>Primera pregunta?</Card.Title>
            <Card.Divider />
            <TextInput
                placeholder='Escribe tu respuesta...'
                placeholderTextColor='#6b7288'
                style={styles.inputControl}
            />
        </Card>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20, // Esto da los bordes redondeados al Card
        borderWidth: 0, // Esto elimina el borde del Card
        // Añade sombra para darle un aspecto elevado, si así lo deseas
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    inputControl: {
        borderWidth: 0, // Esto quita el borde del TextInput
        backgroundColor: '#E4EAF8',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10, // Bordes redondeados para el TextInput
        fontSize: 16,
        color: '#222',
        marginTop: 10,
    },
});
