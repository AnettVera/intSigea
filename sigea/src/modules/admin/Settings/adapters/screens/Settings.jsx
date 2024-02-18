import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/themed';

nombre="Sebastian Sota Garcia"
n=nombre[0];
export default function Settings() {
  return (

    <View style={styles.container}>
      <Avatar
        size={70}
        rounded
        title={n}
      containerStyle={{ backgroundColor: "#052368", marginVertical:20 }}
      />

      <Text style={styles.name}>{nombre}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  name:{
    fontSize:20,
    fontWeight:'bold',
  }
})

