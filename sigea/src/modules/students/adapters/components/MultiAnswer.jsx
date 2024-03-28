import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CheckBox } from '@rneui/themed';

export default function MultiAnswer({ question, options }) {
    const [selectedIndex, setSelectedIndex] = useState(null);



    return (
        <Card containerStyle={styles.cardContainer}>
            <Card.Title>{question}</Card.Title>
            <Card.Divider />
            {options.map((option, index) => ( /* Ahora mapea las opciones recibidas */
                <CheckBox
                    key={option.id} // Es mejor usar un identificador único como key, en lugar de index
                    title={option.text} // Usa el texto de cada opción
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={option.id === selectedIndex} // Aquí comparas con option.id
                    onPress={() => setSelectedIndex(option.id)} // Aquí también deberías usar option.id
                    containerStyle={styles.checkboxContainer}
                    textStyle={styles.checkboxText}
                />
            ))}
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
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        margin: 0,
        marginBottom: 5,
        padding: 0,
    },
    checkboxText: {
        fontSize: 16,
    },
});
