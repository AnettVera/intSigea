import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ListItem, SearchBar, Icon } from '@rneui/themed';
import TouchableScale from 'react-native-touchable-scale';
import { useNavigation } from '@react-navigation/native'; 

export default function Teachers() {
  const navigation = useNavigation(); 

  const goToTeacherSettings = () => {
    navigation.navigate('TeacherSettings');
  };

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
        onPress={goToTeacherSettings}
         >
        <ListItem.Content>
          <ListItem.Title>Jose Alberto Garcia Munoz</ListItem.Title>
        </ListItem.Content>
        <Icon
          name="account-edit-outline"
          type="material-community"
          color="#4480FF"
          onPress={goToTeacherSettings} // También puedes agregar la navegación al hacer clic en el icono
        />
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