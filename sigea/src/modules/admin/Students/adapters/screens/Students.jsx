import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { ListItem, SearchBar } from '@rneui/themed';

export default function Students() {
  return (
    <View style={styles.container}>


      <Text>Estudiantes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      backgroundColor: "#fff",
      flexDirection: 'row'
    },
  });