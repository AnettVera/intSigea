import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import { Avatar } from '@rneui/themed';
import { Input, Button } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import AxiosClient from '../../../../../config/http-client/axios_client';


export default function StudentSettings({ route }) {
    const navigation = useNavigation();
    const userData = route.params.user || {};
    const [ username, setUsername ] = useState(userData.username);
    const [name, setName] = useState(userData.person.name);
    const [lastname, setLastname] = useState(userData.person.lastname);
    const [secondName, setSecondName] = useState(userData.person.secondName); // segundo nombre
    const [surname, setSurname] = useState(userData.person.surname);
    const [curp, setCurp] = useState(userData.person.curp);
    const [email, setEmail] = useState(userData.person.email);
    const [password, setPassword] = useState('');
    const [isEnabled, setIsEnabled] = useState(userData.status); // status es un entero y isEnabled es un booleano


    //Para mostrar un mensaje de error en caso de que haya un error en la actualización
    const [errorUsername, setErrorUsername] = useState("");
    const [errorFullName, setErrorFullName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const [errorCURP, setErrorCURP] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    /////////////////////////////////////////////////////

    const [fullname, setFullname] = useState(`${name}${secondName ? ' ' + secondName : ''}`);
    const [fulllastname, setFulllastname] = useState(`${lastname}${surname ? ' ' + surname : ''}`);



    const nameUpdate = fullname.split(' ')[0];
    const SecondNameUpdate = fullname.split(' ')[1];
    const surnameUpdate = fulllastname.split(' ')[1];
    const lastnameUpdate = fulllastname.split(' ')[0];


    //!! ME FALTA MANEJAR CUANDO EN LOS INPUT COMO METE SUS DOS NOMRES Y APELLIDOS Y SEPARARLOS

    useEffect(() => {
        if (userData) {
            navigation.setOptions({ title: `${fullname}` });
        }
    }, [userData]);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };


    const updateStudent = async () => {
        // Reiniciar mensajes de error
        setErrorUsername("");
        setErrorFullName("");
        setErrorLastName("");
        setErrorCURP("");
        setErrorEmail("");

        let isValid = true;

        if (!username.trim()) {
            setErrorUsername("El nombre de usuario es obligatorio.");
            isValid = false;
        }

        if (!fullname.trim()) {
            setErrorFullName("El nombre es obligatorio.");
            isValid = false;
        }

        if (!fulllastname.trim()) {
            setErrorLastName("Los apellidos son obligatorios.");
            isValid = false;
        }

        if (curp.length !== 18) {
            setErrorCURP("El CURP debe tener exactamente 18 caracteres.");
            isValid = false;
        }

        if (!email.includes('@')) {
            setErrorEmail("El correo electrónico debe contener un '@'.");
            isValid = false;
        }

        if (!isValid) return; // Detener la ejecución si hay errores

        try {
            const payload = {
                id: userData.person.id_person,
                name: nameUpdate,
                secondName: SecondNameUpdate,
                lastname: lastnameUpdate,
                surname: surnameUpdate,
                email: email,
                curp: curp,
                user: {
                    id_user: userData.id_user,
                    username: username,
                    password: password,
                },
            };

            // El ID del rol debe ser pasado como parte de la URL, asegúrate de tener el valor correcto para idRole
            const idRole = userData.roles[0].id_rol; // Este es un ejemplo, ajusta según cómo determinas el ID del rol en tu aplicación
            console.log(payload);
            const response = await AxiosClient.put(`api/person/student/${idRole}`, payload);
            alert('Estudiante actualizado correctamente');
            // Reiniciar mensajes de error
            setErrorUsername("");
            setErrorFullName("");
            setErrorLastName("");
            setErrorCURP("");
            setErrorEmail("");
            navigation.navigate('Students'); // Asegúrate de que 'Students' es el nombre correcto de la pantalla a la que quieres regresar
        } catch (error) {
            console.error("Error al actualizar el estudiante: ", error);
            alert('Error al actualizar el estudiante');
        }
    };


    const handleToggleSwitch = async () => {
        const newStatus = !isEnabled;

        try {
            // Realiza la llamada a la API para actualizar el estado
            const response = await AxiosClient.patch(`/api/user/${userData.id_user}`, {
                status: newStatus
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Si la operación es exitosa, actualiza isEnabled para reflejar el cambio real
            // Asumiendo que la operación fue exitosa y el estado se actualizó en el backend
            console.log('Estado actualizado con éxito:', response.data);
            navigation.navigate('Students')
        } catch (error) {
            console.error('Error al actualizar el estado:', error);
            // No necesitas revertir isEnabled aquí ya que lo actualizas solo después de la confirmación exitosa
        }
    };

    return (

        <ScrollView>
            <View style={styles.container}>
                <Avatar
                    size={80}
                    rounded
                    title={name[0]}
                    containerStyle={{ backgroundColor: "#052368", marginVertical: 20, borderColor: "#4480FF", borderWidth: 5 }}
                />

                <Switch
                    trackColor={{ false: '#4480FF', true: '#CCCCCC' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#6B82B8"
                    onValueChange={handleToggleSwitch}
                    value={isEnabled}
                />

                <Input
                    label='Nombre de usuario'
                    labelStyle={styles.label}
                    inputContainerStyle={styles.form}
                    inputStyle={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    errorMessage={errorUsername}
                    errorStyle={{ marginLeft: 29, fontSize: 12 }}
                />

                <Input
                    label='Nombres'
                    labelStyle={styles.label}
                    inputContainerStyle={styles.form}
                    inputStyle={styles.input}
                    value={fullname}
                    onChangeText={setFullname}
                    errorMessage={errorFullName}
                    errorStyle={{ marginLeft: 29, fontSize: 12 }}
                />

                <Input
                    label='Apellidos'
                    labelStyle={styles.label}
                    inputContainerStyle={styles.form}
                    inputStyle={styles.input}
                    value={fulllastname}
                    onChangeText={setFulllastname}
                    errorMessage={errorLastName}
                    errorStyle={{ marginLeft: 29, fontSize: 12 }}
                />

                <Input
                    label='CURP'
                    labelStyle={styles.label}
                    inputContainerStyle={styles.form}
                    inputStyle={styles.input}
                    value={curp}
                    onChangeText={setCurp}
                    errorMessage={errorCURP}
                    errorStyle={{ marginLeft: 29, fontSize: 12 }}
                />


                <Input
                    label='Email'
                    labelStyle={styles.label}
                    inputContainerStyle={styles.form}
                    inputStyle={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    errorMessage={errorEmail}
                    errorStyle={{ marginLeft: 29, fontSize: 12 }}
                />

                <Input
                    label='Contraseña'
                    labelStyle={styles.label}
                    inputContainerStyle={styles.form}
                    inputStyle={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <Button
                    title="Actualizar"
                    containerStyle={styles.btnContainer}
                    buttonStyle={styles.btnStyle}
                    onPress={updateStudent}
                />
            </View>
        </ScrollView>
    );
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
        paddingHorizontal: 6,
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

    },
    btnContainer: {
        width: "78%",
        borderRadius: 10,
    },
    btnStyle: {
        backgroundColor: "#052368",
    },
});
