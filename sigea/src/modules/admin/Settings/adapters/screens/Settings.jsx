import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/themed';
import { Button, Input } from '@rneui/base';
import { useAuth } from '../../../../../config/context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Settings() {

  const { userData } = useAuth();
  const navigation = useNavigation();
  const { userType, onLoginSuccess } = useAuth();

/*
  console.log(userData);
  console.log(userData.user.person.name);
  console.log(userData.user.person.lastname);
  console.log(userData.user.person.surname);
  console.log(userData.user.person.curp);
  */

  const admin =
  {
    name: userData.user.username,
    lastname: userData.user.person.lastname,
    surname: userData.user.person.surname,
    curp: userData.user.person.curp,
  }

  const full_lastname = admin.surname ? `${admin.lastname} ${admin.surname}` : admin.lastname; // Si el apellido materno existe, concatenar ambos apellidos
  const username = `${admin.name}_${admin.lastname}`;

  const handleLogout = async () => {
    await AsyncStorage.removeItem('session'); // Eliminar la sesión almacenada
    onLoginSuccess(null)
  };


  return (

    <View style={styles.container}>
      <Avatar
        size={80}
        rounded
        title={admin.name[0]}
        containerStyle={{ backgroundColor: "#052368", marginVertical: 20, borderColor: "#4480FF", borderWidth: 5 }}
      />

      <Text style={styles.name}>{admin.name}</Text>


      <Input
        label='Nombre de usuario'
        labelStyle={styles.label}
        inputContainerStyle={styles.form}
        inputStyle={styles.input}
        value={username}
        editable={false}
      />


      <Input
        label='Nombre'
        labelStyle={styles.label}
        inputContainerStyle={styles.form}
        inputStyle={styles.input}
        value={admin.name}
        editable={false}
      />

      <Input
        label='Apellidos'
        labelStyle={styles.label}
        inputContainerStyle={styles.form}
        inputStyle={styles.input}
        value={full_lastname}
        editable={false}
      />

      <Input
        label='CURP'
        labelStyle={styles.label}
        inputContainerStyle={styles.form}
        inputStyle={styles.input}
        value={admin.curp}
        editable={false}
      />

      <Input
        label='Contraseña'
        labelStyle={styles.label}
        inputContainerStyle={styles.form}
        inputStyle={styles.input}
      />
      <Button
        title="Cerrar Sesión"
        onPress={handleLogout}
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
})
