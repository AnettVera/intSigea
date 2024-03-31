import React from 'react';
import { Card, Radio, Label } from 'flowbite-react';

const QuestionResults = ({ question, isCorrect }) => {
  const options = question.textoOpciones ? question.textoOpciones.split(', ') : [];

  return (
    <div className="w-full flex justify-center mb-4">
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <Card className="w-full p-4"> 
          <div className="flex justify-between mb-4 text-right">
          <div className="font-medium text-left mb-4">
            {question.pregunta}
          </div>
          <div className="font-medium text-right">
              {isCorrect ? '1/1' : '0/1'}
            </div>
          </div>
          {question.textoOpciones === null ? (
            <div className={`bg-${isCorrect ? 'green' : 'red'}-100`}>
              <input
                type="text"
                value={question.respuestaEstudiante}
                disabled
                className={`block w-full py-1.5 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}
              />
            </div>
          ) : (
            <div className="space-y-2">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    isCorrect
                      ? question.respuestaEstudiante.includes(option) ? 'bg-green-100' : ''
                      : question.respuestaEstudiante.includes(option) ? 'bg-red-100' : ''
                  }`}
                >
                  <Radio
                    name={`question-${question.idQuestion}`}
                    value={option}
                    checked={question.respuestaEstudiante.includes(option)}
                    disabled
                    style={{
                      color: isCorrect ? (question.respuestaEstudiante.includes(option) ? '#4CAF50' : '#F44336') : '#F44336',
                    }}
                  />
                  <Label htmlFor={option} className="font-normal">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default QuestionResults;
