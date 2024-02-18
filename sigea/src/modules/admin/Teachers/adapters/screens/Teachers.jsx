import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ListItem, SearchBar, Icon } from '@rneui/themed';
import TouchableScale from 'react-native-touchable-scale';

export default function Teachers() {
  return (
    <View style={styles.container}>
    <SearchBar 
    containerStyle={styles.cont}
    inputContainerStyle={styles.contInput}
      lightTheme={true}
      placeholder="Buscar docente por nombre"
    />

  <ListItem
   Component={TouchableScale}
   friction={90} 
   tension={100} 
   activeScale={0.95} 
  >
    
   
  <ListItem.Content>
      <ListItem.Title>Jose Alberto Garcia Munoz</ListItem.Title>
    </ListItem.Content>
    <Icon name="account-edit-outline" type="material-community" color="#4480FF" />
  </ListItem>

  <ListItem
  Component={TouchableScale}
  friction={90} 
  tension={100} 
  activeScale={0.95} 
  >
    <ListItem.Content>
      <ListItem.Title>Araceli Jacobo Martinez</ListItem.Title>
    </ListItem.Content>
    <Icon name="account-edit-outline" type="material-community" color="#4480FF" />
  </ListItem>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: "#fff",
  },
  cont:{
    backgroundColor:'#fff',
  },
  contInput:{
    backgroundColor:'#f9f9f9'
  }


});