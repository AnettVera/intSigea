import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Results(props) {
    const { params } = props.route;
  return (
    <View style={styles.container}>
         <Text style={{ fontWeight: "bold", color:"#052368", fontSize:'16' }}>{params.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 32,
      },
})