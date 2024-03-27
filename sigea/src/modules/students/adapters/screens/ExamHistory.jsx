import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ListaExam from "./ListaExam";

export default function ExamHistory(props) {
  const { navigation } = props;
  // se simula la data que vendría del backend
  const data = [
    {
      id: 1,
      nameExam: 'Examen 1',
      nameSub: 'Materia 1', 
      date: '25/11/2024', 
      unit: 'unidad II', 
      score: '10/12',  
      action: () =>
        navigation.navigate("Results", { title: 'Examen 1"' }),
    },
    {
        id: 2,
        nameExam: 'Examen 2',
        nameSub: 'Materia 2', 
        date: '29/07/2024', 
        unit: 'unidad II', 
        score: '11/12',  
        action: () =>
          navigation.navigate("Results", { title: 'Examen 2"' }),
      },
      {
        id: 3,
        nameExam: 'Examen 3',
        nameSub: 'Materia 3', 
        date: '09/04/2024', 
        unit: 'unidad II', 
        score: '12/12',  
        action: () =>
          navigation.navigate("Results", { title: 'Examen 3"' }),
      },
      {
        id: 4,
        nameExam: 'Examen 4',
        nameSub: 'Materia 4', 
        date: '13/01/2024', 
        unit: 'unidad II', 
        score: '9/12',  
        action: () =>
          navigation.navigate("Results", { title: 'Examen 4"' }),
      },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListaExam
            nameExam={item.nameExam}
            nameSub={item.nameSub}
            date={item.date}
            unit={item.unit}
            score={item.score}
            action={item.action}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContent: {
    paddingVertical: 16,
  },
});