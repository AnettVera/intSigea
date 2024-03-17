import React, { useState } from 'react';
import { Card, Select, Button, Tooltip, Radio, Label, FloatingLabel } from 'flowbite-react';
import { HiOutlineCheckCircle, HiPlus } from 'react-icons/hi2';

const QuestionCard = ({ questionType, onMarkCorrect, onDone }) => {
  const [options, setOptions] = useState(['']); 

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleDoneClick = () => {
    
    onDone(); 
  };

  return (
    <Card className="w-full my-7">
      <div className='sm:col-span-3 mb-4'>
        <div className='mt-0.5'>
          <input
            type='text'
            placeholder='Pregunta...'
            className='bg-indigo-100 block w-full my-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
          <hr className="my-4 border-t bg-indigo-200" />
          {questionType === 'Texto' ? (
            <div className='w-full flex justify-between'>
              <input
                style={{ width: '80%' }}
                type='text'
                placeholder='Posible respuesta correcta'
                className='bg-indigo-100 block mx-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
              <div className="mx-1" style={{ width: '20%' }}>
                
              </div>
            </div>
          ) : (
            
            <div className='flex w-full justify-between'>
              <div style={{ width: '92%' }}>
                {options.map((option, index) => (
                  <input
                    key={index}
                    type='text'
                    placeholder={`Opcion ${index + 1}`}
                    className='bg-indigo-100 block w-full my-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                ))}
              </div>
              <div style={{ width: '8%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Tooltip content='Agregar opcion'>
                  <Button onClick={handleAddOption} style={{ backgroundColor: '#4480FF', borderRadius: '50%', width: '2rem', height: '2rem', border: 'none', cursor: 'pointer' }}>
                    <HiPlus style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }} />
                  </Button>
                </Tooltip>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='w-full flex justify-between'>
        <Button onClick={questionType === '' ? onMarkCorrect : handleDoneClick} style={{ backgroundColor: '#fff', border: 'none', cursor: 'pointer', color: '#000' }}>
          {questionType === 'Texto' ? (
            <>
              <HiOutlineCheckCircle style={{ color: '#4480FF', fontSize: '1.5rem', marginRight: 5 }} />
              Marcar respuestas correctas
            </>
          ) : (
            'Hecho'
          )}
        </Button>
        
      </div>
    </Card>
  );
};

export default QuestionCard;


import React, { useState } from 'react';
import { Card, Select } from 'flowbite-react';
import QuestionCard from '../../components/question/QuestionCard';

const ExamPage = () => {
  const [questionType, setQuestionType] = useState('Texto');

  const handleMarkCorrect = () => {
    
  };

  const handleDone = () => {
   
  };

  const handleQuestionTypeChange = (selectedType) => {
    setQuestionType(selectedType);
  };

  return (
    <>
      <div className='w-full h-10 bg-blue-100 flex justify-between items-center p-4'>
        <label style={{ fontWeight: 'bold', color: '#052368', fontSize: '1.1rem' }}>Base de datos</label>
      </div>
      <div className='w-full p-5 justify-around text-center'>
        <div className='w-lg p-5 bg-gray-50'>
          <label style={{ fontWeight: 'bold', color: '#052368', fontSize: '1.5rem' }}>Examen diagnostico</label>
          <Card className="w-full my-7">
            <div className='sm:col-span-3 mb-4'>
              <div className='mt-0.5'>
                <QuestionCard
                  questionType={questionType}
                  onMarkCorrect={handleMarkCorrect}
                  onDone={handleDone}
                />
              </div>
            </div>
          </Card>
          <div className='w-full flex justify-between'>
            <Select
              id="questionType"
              required
              style={{ textAlign: 'center' }}
              onChange={(e) => handleQuestionTypeChange(e.target.value)}
              value={questionType}
            >
              <option value="Texto">Texto</option>
              <option value="Opcion multiple">Opcion multiple</option>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamPage;

