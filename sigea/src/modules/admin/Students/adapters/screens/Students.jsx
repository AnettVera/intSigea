import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { ListItem, SearchBar, Icon } from '@rneui/themed';
import TouchableScale from 'react-native-touchable-scale';
import { useNavigation } from '@react-navigation/native'; 

export default function Students() {
  const navigation = useNavigation(); 

  const goToStudentSettings = () => {
    navigation.navigate('StudentSettings');
  };

  return (


    <ScrollView style={styles.container}>
        <SearchBar 
    containerStyle={styles.cont}
    inputContainerStyle={styles.contInput}
      lightTheme={true}
      placeholder="Buscar estudiante por nombre"
    />
  
      <ListItem
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        onPress={goToStudentSettings} 
      >
        <ListItem.Content>
          <ListItem.Title>Anett Yomali Vera Carbajal</ListItem.Title>
        </ListItem.Content>
        <Icon
          name="account-edit-outline"
          type="material-community"
          color="#4480FF"
          onPress={goToStudentSettings} 
        />
      </ListItem>

    </ScrollView>
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