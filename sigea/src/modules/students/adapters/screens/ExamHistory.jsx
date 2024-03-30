import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ListaExam from "./ListaExam";
import AxiosClient from "../../../../config/http-client/axios_client";
import { useAuth } from '../../../../config/context/AuthContext';
export default function ExamHistory(props) {
  const { navigation } = props;
  const { userData, setArrayData } = useAuth();
  const [arrayExams, setArrayExams] = useState([]);

  const { user: { id_user, username, person: { name, lastname, surname, curp } } } = userData;

  useEffect(() => {

    const foudExamForStudent = async () => {
      try {
        const response = await AxiosClient.get(`api/exam/foundExamForStudent/${id_user}`);
        const exams = response.data.map((exam, index) => ({
          id: index,
          Examid: exam.idExam,
          nameExam: exam.examName,
          nameSub: exam.subjectName,
          date: exam.limitDate,
          unit: exam.unitName,
          score: exam.average || 'N/A',
          action: () =>
            navigation.navigate("Results", { title: exam.examName, id_exam: exam.idExam, id_user: id_user }),
        }));
        setArrayExams(exams);
      } catch (error) {
        console.log(error);
      }

    }

    foudExamForStudent();
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={arrayExams}
        renderItem={({ item }) => (
          <ListaExam
            nameExam={item.nameExam}
            nameSub={item.nameSub}
            date={item.date}
            unit={item.unit}
            score={item.score}
            action={item.action}
            idExam={item.Examid}
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