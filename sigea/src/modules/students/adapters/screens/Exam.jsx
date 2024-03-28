import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import MultiAnswer from '../components/MultiAnswer';
import OpenAnswer from '../components/OpenAnswer';
import AxiosClient from '../../../../config/http-client/axios_client';

export default function Exam({ route }) {
  const { exam, user } = route.params;
  const [contentExam, setcontentExam] = useState([]); // Corrección aquí

  const id_exam = exam.id_exam;

  useEffect(() => {
    console.log('*********Entra al useEffect*********');
    // Aquí puedes hacer una petición a la API para obtener las preguntas del examen
    const obtenerQuestionsAndOptions = async () => {
      try {
        const response = await AxiosClient.get(`api/exam/questionsOptions/${id_exam}`);
        setcontentExam(response.data); // Asume que response.data es un array
      } catch (error) {
        console.error("Error al obtener las preguntas y opciones del examen", error);
        // Manejar el error como consideres apropiado
      }
    }
    obtenerQuestionsAndOptions();
  }, [exam]); // Agregar exam a la lista de dependencias si es necesario

  const parseOptions = (optionsString) => {
    return optionsString.split(', ').map(option => {
      const [id, text] = option.split(': ');
      return { id: Number(id), text: text };
    });
  };

  const renderQuestion = (question) => {
    const options = parseOptions(question.options);

    switch (question.questionType) {
      case 'OPEN_ANSWER':
        return <OpenAnswer key={question.idQuestion} question={question.question} />;
      case 'MULTIPLE_ANSWER':
        return <MultiAnswer key={question.idQuestion} question={question.question} options={options} />;
      default:
        return <Text key={question.idQuestion}>Tipo de pregunta no soportado</Text>;
    }
  };


  return (
    <ScrollView style={styles.container}>

        <Card.Title>{exam.name}</Card.Title>
        <Card.Divider />
        {
          contentExam.length > 0 // Verifica que contentExam no esté vacío
            ? contentExam.map(renderQuestion)
            : <Text>Cargando preguntas...</Text> // Puedes poner un spinner o algún indicador de carga aquí
        }

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0', // o el color de fondo que prefieras
    padding: 5,
  },
  // Agrega aquí cualquier otro estilo que necesites
});
