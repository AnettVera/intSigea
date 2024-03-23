import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from '@rneui/themed';
import { Icon } from 'react-native-elements';
import { Button, Input } from '@rneui/base';
import { useAuth } from '../../../../../config/context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AxiosClient from '../../../../../config/http-client/axios_client';
import { ScrollView } from 'react-native-gesture-handler';


export default function Settings() {
  const [editMode, setEditMode] = useState(false);

  const { userData } = useAuth();
  const navigation = useNavigation();
  const { userType, onLoginSuccess } = useAuth();
  const [name, setName] = useState(userData.user.person.name);
  const [secondName, setSecondName] = useState(userData.user.person.secondName);
  const [lastname, setLastname] = useState(userData.user.person.lastname);
  const [surname, setSurname] = useState(userData.user.person.surname);
  const [curp, setCurp] = useState(userData.user.person.curp);
  const [email, setEmail] = useState(userData.user.person.email);
  const [password, setPassword] = useState('');


  const [fulllastname, setFullLastname] = useState(surname ? `${lastname} ${surname}` : lastname); //Apellido paterno y materno // surname es el apellido materno y lastname es el apellido paterno
  const [username, setUsername] = useState(`${name}_${lastname}`); //Nombre de usuario
  const [fullName, setFullName] = useState(secondName ? `${name} ${secondName}` : name); //Nombre completo

  const nameUpdate = fullName.split(' ')[0];
  const SecondNameUpdate = fullName.split(' ')[1];
  const surnameUpdate = fulllastname.split(' ')[1];
  const lastnameUpdate = fulllastname.split(' ')[0];
  // curp utilizamos el mismo
  // email utilizamos el mismo


  // Función para manejar el cambio entre modos
  const toggleEditMode = () => {
    console.log("Comenzando actualización del usuario333333");
    setEditMode(!editMode);
  };

  // primero entra aqui
  const handleUpdate = async () => {

    try {
      const payload = {
        id: userData.user.person.id_person,
        name: nameUpdate,
        secondName: SecondNameUpdate,
        lastname: lastnameUpdate,
        surname: surnameUpdate,
        email: email,
        curp: curp,
        user: {
          username: username,
          password: password,
        },
      }
      console.log("Comenzando actualización del usuario");
      const response = await AxiosClient.put(`api/person/admin/${1}`, payload)
      alert('actualizado correctamente');
      toggleEditMode();
      console.log(response.data);
    } catch (error) {
      console.log(`Error ${error}`);
    }



  };



  const handleLogout = async () => {
    await AsyncStorage.removeItem('session'); // Eliminar la sesión almacenada
    onLoginSuccess(null)
  };


  return (

    <View style={styles.container}>
      <Avatar
        size="large"
        rounded
        title={name[0]}
        containerStyle={{ backgroundColor: "#052368", marginVertical: 15, borderColor: "#4480FF", borderWidth: 5 }}
      >
        <Avatar.Accessory
          size={24}
          name="edit"
          type="pen-to-square"
          onPress={toggleEditMode}
        />
      </Avatar>

      <Text style={styles.name}>Admin</Text>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <Input
        label='Nombre de usuario'
        labelStyle={styles.label}
        inputContainerStyle={styles.form}
        inputStyle={styles.input}
        value={username}
        onChangeText={setUsername}
        editable={editMode}
      />

      <Input
        label='Nombre'
        labelStyle={styles.label}
        inputContainerStyle={styles.form}
        inputStyle={styles.input}
        value={fullName}
        onChangeText={setFullName}
        editable={editMode}
      />

      <Input
        label='Apellidos'
        labelStyle={styles.label}
        inputContainerStyle={styles.form}
        inputStyle={styles.input}
        value={fulllastname}
        onChangeText={setFullLastname}
        editable={editMode}
      />

      <Input
        label='CURP'
        labelStyle={styles.label}
        inputContainerStyle={styles.form}
        inputStyle={styles.input}
        value={curp}
        onChangeText={setCurp}
        editable={editMode}
      />

      <Input
        label='Email'
        labelStyle={styles.label}
        inputContainerStyle={styles.form}
        inputStyle={styles.input}
        value={email}
        onChangeText={setEmail}
        editable={editMode}
      />

      <Input
        label='Contraseña'
        labelStyle={styles.label}
        inputContainerStyle={styles.form}
        inputStyle={styles.input}
        value={password}
        onChangeText={setPassword}
        editable={editMode}
      />
      {editMode ? (
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      )}
      </ScrollView>
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
    marginVertical: 10,
  },
  input: {
    paddingHorizontal: 6,
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
  button: {
    backgroundColor: '#4480FF', // Color de fondo del botón
    padding: 10, // Espaciado interno del botón
    borderRadius: 20, // Hace que los bordes del botón sean más redondos
    alignItems: 'center', // Centra el texto del botón
    justifyContent: 'center', // Asegura que el contenido esté centrado verticalmente
    margin: 10, // Margen exterior para separarlo de otros elementos
  },
  buttonText: {
    color: '#FFFFFF', // Color del texto
    fontSize: 16, // Tamaño del texto
  },
  scrollView: {
    width: '100%', // O ajusta según sea necesario
  },
  scrollContent: {
    alignItems: 'center', // Centra los elementos en el eje cruzado
  },
})
