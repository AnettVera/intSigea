import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Logo from '../../../../../assets/img/logo.png';
import { Input } from '@rneui/themed';


export default function Login() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.title}>Inicio de sesión</Text>
        <Image
          alt='logo'
          style={styles.headerImg}
          source={Logo}
        />
        <Text style={styles.subtitle}>¡Bienvenido a SIGEA!</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Nombre de usuario</Text>
          <TextInput
            placeholder='nombre_usuario'
            placeholderTextColor='#6b7288'
            onChangeText={(text) => setForm({ ...form, username: text })}
            style={styles.inputControl}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Contraseña</Text>
          <TextInput
            placeholder='********'
            placeholderTextColor='#6b7288'
            style={styles.inputControl}
          />
          </View>

        <View style={styles.formAction}>
          <TouchableOpacity

          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Iniciar Sesión</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor:'#f9f9f9'
  },
  header: {
    marginVertical: 46,
    alignItems: 'center'
  },
  headerImg: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 27,
    fontWeight: '900',
    color: '#052368',
    textAlign: 'center',
    marginTop:50,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing:2,
    color:'#4480FF',
    fontWeight:'800',
  },
  form: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center'
  },
  input: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    backgroundColor: '#4480FF',
    borderRadius: 8,
    borderWidth: 1,
    height:40,
    borderColor: '#4480FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:25,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  }

})