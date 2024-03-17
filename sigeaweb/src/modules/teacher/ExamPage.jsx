import React, { useState } from 'react';
import { Card, Select } from 'flowbite-react';
import { HiMagnifyingGlass, HiPlus, HiOutlineCheckCircle } from 'react-icons/hi2';
import MulText from '../../components/question/MulText';
import MulRadio from '../../components/question/MulRadio';



const ExamPage = () => {
  const [showTextCard, setShowTextCard] = useState(true);

  const handleMarkCorrect = () => {
    setShowTextCard(false);
  };

  const handleDone = () => {
    setShowTextCard(true);
  };
  return (
    <>
      <div className='w-full h-10 bg-blue-100 flex justify-between items-center p-4'>
        <label style={{ fontWeight: 'bold', color: '#052368', fontSize: '1.1rem' }}>Base de datos</label>

      </div>
      <div className='w-full p-5 justify-around text-center'>

        <div className='w-lg p-5 bg-gray-50'>
          <label style={{ fontWeight: 'bold', color: '#052368', fontSize: '1.5rem' }}>Examen diagnostico</label>

          <Card
            className="w-full my-7"
          >
            <div className='sm:col-span-3 mb-4' >
              <div className='mt-0.5'>
                <input
                  type='text'
                  placeholder='Pregunta...'
                  className='bg-indigo-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                <hr className="my-4 border-t bg-indigo-200" />
                <div className='w-full flex justify-between'>
                  <input
                    style={{ width: '80%' }}
                    type='text'
                    placeholder='Posible respuesta correcta'
                    className='bg-indigo-100 block  mx-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                  <div className=" mx-1" style={{ width: '20%' }}>
                    <Select id="countries" required style={{ textAlign: 'center' }}>
                      <option>Texto</option>
                      <option>Opcion multiple</option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {showTextCard ? (
            <MulText onMarkCorrect={handleMarkCorrect} />
          ) : (
            <MulRadio onDone={handleDone} />
          )}
        </div>
      </div>
    </>
  )
}

export default ExamPage
