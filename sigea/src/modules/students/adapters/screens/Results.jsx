import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import MultiAnswerR from '../components/MultiAnswerR';
import OpenAnswerR from '../components/OpenAnswerR';
import AxiosClient from '../../../../config/http-client/axios_client';
import { useAuth } from '../../../../config/context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function Results(props) {
  const { params } = props.route;
  const { title, id_exam, id_user, } = params;
  const [contentExam, setcontentExam] = useState([]); // Corrección aquí

  useEffect(() => {
    const fetchExamDetails = async () => {
      try {
        const questionsResponse = await AxiosClient.get(`/api/exam/ExamDetailsResponseStudent/${id_user}`);
        setcontentExam(questionsResponse.data);
      } catch (error) {
        console.error('Error al obtener el examen:', error);
      }
    };

    fetchExamDetails();
  }, [id_exam]);

  const parseOptions = (optionsString) => {
    if (optionsString) {
      return optionsString.split(', ').map(option => {
        return option;
      });
    } else {
      return [];
    }
  };

  const renderQuestion = (question) => {
    const options = parseOptions(question.textoOpciones);

    console.log(question);

    if (question.textoOpciones === null) {
      return (
        <OpenAnswerR
          key={question.idQuestion} // unique key prop
          idQuestion={question.idQuestion}
          question={question.pregunta}
          estadoRespuesta={question.estadoRespuesta}
          examId={question.examId}
          preguntaId={question.preguntaId}
          respuestaEstudiante={question.respuestaEstudiante}
          retroalimentacion={question.retroalimentacion}
        />
      );
    } else {
      return (
        <MultiAnswerR
          key={question.idQuestion} // unique key prop
          question={question.pregunta}
          options={options}
          idQuestion={question.idQuestion}
          estadoRespuesta={question.estadoRespuesta}
          examId={question.examId}
          opcionesCorrectasSiIncorrecta={question.opcionesCorrectasSiIncorrecta}
          preguntaId={question.preguntaId}
          respuestaEstudiante={question.respuestaEstudiante}
        />
      );
    }
  };

  return (
    <ScrollView style={styles.container}>

<Card.Title>{contentExam[0] ? contentExam[0].nombreExamen : 'Loading...'}</Card.Title>
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
    flex: 1,
    backgroundColor: "#fff",
    padding: 32,
  },
})