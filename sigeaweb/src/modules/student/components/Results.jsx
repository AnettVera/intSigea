import React from 'react';
import QuestionResults from './QuestionResults';

const Results = () => {
  const contentExam = [
    {
      idQuestion: 1,
      pregunta: '¿Cuál es la raíz cuadrada de 36?',
      textoOpciones: 'Opción 1, Opción 2, 6, Opción 4',
      respuestaEstudiante: ['6'],
      estadoRespuesta: true,
    },
    {
      idQuestion: 2,
      pregunta: '¿Cuál es la capital de España?',
      textoOpciones: null,
      respuestaEstudiante: 'Madrid',
      estadoRespuesta: true,
    },
    {
      idQuestion: 3,
      pregunta: '¿Cuál es el color del caballo blanco de Napoleon?',
      textoOpciones: 'Rojo, Verde, Blanco, Azul',
      respuestaEstudiante: ['Verde'], 
      estadoRespuesta: false,
    },
    {
      idQuestion: 4,
      pregunta: 'Escribe la paradoja de el gato de Schrödinger',
      textoOpciones: null,
      respuestaEstudiante: 'Es un gato que da ternura',
      estadoRespuesta: false,
    },
  ];

  return (
    <div style={{ padding: '32px' }}>
      <h2 className="text-center mb-4 font-bold text-lg text-blue-900 !important">Examen 1</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> 
        {contentExam.map((question) => (
          <QuestionResults
            key={question.idQuestion}
            question={question}
            isCorrect={question.estadoRespuesta}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;
