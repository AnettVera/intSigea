import { StyleSheet, ScrollView, FlatList, View, SafeAreaView } from 'react-native';
import React, {useState, useCallback} from 'react';
import { ListItem, SearchBar, Icon } from '@rneui/themed';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ListStudents from './components/ListStudents';
import AxiosClient from '../../../../../config/http-client/axios_client';

export default function Students() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const goToStudentSettings = (user) => {
    navigation.navigate('StudentSettings', { user });
  };


  const fetchData = async () => {

    setLoading(true);
    try {
      const response = await AxiosClient.get('api/user/allStudents');
      setUsers(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
      // Este retorno se llama cuando el componente pierde el foco, aquí no necesitamos hacer nada
      return () => {};
    }, [])
  );


  /*
  const users = [
    {
      id: 1,
      name: 'Anett Yomali',
      lastname: 'Vera',
      surname: 'Carbajal',
      matricula: '20223TN034',
      curp: 'VECA040828MBCRRNA6',
    }, {
      id: 2,
      name: 'Leyla Alondra',
      lastname: 'Villanueva',
      surname: 'Estrada',
      matricula: '20223TN036',
      curp: 'VIEL040124MBCRRNA6',
    }, {
      id: 3,
      name: 'Vulmaro Alberto',
      lastname: 'Martinez',
      surname: 'Verdugo',
      matricula: '20223TN069',
      curp: 'MAVV040830HBCRRNA6',
    }, {
      id: 4,
      name: 'Carlos Benjamin',
      lastname: 'Diaz',
      surname: 'Pedroza',
      matricula: '20223TN048',
      curp: 'DIPC040124MBCRRNA6',
    }, {
      id: 5,
      name: 'Moises Santiago',
      lastname: 'Gonzalez',
      surname: 'Retana',
      matricula: '20223TN055',
      curp: 'GORM041212HBCRRNA6',
    }, {
      id: 6,
      name: 'Jaqueline Nieobe',
      lastname: 'Hernandez',
      surname: 'Bernal',
      matricula: '20223TN057',
      curp: 'HEBJ040729MBCRRNA6',
    }, {
      id: 7,
      name: 'Martin',
      lastname: 'Ortega',
      surname: 'Montes',
      matricula: '20223TN139',
      curp: 'ORMM040605MBCRRNA6',
    }, {
      id: 8,
      name: 'Leonardo Daniel',
      lastname: 'Dorantes',
      surname: 'Castaneda',
      matricula: '20223TN040',
      curp: 'HEBJ040729MBCRRNA6',
    }, {
      id: 9,
      name: 'Diego Jesus',
      lastname: 'Hernandez',
      surname: 'Palma',
      matricula: '20223TN041',
      curp: 'HEBJ040729MBCRRNA6',
    }, {
      id: 10,
      name: 'Abril',
      lastname: 'Vera',
      surname: 'Carbajal',
      matricula: '20223TN021',
      curp: 'VECA040729MBCRRNA6',
    }, {
      id: 11,
      name: 'Ximena',
      lastname: 'Vera',
      surname: 'Carbajal',
      matricula: '20223TN043',
      curp: 'VECX040729MBCRRNA6',
    }, {
      id: 12,
      name: 'Mareidy Jopseline',
      lastname: 'Vera',
      surname: 'Carbajal',
      matricula: '20223TN044',
      curp: 'VECM040729MBCRRNA6',
    }, {
      id: 14,
      name: 'Edgar Raciel',
      lastname: 'Garcia',
      surname: 'Cruz',
      matricula: '20223TN045',
      curp: 'VECM040729MBCRRNA6',
    }

  ]
  */
// !!! AQUI TENGO QUE VALDIAR TOABIEN QUE SI NO TIENE ALGUNO DE SUS APELLIDOS NO SE MUESTRE O NOMBRES VACIOS
  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={styles.cont}
        inputContainerStyle={styles.contInput}
        lightTheme={true}
        placeholder="Buscar estudiante por nombre"
      />
      <SafeAreaView style={styles.contList}>
        <FlatList
          data={users}
          renderItem={({ item }) =>
            <ListStudents
              name={item.person.name}
              lastname={item.person.lastname}
              surname={item.person.surname}
              username={item.username}
              curp={item.person.curp}
              onPress={() => goToStudentSettings(item)}
            />
          }
          keyExtractor={item => item.id_user.toString()}
        />
      </SafeAreaView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: "#fff",
  },
  cont: {
    backgroundColor: '#fff',
  },
  contInput: {
    backgroundColor: '#f9f9f9'
  },
  contList: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  }


});