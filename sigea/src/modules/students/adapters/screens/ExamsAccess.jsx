import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Welcome from '../../../../../assets/img/welcome.png'
import Exam from './Exam'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../../config/context/AuthContext';
import AxiosClient from '../../../../config/http-client/axios_client';
import { useRoute } from '@react-navigation/native';
export default function ExamsAccess() {
    //para hacer que se ponga en blanco el input
    const route = useRoute();
    const navigation = useNavigation();
    const [accessCode, setAccessCode] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState('');
    const { userData, setArrayData } = useAuth();
    const { arrayDataO, setArrayDataO } = useAuth();
    //{}  OBjeto
    //[ ] Arreglo
    const { user: { id_user, username, person: { name, lastname, surname, curp } } } = userData;

    // para hacer que se ponga en blanco el input
    useEffect(() => {
        setAccessCode('');
    }, [route.params?.resetInput]);


    const user =
    {
        name: surname ? `${name} ${surname}` : `${name}`,
        lastname: lastname,
        surname: surname,
        matricula: username,
        curp: curp,
    }

    //para ver si ya se ha hecho el examen
    const checkIfExamTaken = async () => {
        try {
            const response = await AxiosClient.get(`api/exam/foundExamForStudent/${id_user}`);

            if (response.data.length > 0) {
                // Si la respuesta contiene datos, entonces el examen ya ha sido tomado
                Alert.alert('Examen constestado', 'Ya has tomado este examen.');
                return true;
            } else {
                // Si la respuesta no contiene datos, entonces el examen no ha sido tomado
                return false;
            }
        } catch (error) {
            console.error(error);
        }
    };

    //Metodo para ir a comprobar el codigo de acceso y pasar al examen
    const examValidation = async () => {
        setShowErrorMessage('');
        if (accessCode.length < 6) {
            setShowErrorMessage('El código de acceso debe tener al menos 6 caracteres');
            return;
        }
        const examTaken = await checkIfExamTaken();

        if (!examTaken) {
            try {
                const codeUperCase = accessCode.toUpperCase();
                const response = await AxiosClient.get(`api/exam/questionOptionCode/${codeUperCase}`);
                setShowErrorMessage('');
                setArrayData([]);
                setArrayDataO([]);
                navigation.navigate('Exam', { exam: response.data, user: id_user, })
            } catch (error) {
                Alert.alert(
                    "Código de acceso inválido",
                    "Código de acceso no válido, por favor verifique e intente de nuevo.",
                    [
                        {
                            text: "OK", onPress: () => {
                            }
                        }
                    ]
                );
            }
        }
    };



    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={Welcome} style={styles.img} />
                    <Text style={styles.title}>{`¡Hola ${user.name}!`}</Text>
                </View>


                <View style={styles.input}>

                    <TextInput
                        placeholder='Codigo de acceso'
                        placeholderTextColor='#6b7288'
                        style={styles.inputControl}
                        value={accessCode}
                        onChangeText={(text) => setAccessCode(text)}
                        errorMessage={showErrorMessage}
                        errorStyle={{ marginLeft: 29, fontSize: 12 }}
                    />
                    {showErrorMessage !== '' && (
                        <Text style={styles.errorTextStyle}>{showErrorMessage}</Text>
                    )}
                </View>

                <View style={styles.formAction}>
                    <TouchableOpacity onPress={examValidation}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Acceder</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 15,
    }, card: {
        backgroundColor: '#E4EAF8',
        borderRadius: 15,
        padding: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }, title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#052368',
        textAlign: 'center'
    }, input: {
        marginBottom: 10,
        alignItems: 'left',
        textAlign: 'left'
    },
    inputControl: {
        borderWidth: 2,
        height: 44,
        borderColor: '#4480FF',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 16,
        fontWeight: '500',
        color: '#222',
        marginTop: 30,
    },
    btn: {
        backgroundColor: '#4480FF',
        borderRadius: 8,
        borderWidth: 1,
        height: 40,
        width: '80%',
        borderColor: '#4480FF',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 95,
    },
    btnText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center'
    },
    form: {
        marginBottom: 20,
        flex: 1,
    },
    formAction: {
        marginVertical: 10,
        alignItems: 'center',
    }, img: {
        width: 150,
        height: 150,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
        marginTop: 10,
    },

})